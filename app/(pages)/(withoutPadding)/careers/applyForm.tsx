import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import AttachmentForm from "./attachment-form";
import { Loader2 } from "lucide-react";

// Define form schema for validation
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter your phone number." }),
});

export default function ApplyForm({ onClose }: { onClose: () => void }) {
  // State for tracking attachments and attachment links
  const [hasAttachment, setHasAttachment] = useState(false);
  const [attachmentLinks, setAttachmentLinks] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!hasAttachment) {
      alert("Please upload an attachment before submitting.");
      return;
    }

    setIsSubmitting(true);

    // Send form data to API
    try {
      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          attachments: attachmentLinks, // Pass the actual attachment links
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        // Trigger confetti effect after successful form submission
        fireConfetti();
        form.reset();
        setHasAttachment(false); // Reset attachment state after submission
        setAttachmentLinks([]); // Reset the attachment links
        // Close the dialog box
        onClose();
      } else {
        console.log("Failed to send email");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Function to trigger confetti
  const fireConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 600,
      origin: { y: 0.6 },
      zIndex: 9999, // Ensure confetti appears on top of everything
    });
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto px-5 lg:px-0"
        >
          {/* mobile screen */}
          <div className="flex flex-row gap-5 md:hidden">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="hidden md:flex">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="hidden md:flex">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Mobile Number" {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Attachment form */}
          <div className="lg:col-span-2">
            <AttachmentForm
              setHasAttachment={setHasAttachment}
              setAttachmentLinks={setAttachmentLinks} // Pass setAttachmentLinks to store URLs
            />
          </div>

          {/* Submit button, disabled until an attachment is uploaded */}
          <div className="lg:col-span-2 flex justify-center">
            <Button
              type="submit"
              disabled={!hasAttachment || isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
