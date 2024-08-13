"use client";
import { Button } from "@/components/ui/button";
import { Dot, MoveUpRight } from "lucide-react";
import { MoveDownRight } from "lucide-react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { client } from "@/lib/sanity";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter your phone number." }).optional(),
  source: z.string({
    required_error: "Please select where you found us.",
  }),
  message: z.string().min(1, { message: "Please enter a message." }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    client.create({
      _type: 'contactForm',
      name: values.name,
      email: values.email,
      phone: values.phone,
      source: values.source,
      message: values.message,
    }).then((res) => {
      console.log('Form submitted:', res);
    }).catch((err) => {
      console.error('Form submission error:', err);
    });
  }

  return (
    <div className="">
      {/* section 01 */}
      <div className="flex justify-between">
        <div className="lg:flex lg:items-start gap-20">
          <span className="flex items-center lg:mt-7">
            <Dot />
            Contact
          </span>
          <span className="text-7xl md:text-8xl lg:text-9xl">
            <p>It's nice to</p>
            <p className="flex items-center gap-10">
              <span>meet ya</span>
              <span className="bg-[#D0FF71] rounded-full p-10">
                <MoveDownRight size={25} className="text-black" />
              </span>
            </p>
          </span>
        </div>
        <div>
          <video
            src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/C-240304%20-%20Shape%20-%20P1.mp4"
            width={180}
            height={150}
            className="rounded-lg"
            autoPlay
            loop
          ></video>
        </div>
      </div>
      <hr className="my-12 lg:my-20" />

      {/* section 02 */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="col-span-1 my-8 lg:my-0 order-2 lg:order-1 lg:col-span-3">
          <p>
            For general enquiries, please fill out the form to get in touch.
            Alternatively, if you know your project details — head over to our
            project planner for a more refined step-by-step process.
          </p>
          <div className="flex gap-2 items-center my-5">
            <Button>Start a Project</Button>
            <div className="bg-[#D0FF71] rounded-full">
              <MoveUpRight size={25} className="text-black p-1" />
            </div>
          </div>
          <div className="flex gap-3">
            <p className="text-gray-900 dark:text-gray-400">Hate contact forms?</p>
            <p>hello@skyrek.lk</p>
          </div>
        </div>
        <div className="col-span-1 order-1 lg:order-2 lg:col-start-6 lg:col-end-13">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                      <Input placeholder="Phone (optional)" {...field} type="number"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="where do you here about us?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Google">Google</SelectItem>
                        <SelectItem value="Linkedin">Linkedin</SelectItem>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Friend">From a Friend</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="col-span-2">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
