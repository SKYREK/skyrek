"use client";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./mobile-navbar";
import ShimmerButton from "../magicui/shimmer-button";
import { HeaderRoutes } from "./header-routes";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="flex items-center justify-between py-4 px-3 md:px-8">
        <div className="flex items-center z-[50]">
          <MobileNavbar />
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="left-0 absolute w-full flex justify-center z-[40] ">
          <HeaderRoutes className="lg:flex  items-center gap-10 hidden " />
        </div>
        <div className="flex gap-3 md:gap-4 items-center z-[50]">
          <ModeToggle />
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </header>
      <hr />
    </>
  );
}
