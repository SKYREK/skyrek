import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/header";
import DotPattern from "@/components/magicui/dot-pattern";
import Globe from "@/components/magicui/globe";
import GridPattern from "@/components/magicui/grid-pattern";
import Ripple from "@/components/magicui/ripple";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="">
      <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
    </main>
  );
}
