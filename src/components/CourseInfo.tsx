import { Calendar, Clock, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function CourseInfo() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Сургалтын мэдээлэл
          </h2>
          <p className="text-slate-300 text-lg">
            Танд тохирсон цаг хугацааг сонгоод эхлээрэй
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30">
            <CardContent className="p-6">
              <Calendar className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl mb-2 text-white">Хичээлийн хуваарь</h3>
              <p className="text-slate-300">Долоо хоног бүр 2-3 удаа</p>
              <p className="text-sm text-slate-400 mt-2">Уян хатан цаг хуваарь</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/30">
            <CardContent className="p-6">
              <Clock className="w-10 h-10 text-cyan-300 mb-4" />
              <h3 className="text-xl mb-2 text-white">Үргэлжлэх хугацаа</h3>
              <p className="text-slate-300">8-12 долоо хоног</p>
              <p className="text-sm text-slate-400 mt-2">Интенсив сургалт</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sky-900/30 to-blue-900/30 border-sky-500/30">
            <CardContent className="p-6">
              <MapPin className="w-10 h-10 text-sky-300 mb-4" />
              <h3 className="text-xl mb-2 text-white">Хэлбэр</h3>
              <p className="text-slate-300">Online болон Offline</p>
              <p className="text-sm text-slate-400 mt-2">Хаанаас ч орох боломжтой</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 border-teal-500/30">
            <CardContent className="p-6">
              <Award className="w-10 h-10 text-teal-300 mb-4" />
              <h3 className="text-xl mb-2 text-white">Гэрчилгээ</h3>
              <p className="text-slate-300">Төгссөний гэрчилгээ</p>
              <p className="text-sm text-slate-400 mt-2">+ Portfolio төсөл</p>
            </CardContent>
          </Card>
        </div>

        {/* What you'll learn */}
        <Card className="bg-slate-900/50 border-slate-700/50">
          <CardContent className="p-8">
            <h3 className="text-2xl mb-6 text-white text-center">Хөтөлбөр</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-300 mb-4">AI Tools & Platforms</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>ChatGPT, Claude гэх мэт AI чатботууд</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Cursor, v0.dev, Bolt.new зэрэг AI IDE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>React болон Next.js frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Deployment & hosting (Vercel, Netlify)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-cyan-300 mb-4">Skills & Mindset</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Prompt engineering & AI communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Product thinking & user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Mobile app development basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Monetization & launching products</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}