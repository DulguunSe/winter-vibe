import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Trash2, Users, Phone, Calendar, MessageSquare, LogOut } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { createClient } from "../utils/supabase/client";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface Registration {
  id: string;
  name: string;
  phone: string;
  message: string;
  timestamp: string;
}

export function AdminPanel() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string>("");

  const supabase = createClient();

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (isAuthenticated && accessToken) {
      loadRegistrations();
    }
  }, [isAuthenticated, accessToken]);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.access_token) {
      setAccessToken(session.access_token);
      setIsAuthenticated(true);
    }
  };

  const loadRegistrations = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b7091b9c/registrations`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to load registrations');
      }

      setRegistrations(data.registrations || []);
    } catch (error) {
      console.error("Error loading registrations:", error);
      alert("Бүртгэл ачаалахад алдаа гарлаа: " + (error as Error).message);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.session?.access_token) {
        setAccessToken(data.session.access_token);
        setIsAuthenticated(true);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      alert("Нэвтрэх алдаа: " + (error.message || "Буруу имэйл эсвэл нууц үг"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setAccessToken("");
    setEmail("");
    setPassword("");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Энэ бүртгэлийг устгах уу?")) {
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b7091b9c/registrations/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete registration');
      }

      setRegistrations(registrations.filter(r => r.id !== id));
    } catch (error) {
      console.error("Error deleting registration:", error);
      alert("Устгахад алдаа гарлаа");
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('mn-MN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4">
        <Card className="bg-slate-900/50 border-slate-700/50 w-full max-w-md">
          <CardHeader>
            <h2 className="text-2xl text-white text-center">Winter Vibe Admin</h2>
            <p className="text-slate-400 text-center">Нэвтрэх</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Имэйл</label>
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Нууц үг</label>
                <Input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  placeholder="••••••••"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 disabled:opacity-50"
              >
                {isLoading ? "Нэвтэрч байна..." : "Нэвтрэх"}
              </Button>
            </form>
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-xs text-slate-400">
                💡 Анхны admin хэрэглэгч үүсгэх бол /admin/setup хуудас руу очно уу
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl text-white mb-2">Winter Vibe Admin</h1>
            <p className="text-slate-400">Бүртгүүлсэн хүмүүсийн мэдээлэл</p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-slate-700 text-slate-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Гарах
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Нийт бүртгэл</p>
                  <p className="text-3xl text-white">{registrations.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Өнөөдөр</p>
                  <p className="text-3xl text-white">
                    {registrations.filter(r => {
                      const today = new Date().toDateString();
                      const regDate = new Date(r.timestamp).toDateString();
                      return today === regDate;
                    }).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <MessageSquare className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Мессежтэй</p>
                  <p className="text-3xl text-white">
                    {registrations.filter(r => r.message).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registrations Table */}
        <Card className="bg-slate-900/50 border-slate-700/50">
          <CardContent className="p-6">
            {registrations.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">Одоогоор бүртгэл алга байна</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">Нэр</TableHead>
                      <TableHead className="text-slate-300">Утас</TableHead>
                      <TableHead className="text-slate-300">Мессеж</TableHead>
                      <TableHead className="text-slate-300">Огноо</TableHead>
                      <TableHead className="text-slate-300">Үйлдэл</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id} className="border-slate-700">
                        <TableCell className="text-white">{reg.name}</TableCell>
                        <TableCell className="text-slate-300">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-cyan-400" />
                            {reg.phone}
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-300 max-w-xs">
                          {reg.message ? (
                            <div className="truncate" title={reg.message}>
                              {reg.message}
                            </div>
                          ) : (
                            <span className="text-slate-500 italic">Мессеж үгүй</span>
                          )}
                        </TableCell>
                        <TableCell className="text-slate-400 text-sm">
                          {formatDate(reg.timestamp)}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(reg.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
