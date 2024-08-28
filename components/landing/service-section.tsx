"use client";

import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CodeXml } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Layers } from 'lucide-react';
import { Palette } from 'lucide-react';
import { Shield } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
    {
        icon: <CodeXml/>,
        title: "Custom Web Development",
        description: "Our expert team crafts fully customized, responsive, and user-friendly websites that align with your business goals.",
    },
    {
        icon: <Smartphone/>,
        title: "Mobile App Development",
        description: "Reach your audience on the go with innovative and intuitive mobile applications for Android and iOS platforms.",
    },
    {
        icon: <Settings/>,
        title: "Business Automation Systems",
        description: "Streamline your operations and boost productivity with cutting-edge business automation solutions.",
    },
    {
        icon: <Layers/>,
        title: "Bespoke Software Solutions",
        description: "Optimize your processes with customized software applications tailored to your unique business needs.",
    },
    {
        icon: <Palette/>,
        title: "UI/UX Design",
        description: "Create visually stunning and user-friendly digital experiences that captivate your audience.",
    },
    {
        icon: <Shield/>,
        title: "Cybersecurity Solutions",
        description: "Protect your valuable assets with robust cybersecurity measures and data protection strategies.",
    }
]

export default function ServiceSection() {
  return (
    <section>
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-semibold tracking-tight text-black dark:text-white">
            Services
          </h4>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-black sm:text-6xl dark:text-white">
            Check our Services.
          </h2>

          <p className="mt-4 text-xl leading-8 text-black/80 dark:text-white">
            At SKYREK, we offer <strong>diverse range</strong> of IT products
            and services to elevate your business.
          </p>
        </div>

        <div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
          <Card className="flex flex-col items-center text-center" key={index}>
            <CardHeader className="flex justify-center">
                {service.icon}
            </CardHeader>
            <CardContent>
                <p className="text-xl font-bold tracking-tight text-black dark:text-white">{service.title}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-black/80 dark:text-white">{service.description}</p>
            </CardFooter>
          </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
