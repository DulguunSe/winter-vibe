import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b7091b9c/registrations`,
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
        throw new Error(data.error || 'Failed to submit registration');
      }

      alert("Баярлалаа! Таны мэдээллийг хүлээн авлаа. Тун удахгүй холбогдох болно!");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Бүртгүүлэх хүсэлтээ илгээх
          </h2>
          <p className="text-slate-300 text-lg">
            Та яг одоо бүртгүүлээд 5% хөнгөлөлт аваарай.
          </p>
        </div>

        <Card className="bg-slate-900/50 border-slate-700/50">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2">
                  Таны нэр <span className="text-red-400">*</span>
                </label>
                <Input
                  required
                  placeholder="Нэрээ оруулна уу"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">
                  Утасны дугаар <span className="text-red-400">*</span>
                </label>
                <Input
                  type="tel"
                  required
                  placeholder="99xxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">
                  Мессеж (сонголттой)
                </label>
                <Textarea
                  placeholder="Танд ямар асуулт байна?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-32"
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 disabled:opacity-50"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Илгээж байна..." : "Мэдээлэл илгээх"}
              </Button>
            </form>

            {/* Contact methods */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-center text-slate-400 mb-6">Эсвэл шууд холбогдох</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-blue-400/50 text-blue-300 hover:bg-blue-500/10">
                  <Mail className="w-4 h-4 mr-2" />
                  Email илгээх
                </Button>
                <Button variant="outline" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messenger
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
