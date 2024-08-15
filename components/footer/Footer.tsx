import Link from "next/link";
import { Logo } from "../header/logo";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { Navigation } from "lucide-react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import { Tally1 } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-black rounded-t-xl text-white">
      {/* <div className="flex flex-col gap-2 absolute left-10 bg-white dark:bg-[#020817] pr-2 pb-2 rounded-br-xl">
        <div className="bg-[#D0FF71] rounded-full w-fit">
          <Facebook size={30} className="text-black p-1" />
        </div>
        <div className="bg-[#D0FF71] rounded-full w-fit">
          <Linkedin size={30} className="text-black p-1" />
        </div>
        <div className="bg-[#D0FF71] rounded-full w-fit">
          <Twitter size={30} className="text-black p-1" />
        </div>
        <div className="bg-[#D0FF71] rounded-full w-fit">
          <Instagram size={30} className="text-black p-1" />
        </div>
        <div className="bg-[#D0FF71] rounded-full w-fit">
          <Github size={30} className="text-black p-1" />
        </div>
      </div> */}
      {/* <div className="absolute right-10 bg-white dark:bg-[#020817] pr-2 pb-2 rounded-bl-xl p-2">
        <p className="text-sm text-black dark:text-white">Sh*t I{"’"}ve gone too far, send me back up👆</p>
      </div> */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 pt-14 lg:pt-10 px-10 lg:px-32">
        <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
          <p className="text-4xl">
            Do you Like <br className="hidden lg:block" /> what you see?
          </p>
          <div className="flex gap-2 items-center">
            <Button>Start a Project</Button>
            <div className="bg-[#D0FF71] rounded-full">
              <MoveUpRight size={25} className="text-black p-1" />
            </div>
          </div>
          <div className="flex gap-2 pr-2 pb-2 rounded-br-xl">
            <div className="bg-slate-300 rounded-full w-fit">
              <Facebook size={30} className="text-black p-1.5" />
            </div>
            <div className="bg-slate-300 rounded-full w-fit">
              <Linkedin size={30} className="text-black p-1.5" />
            </div>
            <div className="bg-slate-300 rounded-full w-fit">
              <Twitter size={30} className="text-black p-1.5" />
            </div>
            <div className="bg-slate-300 rounded-full w-fit">
              <Instagram size={30} className="text-black p-1.5" />
            </div>
            <div className="bg-slate-300 rounded-full w-fit">
              <Github size={30} className="text-black p-1.5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-400">Learn</p>
          <Link href="#">About</Link>
          <Link href="#">Culture</Link>
          <Link href="#">Testimonials</Link>
          <Link href="#">Processes</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-400">Explore</p>
          <Link href="/">Home</Link>
          <div className="flex gap-2 items-center">
            <Link href="/projects">Projects</Link>
            <Badge variant="secondary">New</Badge>
          </div>
          <Link href="#">Services</Link>
          <Link href="/careers">Careers</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Gallery</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-400">Get in touch</p>
          <div className="flex gap-2 items-center">
            <Phone size={18} />
            <p>+44 123 456 789</p>
          </div>
          <div className="flex gap-2 items-center">
            <Mail size={18} />
            <p>info@Skyrek.lk</p>
          </div>
          <div className="flex gap-2 justify-start">
            <MapPin size={18} className="mt-1" />
            <div className="flex flex-col">
              <p>Manchester, UK</p>
              <p>1 Gibfield Park Avenue</p>
              <p>Atherton Manchester</p>
              <p>M46 0SU</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Navigation size={18} />
            <p>///topped.little.pirate</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-slate-800 text-4xl md:text-6xl lg:text-[170px] px-20 my-10 tracking-wide">
        Crafting Since 2019
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between items-center px-16 pb-10">
        <div className="flex flex-col lg:flex-row items-center my-2 lg:my-0">
          <Logo />
          <Link
            href="#"
            className="text-sm text-gray-400 inline-block lg:inline mt-2 lg:my-0 mr-3"
          >
            © Skyrek Ltd 2024.
          </Link>
          <Tally1 className="hidden lg:block" />
          <Link href="#" className="text-sm text-gray-400">
            Company Reg Number 10529058
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <Link href="#" className="text-sm text-gray-400 mr-3">
            Web Design Manchester
          </Link>
          <Tally1 className="hidden lg:block" />
          <Link href="#" className="text-sm text-gray-400 mr-3">
            All Rights Reserved
          </Link>
          <Tally1 className="hidden lg:block" />
          <Link href="#" className="text-sm text-gray-400">
            Privacy Policy (you really care?)
          </Link>
        </div>
      </div>
    </div>
  );
}
