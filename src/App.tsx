import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { CourseInfo } from "./components/CourseInfo";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Hero />
      <About />
      <Features />
      <CourseInfo />
      <CTA />
      <Footer />
    </div>
  );
}