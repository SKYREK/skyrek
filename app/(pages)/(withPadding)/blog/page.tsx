import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc){
    title,
    smallDescription,
    "currentSlug": slug.current,
    featuredImage
    }`;

    const data = await client.fetch(query);
    return data; 
}
export default async function Blog() {
  const data: simpleBlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {data.map((post, idx) => (
            <Card key={idx}>
                <Image src={urlFor(post.featuredImage).url()} alt={post.title} width={500} height={500} className="rounded-t-lg h-[200px] object-cover w-full"/>

                <CardContent className="mt-5">
                    <h3 className="text-lg line-clamp-2">{post.title}</h3>
                    <p className="text-sm line-clamp-2 mt-2 text-gray-600">{post.smallDescription}</p>

                    <Button asChild className="w-full mt-7 cursor-pointer">
                        <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                    </Button>
                </CardContent>
            </Card>
        ))}
    </div>
  );
}
