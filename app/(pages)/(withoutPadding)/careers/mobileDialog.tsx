"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ApplyForm from "./applyForm";

export default function MobileDialog() {
  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <div className="w-full border border-gray-300 py-2 px-4 rounded-md text-[14px]">
          Apply
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="mx-auto my-2">
          <DrawerTitle>Apply for this job</DrawerTitle>
        </DrawerHeader>
        <ApplyForm />
        <DrawerFooter className="px-5 mb-4">
          <DrawerClose>
            <Button variant="outline" className="max-w-5xl mx-auto w-full -mt-0.5">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
