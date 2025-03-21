import Footer from "@/components/Footer";
import HeroCarousel from "@/components/Hero";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <HeroCarousel/>
      <Main/>
      <Footer/>
    </div>
  );
}
