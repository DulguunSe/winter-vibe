import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { UserPlus } from "lucide-react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function AdminSetup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b7091b9c/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create admin user');
      }

      setSuccess(true);
      alert("Амжилттай! Admin хэрэглэгч үүсгэгдлээ. Одоо /admin хуудас руу очиж нэвтэрнэ үү.");
    } catch (error) {
      console.error("Error creating admin:", error);
      alert("Алдаа гарлаа: " + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4">
      <Card className="bg-slate-900/50 border-slate-700/50 w-full max-w-md">
        <CardHeader>
          <h2 className="text-2xl text-white text-center">Admin хэрэглэгч үүсгэх</h2>
          <p className="text-slate-400 text-center">Анхны удаа тохиргоо</p>
        </CardHeader>
        <CardContent>
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-white mb-2">Амжилттай үүсгэгдлээ!</p>
              <p className="text-slate-400 mb-6">Одоо /admin хуудас руу очиж нэвтэрнэ үү</p>
              <Button
                onClick={() => window.location.href = '/admin'}
                className="bg-gradient-to-r from-blue-500 to-cyan-500"
              >
                Admin панел руу очих
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">
                  Нэр <span className="text-red-400">*</span>
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  placeholder="Таны нэр"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">
                  Имэйл <span className="text-red-400">*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">
                  Нууц үг <span className="text-red-400">*</span>
                </label>
                <Input
                  type="password"
                  required
                  minLength={6}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  placeholder="Хамгийн багадаа 6 тэмдэгт"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 disabled:opacity-50"
              >
                {isLoading ? "Үүсгэж байна..." : "Admin үүсгэх"}
              </Button>
            </form>
          )}
          
          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-xs text-slate-300">
              ⚠️ Энэ хуудсыг зөвхөн анхны удаа admin хэрэглэгч үүсгэхэд ашиглана уу. Үүсгэсний дараа энэ хуудсыг хаагаарай.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
