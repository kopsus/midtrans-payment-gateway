import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string(),
  price: z.coerce.number(),
  description: z.string(),
});

export type IProdcut = z.infer<typeof ProductSchema>;
