'use server'
import Image from "next/image";

import { utapi } from "@/server/uploadthings";
 

export default async function Images() {
  const images = await utapi.listFiles();
  // const [filekeys, setFileKeys] = useState<string[]>([]);
  // const [fileUrl, setFileUrl] = useState<
  //   readonly { readonly key: string; readonly url: string }[]
  // >([]);

  // useEffect(() => {
  //   images.files.map(async (image) => {
  //     setFileKeys((prev) => [...prev, image.key]);
  //   });
  // }, [images]);

  // const getFilesUrl = async () => {
  //   const fileUrl = await utapi.getFileUrls(filekeys);
  //   setFileUrl(fileUrl.data);
  // };

  // useEffect(() => {
  //   getFilesUrl();
  // }, [filekeys]);

  console.log(images)

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 items-start gap-4">
        {images.files.map((image, ind) => {
          return (
            <div className="rounded-md shadow-md" key={ind}>
              <Image
                alt="Test image"
                src={`https://utfs.io/f/${image.key}`}
                height="400"
                width="300"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
