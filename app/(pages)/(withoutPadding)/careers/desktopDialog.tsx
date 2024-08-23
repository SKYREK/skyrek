import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ApplyForm from "./applyForm";

export default function DesktopDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Apply</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Apply for this job</DialogTitle>
        </DialogHeader>
        {/* form */}
        <ApplyForm />
      </DialogContent>
    </Dialog>
  );
}
