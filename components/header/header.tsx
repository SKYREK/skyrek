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
      <header className="flex items-center justify-between p-4 px-8">
        <div className="flex items-center">
          <MobileNavbar />
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <HeaderRoutes className="lg:flex items-center gap-14 hidden" />
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <Button>Contact Us</Button>
        </div>
      </header>
      <hr />
    </>
  );
}
