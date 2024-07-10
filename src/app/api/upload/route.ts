import { db } from "@/server/db";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  const file = data.get("file") as File;

  if (!file)
    return NextResponse.json({ message: "no image found ", success: false });

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);

  const filename = `${new Date().getTime()}.${file.name}`;

  const path = `./public/uploads/${filename}`;

  await writeFile(path, buffer).then(() =>
    db.image.create({
      data: { filename: filename },
    }),
  );
  revalidatePath("/");

  return NextResponse.json({ message: "upload successful", success: true });
}
