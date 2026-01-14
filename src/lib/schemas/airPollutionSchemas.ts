import { z } from "zod";
import { CoordSchema } from "./weatherSchemas";

const AirPollutionItemSchema = z.object({
    dt: z.number(),
    main: z.object({
        aqi: z.number(),
    }),
    components: z.object({
        co: z.number(),
        no: z.number(),
        no2: z.number(),
        o3: z.number(),
        so2: z.number(),
        pm2_5: z.number(),
        pm10: z.number(),
        nh3: z.number(),
    }),
});

export const AirPollutionResponseSchema = z.object({
    coord: CoordSchema,
    list: z.array(AirPollutionItemSchema),
});
