"use client";

import { UploadButton, UploadDropzone } from "@/app/_components/uploadThing";
import { useState } from "react";

export default function UploadThings() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <UploadDropzone endpoint="imageUploader" />
    </main>
  );
}
