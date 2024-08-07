import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/header";
import GridPattern from "@/components/magicui/grid-pattern";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Header/>
      <Footer/>
    </main>
  );
}
