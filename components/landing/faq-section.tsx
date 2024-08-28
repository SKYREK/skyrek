"use client";

import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Settings } from "lucide-react";
import { Layers } from "lucide-react";
import { Palette } from "lucide-react";
import { Shield } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    title: "What kind of IT services does SKYREK offer?",
    description:
      "SKYREK offers a wide range of IT services, including custom web development, mobile app development, business automation systems, bespoke software solutions, UI/UX design, and cybersecurity solutions.",
  },
  {
    title: "How do I request a quote for a project?",
    description:
      "You can request a quote for your project by contacting our team through the contact form on our website or by reaching out to us via email or phone. We will get back to you promptly to discuss your requirements and provide a tailored quote.",
  },
  {
    title: "Does SKYREK provide ongoing support for the projects?",
    description:
      "Yes, at SKYREK, we believe in building long-term partnerships with our clients. We offer comprehensive post-project support, including maintenance, updates, and troubleshooting, to ensure that your solutions continue to perform at their best.",
  },
  {
    title: "Can SKYREK assist in integrating existing software systems?",
    description:
      "Absolutely! SKYREK has expertise in seamless integration of existing software systems. Whether you need to integrate a new app with your current infrastructure or connect different software tools, our team can help you achieve a smooth and efficient workflow.",
  },
  {
    title: "What technologies does SKYREK use for web development?",
    description:
      "SKYREK employs the latest web development technologies to deliver top-notch solutions. Our team is proficient in HTML5, CSS3, Tailwind, JavaScript, and frameworks like MERN Stack. We ensure your website is modern, responsive, and tailored to your specific business needs.",
  },
  {
    title: "How long does it take to develop a custom mobile app?",
    description:
      "The development timeline for a custom mobile app depends on the complexity and features you require. We work closely with you to understand your project's scope and provide an estimated timeframe. Rest assured, our team is committed to delivering efficient and high-quality solutions within agreed timelines.",
  },
];

export default function FAQSection() {
  return (
    <section>
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8 mt-16">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-semibold tracking-tight text-black dark:text-white">
            Frequently Asked Questions
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black sm:text-4xl dark:text-white mt-2">
            Have a Question? Check out our FAQs
          </h2>

          <p className="mt-2 text-xl leading-8 text-black/80 dark:text-white">
            Here are some common questions about our IT products and services.
          </p>
        </div>

        <div className="mx-auto max-w-4xl w-full gap-4">
          {faqs.map((faq, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[15px] md:text-base">{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
