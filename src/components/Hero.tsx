import { Code2, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-blue-300" />
          <span className="text-blue-200 text-sm">AI-Powered Development 🤖</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Winter Vibe
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
          AI ашиглан Вэб болон App Хөгжүүлэх Сургалт
        </p>
        
        <p className="text-lg text-slate-200 mb-12 max-w-2xl mx-auto">
          Уламжлалт кодчлол биш - Хиймэл оюун ухааны хүчээр website болон mobile app бүтээх шинэ эрин
        </p>

        {/* Icons */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-cyan-300" />
            <span className="text-slate-200">AI-Powered</span>
          </div>
          <div className="w-px h-12 bg-blue-400/30" />
          <div className="flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-blue-300" />
            <span className="text-slate-200">Fast Development</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg"
            onClick={scrollToContact}
          >
            Сургалтад бүртгүүлэх
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-400/50 text-blue-200 hover:bg-blue-500/10 px-8 py-6 text-lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Дэлгэрэнгүй
          </Button>
        </div>
      </div>
    </section>
  );
}