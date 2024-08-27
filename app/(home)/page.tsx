import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/header";
import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import DotPattern from "@/components/magicui/dot-pattern";
import Globe from "@/components/magicui/globe";
import GridPattern from "@/components/magicui/grid-pattern";
import Particles from "@/components/magicui/particles";
import Ripple from "@/components/magicui/ripple";
import { SphereMask } from "@/components/magicui/sphere-mask";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="mx-auto flex-1 overflow-hidden">
      <HeroSection/>
      {/* <ClientSection /> */}
      <SphereMask />
      <PricingSection />
      <CallToActionSection/>
      <Particles
            className="absolute inset-0 -z-10"
            quantity={50}
            ease={70}
            size={0.05}
            staticity={40}
            color="#ffffff"
         />
    </main>
  );
}
