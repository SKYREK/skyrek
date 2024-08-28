import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import ServiceSection from "@/components/landing/service-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import FAQSection from "@/components/landing/faq-section";
import AboutSection from "@/components/landing/about-section";
export default function Home() {
  return (
    <main className="mx-auto flex-1 overflow-hidden">
      <HeroSection/>
      {/* <ClientSection /> */}
      <AboutSection/>
      <SphereMask />
      <ServiceSection />
      <FAQSection/>
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
