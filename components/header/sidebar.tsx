import Link from "next/link";
import ShimmerButton from "../magicui/shimmer-button";
import { HeaderRoutes } from "./header-routes";
import { Logo } from "./logo";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mt-10">
        <div className="flex justify-center">
          <Link href="/"><Logo /></Link>
        </div>
        <HeaderRoutes className="flex flex-col items-center gap-14 mt-10" />
      </div>
      <Link href="/contact"><Button className="w-full">Contact Us</Button></Link>
    </div>
  );
}
