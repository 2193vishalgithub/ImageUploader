import { api } from "@/trpc/server";
import Image from "next/image";
import ImageUploader from "./_components/ImageUploader";
import Images from "./uploadthing/components/images";

export default async function Home() {
  const images = await api.getImages();

  return (
    <div className="container mx-auto">
      <div className="py-4">
        <ImageUploader />
      </div>
      <div className="grid grid-cols-4 items-start gap-4">
        {images?.images.map((image, ind) => {
          return (
            <div className="rounded-md shadow-md" key={ind}>
              <Image
                alt="Test image"
                src={`/uploads/${image.filename}`}
                height="400"
                width="300"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          );
        })}
      </div>
      {/* upload things images */}

      <div className="my-4 border-2 border-dashed p-4">
        <p className="text-2xl font-bold">Upload things Images</p>
        <Images />
      </div>
    </div>
  );
}
