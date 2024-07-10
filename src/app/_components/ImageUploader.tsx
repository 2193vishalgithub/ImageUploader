"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const router = useRouter();

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      await fetch("/api/upload", {
        method: "post",
        body: formData,
      }).finally(() => {
        router.refresh();
        setSelectedFile(null);
      });
    }
  };

  return (
    <div>
      <input name="file" type="file" onChange={handleFileChange} />
      <button type="submit" onClick={handleUpload} disabled={!selectedFile}>
        Upload Image
      </button>

      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <Image src={URL.createObjectURL(selectedFile)} alt="Uploaded" width={500} height={500} className="w-auto h-auto" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
