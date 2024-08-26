import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import SparklesText from "@/components/magicui/sparkles-text";
import { JobLogo } from "./jobLogo";
import { BriefcaseBusiness } from "lucide-react";
import { MapPin } from "lucide-react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileDialog from "./mobileDialog";
import DesktopDialog from "./desktopDialog";
import { client } from "@/lib/sanity";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'career'] | order(_createdAt desc){
    jobTitle,
    contractType,
    workingMode,
    location,
    "jobCategory":jobCategory->{jobCategory},
    "currentSlug": slug.current,
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Careers() {
  const data = await getData();
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
        {data.some(
          (post: any) => post.jobCategory.jobCategory === "Development"
        ) && (
          <div className="mb-8">
            <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
              Development
            </p>
            {data
              .filter(
                (post: any) => post.jobCategory.jobCategory === "Development"
              )
              .map((post: any, idx: any) => (
                <div className="flex flex-col gap-4" key={idx}>
                  <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="md:flex gap-4 justify-between">
                      <div className="flex items-center gap-2 lg:gap-4 justify-between">
                        <JobLogo />
                        <div className="flex flex-col gap-2">
                          <Link href={`/careers/${post.currentSlug}`}>
                            <p>{post.jobTitle}</p>
                          </Link>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <BriefcaseBusiness className="h-4 w-4" />
                              <p>{post.contractType}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <p>{post.workingMode}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <p>{post.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="lg:hidden">
                          <MobileDialog />
                        </div>
                        <div className="hidden lg:block">
                          <DesktopDialog />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Operations */}
        {data.some(
          (post: any) => post.jobCategory.jobCategory === "Development"
        ) && (
          <div className="mb-8">
            <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
              Operations
            </p>
            {data
              .filter(
                (post: any) => post.jobCategory.jobCategory === "Operations"
              )
              .map((post: any, idx: any) => (
                <div className="flex flex-col gap-4" key={idx}>
                  <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="md:flex gap-4 justify-between">
                      <div className="flex items-center gap-2 lg:gap-4 justify-between">
                        <JobLogo />
                        <div className="flex flex-col gap-2">
                          <Link href={`/careers/${post.currentSlug}`}>
                            <p>{post.jobTitle}</p>
                          </Link>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <BriefcaseBusiness className="h-4 w-4" />
                              <p>{post.contractType}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <p>{post.workingMode}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <p>{post.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="lg:hidden">
                          <MobileDialog />
                        </div>
                        <div className="hidden lg:block">
                          <DesktopDialog />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* IT */}
        {data.some(
          (post: any) => post.jobCategory.jobCategory === "Development"
        ) && (
          <div className="mb-8">
            <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
              IT
            </p>
            {data
              .filter((post: any) => post.jobCategory.jobCategory === "IT")
              .map((post: any, idx: any) => (
                <div className="flex flex-col gap-4" key={idx}>
                  <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="md:flex gap-4 justify-between">
                      <div className="flex items-center gap-2 lg:gap-4 justify-between">
                        <JobLogo />
                        <div className="flex flex-col gap-2">
                          <Link href={`/careers/${post.currentSlug}`}>
                            <p>{post.jobTitle}</p>
                          </Link>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <BriefcaseBusiness className="h-4 w-4" />
                              <p>{post.contractType}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <p>{post.workingMode}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <p>{post.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="lg:hidden">
                          <MobileDialog />
                        </div>
                        <div className="hidden lg:block">
                          <DesktopDialog />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Software and Innovations */}
        {data.some(
          (post: any) => post.jobCategory.jobCategory === "Development"
        ) && (
          <div className="mb-8">
            <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
              Software and Innovations
            </p>
            {data
              .filter(
                (post: any) =>
                  post.jobCategory.jobCategory === "Software and Innovations"
              )
              .map((post: any, idx: any) => (
                <div className="flex flex-col gap-4" key={idx}>
                  <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="md:flex gap-4 justify-between">
                      <div className="flex items-center gap-2 lg:gap-4 justify-between">
                        <JobLogo />
                        <div className="flex flex-col gap-2">
                          <Link href={`/careers/${post.currentSlug}`}>
                            <p>{post.jobTitle}</p>
                          </Link>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <BriefcaseBusiness className="h-4 w-4" />
                              <p>{post.contractType}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <p>{post.workingMode}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <p>{post.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="lg:hidden">
                          <MobileDialog />
                        </div>
                        <div className="hidden lg:block">
                          <DesktopDialog />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Business Development */}
        {data.some(
          (post: any) => post.jobCategory.jobCategory === "Business Development"
        ) && (
          <div className="mb-8">
            <p className="text-2xl font-semibold mb-3 text-slate-700 dark:text-slate-300">
              Business Development
            </p>
            {data
              .filter(
                (post: any) =>
                  post.jobCategory.jobCategory === "Business Development"
              )
              .map((post: any, idx: any) => (
                <div className="flex flex-col gap-4" key={idx}>
                  <div className="border border-gray-300 p-4 rounded-lg">
                    <div className="md:flex gap-4 justify-between">
                      <div className="flex items-center gap-2 lg:gap-4 justify-between">
                        <JobLogo />
                        <div className="flex flex-col gap-2">
                          <Link href={`/careers/${post.currentSlug}`}>
                            <p>{post.jobTitle}</p>
                          </Link>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <BriefcaseBusiness className="h-4 w-4" />
                              <p>{post.contractType}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <p>{post.workingMode}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <p>{post.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="lg:hidden">
                          <MobileDialog />
                        </div>
                        <div className="hidden lg:block">
                          <DesktopDialog />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
