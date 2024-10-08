import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}']{
      "CurrentSlug": slug.current,
      title,
      content,
      featuredImage,
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="mt-2 text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
        {data.title}
      </h1>

      <Image
        src={urlFor(data.featuredImage).url()}
        width={500}
        height={500}
        alt="image"
        className="max-w-[900px] w-full object-cover mt-8 rounded-lg border"
        priority
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
