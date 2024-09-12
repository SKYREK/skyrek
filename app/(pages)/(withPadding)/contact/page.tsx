'use client'

import axios from "axios"
import { Button } from "@/components/ui/button"
import { Dot, MoveUpRight, MoveDownRight } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { client } from "@/lib/sanity"
import toast from "react-hot-toast"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Please enter your phone number." })
    .optional(),
  source: z.string({
    required_error: "Please select where you found us.",
  }),
  message: z.string().min(1, { message: "Please enter a message." }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    client
      .create({
        _type: "contactForm",
        name: values.name,
        email: values.email,
        phone: values.phone,
        source: values.source,
        message: values.message,
      })
      .then(() => {
        axios
          .post("/api/contact", values, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(() => {
            toast.success("Successfully Submitted")
          })
          .catch(() => {
            // toast.error("Form submitted, but email failed to send.")
          })
      })
      .catch((err) => {
        toast.error("Something went wrong!")
      })
    form.reset()
  }

  return (
    <div>
      {/* section 01 */}
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center mb-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-20 mb-8 lg:mb-0">
          <span className="flex items-center lg:mt-7">
            <Dot />
            Contact
          </span>
          <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <p>It&apos;s nice to</p>
            <p className="flex items-center gap-4 lg:gap-10">
              <span>meet ya</span>
              <span className="bg-[#D0FF71] rounded-full p-4 lg:p-10">
                <MoveDownRight size={25} className="text-black" />
              </span>
            </p>
          </div>
        </div>
        <div className="hidden md:block">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4 order-2 lg:order-1">
          <p className="mb-6">
            For general enquiries, please fill out the form to get in touch.
            Alternatively, if you know your project details — head over to our
            project planner for a more refined step-by-step process.
          </p>
          <div className="flex gap-2 items-center mb-6">
            <Link href="/contact">
              <Button>Start a Project</Button>
            </Link>
            <div className="bg-[#D0FF71] rounded-full p-2">
              <Link href="/contact"><MoveUpRight size={25} className="text-black" /></Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <p className="text-gray-900 dark:text-gray-400">
              Hate contact forms?
            </p>
            <p>info@skyrek.lk</p>
          </div>
        </div>
        <div className="lg:col-span-8 order-1 lg:order-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Input
                          placeholder="Phone (optional)"
                          {...field}
                          type="tel"
                        />
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
                            <SelectValue placeholder="Where did you hear about us?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Google">Google</SelectItem>
                          <SelectItem value="Linkedin">LinkedIn</SelectItem>
                          <SelectItem value="Facebook">Facebook</SelectItem>
                          <SelectItem value="Friend">From a Friend</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full md:w-auto">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}