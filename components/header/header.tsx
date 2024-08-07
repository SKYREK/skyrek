"use client";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./mobile-navbar";
import ShimmerButton from "../magicui/shimmer-button";
import { HeaderRoutes } from "./header-routes";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-[#000000]">
        <div className="flex items-center">
          <MobileNavbar />
          <Logo />
        </div>
        <HeaderRoutes className="lg:flex items-center gap-14 hidden text-white" />
        <ShimmerButton>Get Started</ShimmerButton>
      </header>
    </>
  );
}
