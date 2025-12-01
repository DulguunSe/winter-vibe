import { Brain, Rocket, Users, Target, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Tools Mastery",
    description: "ChatGPT, Claude, Cursor, v0 зэрэг хэрэгслийг мэргэшүүлэх",
    color: "text-blue-400"
  },
  {
    icon: Rocket,
    title: "Хурдан хөгжүүлэлт",
    description: "Өдөрт биш, цагт хэмжигдэх хурдаар төсөл бүтээх",
    color: "text-cyan-400"
  },
  {
    icon: Users,
    title: "Бодит төслүүд",
    description: "Website болон mobile app portfolio бүтээх",
    color: "text-sky-400"
  },
  {
    icon: Target,
    title: "Код бичихгүй хөгжүүлэх",
    description: "Prompt engineering ба AI-guided development",
    color: "text-teal-400"
  },
  {
    icon: Zap,
    title: "Орчин үеийн технологи",
    description: "React, React Native, Next.js гэх мэт шинэ tech stack",
    color: "text-indigo-400"
  },
  {
    icon: Heart,
    title: "Санаанаас бүтээгдэхүүн хүртэл",
    description: "Idea-аасаа эхлээд бэлэн бүтээгдэхүүн болтол",
    color: "text-blue-300"
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Юу сурах вэ?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            AI ашиглан website болон mobile app хөгжүүлэх практик ур чадварууд
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className={`${feature.color} mb-4`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}