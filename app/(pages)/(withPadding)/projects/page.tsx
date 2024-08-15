import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { simpleProjectCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'project'] | order(_createdAt desc){
    projectName,
      startData,
      endData,
      smallDescription,
      demoLink,
      technologies,
      featuredImage
    }`;

  const data = await client.fetch(query);
  return data;
}
export default async function Projects() {
  const data: simpleProjectCard[] = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.featuredImage).url()}
            alt={post.projectName}
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover w-full"
          />

          <CardContent className="mt-5">
            <div className="flex justify-between items-center">
              <h3 className="text-lg line-clamp-2">{post.projectName}</h3>
              {post.demoLink && (
                <Link
                  href={post.demoLink}
                  className="bg-black dark:bg-white rounded-full"
                  target="_blank"
                >
                  <MoveUpRight
                    size={25}
                    className="text-white dark:text-black p-1"
                  />
                </Link>
              )}
            </div>
            <p className="text-sm line-clamp-2 mt-2 text-gray-600 dark:text-gray-400">
              {post.startData} - {post.endData}
            </p>
            <p className="text-sm h-20 line-clamp-4 overflow-hidden mt-2 text-gray-600 dark:text-white">
              {post.smallDescription}
            </p>
          </CardContent>
          <CardFooter className="flex items-center gap-1 flex-wrap">
            {post.technologies.map((tech, idx) => (
              <Badge variant="outline" className="dark:text-gray-400" key={idx}>
                {tech}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
