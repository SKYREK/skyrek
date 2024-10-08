import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handleAuth = () => {
  return 1;
}

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "8MB", maxFileCount: 1 } })
    // .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["pdf"])
    // .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    // .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  imageToCode: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // .middleware(() => handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;