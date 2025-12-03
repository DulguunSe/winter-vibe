import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b7091b9c/health", (c) => {
  return c.json({ status: "ok" });
});

// Submit registration
app.post("/make-server-b7091b9c/registrations", async (c) => {
  try {
    const body = await c.req.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return c.json({ error: "Name and phone are required" }, 400);
    }

    const registration = {
      name,
      phone,
      message: message || "",
      timestamp: new Date().toISOString(),
    };

    // Generate unique ID
    const id = `registration_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store in KV store
    await kv.set(id, registration);

    console.log(`Registration created: ${id}`, registration);

    return c.json({ success: true, id });
  } catch (error) {
    console.error("Error creating registration:", error);
    return c.json({ error: "Failed to create registration", details: String(error) }, 500);
  }
});

// Get all registrations (admin only)
app.get("/make-server-b7091b9c/registrations", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized - No token provided" }, 401);
    }

    // Verify user with access token
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user) {
      console.error("Auth error:", authError);
      return c.json({ error: "Unauthorized - Invalid token" }, 401);
    }

    // Get all registrations
    const registrations = await kv.getByPrefix('registration_');
    
    // Sort by timestamp (newest first)
    const sorted = registrations.sort((a, b) => {
      return new Date(b.value.timestamp).getTime() - new Date(a.value.timestamp).getTime();
    });

    return c.json({ 
      success: true, 
      registrations: sorted.map(r => ({
        id: r.key,
        ...r.value
      }))
    });
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return c.json({ error: "Failed to fetch registrations", details: String(error) }, 500);
  }
});

// Delete registration (admin only)
app.delete("/make-server-b7091b9c/registrations/:id", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Verify user
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const id = c.req.param('id');
    await kv.del(id);

    console.log(`Registration deleted: ${id}`);

    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting registration:", error);
    return c.json({ error: "Failed to delete registration", details: String(error) }, 500);
  }
});

// Sign up endpoint
app.post("/make-server-b7091b9c/auth/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name: name || "" },
      // Automatically confirm the user's email since an email server hasn't been configured
      email_confirm: true
    });

    if (error) {
      console.error("Signup error:", error);
      return c.json({ error: error.message }, 400);
    }

    console.log(`User created: ${data.user?.email}`);

    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.error("Error in signup:", error);
    return c.json({ error: "Failed to create user", details: String(error) }, 500);
  }
});

Deno.serve(app.fetch);
