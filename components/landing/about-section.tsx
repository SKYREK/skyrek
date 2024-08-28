"use client";
import Image from "next/image";
import { Images } from 'lucide-react';
import { Handshake } from "lucide-react";

export default function AboutSection() {
  return (
    <section>
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-semibold tracking-tight text-black dark:text-white">
            About
          </h4>

          <h2 className="text-2xl font-bold tracking-tight text-black sm:text-4xl dark:text-white mt-2">
            Find Out More About Us
          </h2>

          <p className="mt-2 text-xl leading-8 text-black/80 dark:text-white">
            Customized software applications to optimize processes and enhance
            performance in various business domains.
          </p>
        </div>

        <div className="mx-auto max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Image
              src="/about.jpg"
              alt="About Section 1"
              className="rounded-lg"
              width={800}
              height={800}
            />
          </div>
          <div className="bg-gray-100 py-4 px-4 rounded-lg dark:bg-gray-900">
            <p className="text-lg font-semibold">Choose SKYREK - Your Partner in Digital Innovation.</p>
            <p className="text-sm text-gray-900 font-light italic text-justify dark:text-slate-300">
              At SKYREK, we are passionate about leveraging technology to propel
              your business to new heights. With a dedicated team of creative
              minds and technical wizards, we offer a diverse range of IT
              products and services tailored to your unique needs.
            </p>

            <div className="flex gap-4 items-center mt-4">
              <div>
                <Handshake />
              </div>
              <div>
                <p className="text-lg font-semibold">Transform Your Business Processes</p>
                <p className="text-sm text-gray-900 font-light text-justify dark:text-slate-300">
                  Trust us to revolutionize your workflow and operations. Our
                  expert team specializes in designing customized software
                  applications that streamline your processes, saving you time
                  and resources.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-4">
              <div>
                <Images />
              </div>
              <div>
                <p className="text-lg font-semibold">Transform Your Business Processes</p>
                <p className="text-sm text-gray-900 font-light text-justify dark:text-slate-300">
                  Trust us to revolutionize your workflow and operations. Our
                  expert team specializes in designing customized software
                  applications that streamline your processes, saving you time
                  and resources.
                </p>
              </div>
            </div>

            <p className="text-md text-gray-900 font-light mt-6 text-justify dark:text-slate-300">
              Let us take your business to new horizons. Our dedication to
              excellence and commitment to your success drive us to craft
              exceptional solutions for your every challenge. Embrace the power
              of technology with SKYREK today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
