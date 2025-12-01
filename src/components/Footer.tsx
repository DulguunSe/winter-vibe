import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-xl text-white">Winter Vibe</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            <span>for passionate coders</span>
          </div>

          <div className="text-slate-400 text-sm">
            © 2025 Winter Vibe. All rights reserved.
          </div>
        </div>

        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>Build with AI, Create without limits ❄️🤖</p>
        </div>
      </div>
    </footer>
  );
}