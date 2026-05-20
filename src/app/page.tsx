import { Hero } from "@/components/sections/Hero";
import { Rolunk } from "@/components/sections/Rolunk";
import { Orokbefogadas } from "@/components/sections/Orokbefogadas";
import { Tamogatas } from "@/components/sections/Tamogatas";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Rolunk />
        <Orokbefogadas />
        <Tamogatas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
