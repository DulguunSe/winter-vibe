import { Waves, Sparkles, Droplets, Clock, MapPin, Thermometer } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Pool() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20">
              <Waves className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-300">Premium Amenity</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Усан бассейн
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Хүйтэн Өвөлд Дулаан Усан Санд Сууж, Хиймэл Оюун Ухаанаар Хүссэн Вэб Сайт Аппликейшнаа Бүтээж Сур.
          </p>
        </div>

        {/* Main pool card */}
        <Card className="bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-teal-900/20 border-cyan-500/30 mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image/Visual side */}
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏊‍♂️</div>
                  <div className="flex gap-2 justify-center">
                    <Droplets className="w-8 h-8 text-cyan-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <Droplets className="w-8 h-8 text-blue-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <Droplets className="w-8 h-8 text-teal-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>

              {/* Info side */}
              <div className="p-8">
                <h3 className="text-2xl text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  Бассейны онцлог
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg mt-1">
                      <MapPin className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Тав тухтай орчин</h4>
                      <p className="text-slate-400 text-sm">Хувцас солих өрөө, шүршүүр болон бусад хэрэгцээт тоноглол</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg mt-1">
                      <Clock className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Биеийн зөв хөгжил</h4>
                      <p className="text-slate-400 text-sm">Өсвөр үеийн хүүхдүүдийн булчин, үе мөчний эрүүл мэндэд эерэг нөлөөтэй.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-500/10 rounded-lg mt-1">
                      <Thermometer className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Мэргэжлийн Багш</h4>
                      <p className="text-slate-400 text-sm">Мэргэжлийн багшийн удирдлага дор сэлэлт илүү үр дүнтэй яагддаг.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/50 border-slate-700/50 hover:border-cyan-500/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💆‍♂️</span>
              </div>
              <h3 className="text-white mb-2">Стресс бууруулах</h3>
              <p className="text-slate-400 text-sm">
                Усанд сэлэх нь стрессийг бууруулж, сэтгэл санааг тайвшруулна
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-white mb-2">Сэтгэл санаа сэргээх</h3>
              <p className="text-slate-400 text-sm">
                Coding-ын хооронд амрах нь оюун ухааныг шинэчилж, бүтээлч сэтгэлгээг нэмэгдүүлнэ
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50 hover:border-teal-500/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-white mb-2">Networking</h3>
              <p className="text-slate-400 text-sm">
                Сурагчидтай тав тухтай орчинд шинж найз нөхөдтэй болох боломж
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fun fact */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg px-6 py-4">
            <p className="text-slate-300 text-sm">
              <span className="text-cyan-400">Fun fact:</span> Олон томоохон tech компаниуд (Google, Facebook г.м) ажилтнуудад бассейн, gym зэрэг амралтын орчин бүрдүүлдэг. Учир нь энэ нь бүтээмжийг нэмэгдүүлдэг!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
