import ShimmerButton from "../magicui/shimmer-button";
import { HeaderRoutes } from "./header-routes";
import { Logo } from "./logo";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mt-10">
        <div className="flex justify-center">
          <a href="/"><Logo /></a>
        </div>
        <HeaderRoutes className="flex flex-col items-center gap-14 mt-10" />
      </div>
      <ShimmerButton>Get Started</ShimmerButton>
    </div>
  );
}
