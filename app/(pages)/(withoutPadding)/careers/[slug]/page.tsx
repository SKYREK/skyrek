import { Button } from "@/components/ui/button";
import { JobLogo } from "../jobLogo";
import { BriefcaseBusiness } from "lucide-react";
import { MapPin } from "lucide-react";
import { Landmark } from "lucide-react";
import { client } from "@/lib/sanity";
import { User } from "lucide-react";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const query = `
    *[_type == 'career' && slug.current == '${slug}'][0]{
      "CurrentSlug": slug.current,
      jobTitle,
      contractType,
      workingMode,
      salary,
      location,
      "jobCategory":jobCategory->jobCategory,
      roleDescription,
      requirements,
      responsibilities
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function CareerPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);
  return (
    <div className="max-w-7xl mx-auto py-12 lg:py-16 w-full px-8">
      <div>
        <JobLogo />
      </div>
      <div className="md:flex justify-between mt-2 pt-2">
        <div className="flex flex-col gap-1">
          <p className="text-2xl">{data.jobTitle}</p>
          <p className="text-sm text-[#f7671e] uppercase font-semibold1">
            Skyrek {"(pvt)"} ltd
          </p>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <BriefcaseBusiness className="h-4 w-4 text-gray-600" />
              <p className="text-sm text-gray-600">{data.contractType}</p>
            </div>
            <div className="flex gap-2 items-center">
              <User className="h-4 w-4 text-gray-600" />
              <p className="text-sm text-gray-600">{data.workingMode}</p>
            </div>
            <div className="flex gap-2 items-center">
              <MapPin className="h-4 w-4 text-gray-600" />
              <p className="text-sm text-gray-600">{data.location}</p>
            </div>
            {data.salary && (
              <div className="flex gap-2 items-center">
                <Landmark className="h-4 w-4 text-gray-600" />
                <p className="text-sm text-gray-600">{data.salary}</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <Button variant={"outline"}>Apply for this job</Button>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-900 font-semibold tracking-wide">
          Role Description:
        </p>
        <div className="prose prose-blue dark:prose-invert prose-li:marker:text-primary prose-a:text-light max-w-7xl w-full">
          <PortableText value={data.roleDescription} />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-gray-900 font-semibold tracking-wide">
          Responsibilities:
        </p>
        <div className="prose prose-blue dark:prose-invert prose-li:marker:text-primary prose-a:text-light max-w-7xl w-full">
          <PortableText value={data.responsibilities} />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-gray-900 font-semibold tracking-wide">
          Requirements:
        </p>
        <div className="prose prose-blue dark:prose-invert prose-li:marker:text-primary prose-a:text-light max-w-7xl w-full">
          <PortableText value={data.requirements} />
        </div>
      </div>
    </div>
  );
}
