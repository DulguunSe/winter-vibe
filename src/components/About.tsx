import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1710905775964-3a2ec8f32c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBjb3p5JTIwY29kaW5nfGVufDF8fHx8MTc2NDU4MDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Coding workspace"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block mb-4">
              <Badge variant="outline" className="border-blue-400/50 text-blue-200 px-4 py-2">
                Танилцуулга
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              AI-ын эрин үе ирлээ
            </h2>
            
            <p className="text-slate-300 text-lg mb-6">
              Уламжлалт кодчлол сурахад жилүүд шаардагдаж байсан бол, одоо <span className="text-cyan-300">Хиймэл оюун ухаан</span> ашиглаж 
              хэдхэн долоо хоногт website болон mobile app бүтээх боломжтой болсон. 
              ChatGPT, Claude, Cursor, v0 зэрэг AI хэрэгслүүд танд мэргэжлийн түвшний 
              програм хангамж бүтээхэд туслана.
            </p>

            <p className="text-slate-300 text-lg mb-8">
              <span className="text-blue-300">Winter Vibe</span> сургалт нь танд AI tools-ыг 
              мэргэжлийн түвшинд ашиглаж, бодит төслүүд хөгжүүлэх арга барилыг заана. 
              Код бичихээс илүү <span className="text-cyan-300">санаагаа хэрэгжүүлэх</span> дээр анхаарна.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="text-3xl mb-2">🌐</div>
                <div className="text-blue-200">Websites</div>
                <div className="text-sm text-slate-400">AI-ээр вэб хөгжүүлэх</div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <div className="text-3xl mb-2">📱</div>
                <div className="text-cyan-200">Mobile Apps</div>
                <div className="text-sm text-slate-400">App бүтээх технологи</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}