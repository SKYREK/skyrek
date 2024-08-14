import {
    Sheet,
    SheetContent,
    SheetTrigger
  } from "@/components/ui/sheet";

  import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

  export const MobileNavbar = () => {
    return (
      <Sheet>
        <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
          <Menu/>
        </SheetTrigger>
        <SheetContent side="left" className="p-5">
          <Sidebar />
        </SheetContent>
      </Sheet>
    )
  }