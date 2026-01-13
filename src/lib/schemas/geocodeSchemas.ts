import { z } from "zod";

export const LocalNamesSchema = z.record(z.string(), z.string());

export const GeocodeResultSchema = z.object({
    name: z.string(),
    local_names: LocalNamesSchema.optional(),
    lat: z.number(),
    lon: z.number(),
    country: z.string(),
    state: z.string().optional(),
});

export const GeocodeResponseSchema = z.array(GeocodeResultSchema);
