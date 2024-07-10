import { publicProcedure } from "../trpc";

import { db } from "@/server/db";

export const getImages = publicProcedure.query(async () => {
  const images = await db.image.findMany();

  return { images };
});
