import BlurFade from "@/components/magicui/blur-fade";
import { client, urlFor } from "@/lib/sanity";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'gallery'] | order(_createdAt desc){
    galleryImage
    }`;

  const data = await client.fetch(query);
  return data;
}

async function getImages() {
  const data = await getData();
  const images = data.map((post: any, idx: any) => {
    const isLandscape = idx % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    const imageUrl = urlFor(post.galleryImage).url();
    return { imageUrl, width, height };
  });
  return images;
}

export default async function Gallery() {
  const images = await getImages();
  return (
    <section className="py-20 px-16 md:px-28 lg:px-72">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map(({ imageUrl, width, height }: any, idx: any) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
              width={width}
              height={height}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
