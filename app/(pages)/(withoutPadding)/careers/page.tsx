import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import SparklesText from "@/components/magicui/sparkles-text";
import { JobLogo } from "./jobLogo";
import { BriefcaseBusiness } from "lucide-react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileDialog from "./mobileDialog";
import DesktopDialog from "./desktopDialog";

export default function Careers() {
  return (
    <div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden border bg-background p-10 md:p-20">
        <div className="z-10 whitespace-pre-wrap text-center text-2xl md:text-5xl font-medium tracking-tighter text-black dark:text-white">
          <div>
            Explore Exciting Career{" "}
            <SparklesText
              text="Opportunities"
              className="inline-block font-normal text-2xl md:text-5xl"
              sparklesCount={7}
            />{" "}
            With Us
          </div>
          <div className="block text-base tracking-wide text-black dark:text-white font-light mt-2">
            Discover the power of our features spotlight and unleash the full
            potential of our offerings.
          </div>
        </div>
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(1400px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      <hr className="bg-gray-300 border-0" />

      <div className="my-12 lg:my-16 mx-8 max-w-[60rem] flex flex-col lg:mx-auto">
        {/* Development */}
        <div className="mb-8">
          <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
            Development
          </p>
          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <div className="md:flex gap-4 justify-between">
                <div className="flex items-center gap-2 lg:gap-4 justify-between">
                  <JobLogo />
                  <div className="flex flex-col gap-2">
                    <p>
                      Senior Software Engineer - Full Stack - Artificial
                      Intelligence (SW01)
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <p>Full-time</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <p>Colombo, Sri Lanka</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="lg:hidden">
                    <MobileDialog/>
                  </div>
                  <div className="hidden lg:block">
                    <DesktopDialog/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operations */}
        <div className="mb-8">
          <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
            Operations
          </p>
          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <div className="md:flex gap-4 justify-between">
                <div className="flex items-center gap-4 justify-between">
                  <JobLogo />
                  <div className="flex flex-col gap-2">
                    <p>
                      Senior Software Engineer - Full Stack - Artificial
                      Intelligence (SW01)
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <p>Full-time</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <p>Colombo, Sri Lanka</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button variant={"outline"} className="w-full">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IT */}
        <div className="mb-8">
          <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
            IT
          </p>
          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <div className="md:flex gap-4 justify-between">
                <div className="flex items-center gap-4 justify-between">
                  <JobLogo />
                  <div className="flex flex-col gap-2">
                    <p>
                      Senior Software Engineer - Full Stack - Artificial
                      Intelligence (SW01)
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <p>Full-time</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <p>Colombo, Sri Lanka</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button variant={"outline"} className="w-full">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Software and Innovations */}
        <div className="mb-8">
          <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
            Software and Innovations
          </p>
          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <div className="md:flex gap-4 justify-between">
                <div className="flex items-center gap-4 justify-between">
                  <JobLogo />
                  <div className="flex flex-col gap-2">
                    <p>
                      Senior Software Engineer - Full Stack - Artificial
                      Intelligence (SW01)
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <p>Full-time</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <p>Colombo, Sri Lanka</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button variant={"outline"} className="w-full">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Development */}
        <div className="mb-8">
          <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
            Business Development
          </p>
          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 p-4 rounded-lg">
              <div className="md:flex gap-4 justify-between">
                <div className="flex items-center gap-4 justify-between">
                  <JobLogo />
                  <div className="flex flex-col gap-2">
                    <p>
                      Senior Software Engineer - Full Stack - Artificial
                      Intelligence (SW01)
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <p>Full-time</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <p>Colombo, Sri Lanka</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button variant={"outline"} className="w-full">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
