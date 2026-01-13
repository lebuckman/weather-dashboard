import { z } from "zod";

/*********************/
/* SHARED            */
/*********************/

export const WeatherConditionSchema = z.object({
    id: z.number(),
    main: z.string(),
    description: z.string(),
    icon: z.string(),
});

export const CoordSchema = z.object({
    lat: z.number(),
    lon: z.number(),
});

/*********************/
/* Current Weather   */
/*********************/

export const WeatherResponseSchema = z.object({
    coord: z.object({
        lon: z.number(),
        lat: z.number(),
    }),

    weather: z.array(WeatherConditionSchema),

    base: z.string(),

    main: z.object({
        temp: z.number(),
        feels_like: z.number(),
        temp_min: z.number(),
        temp_max: z.number(),
        pressure: z.number(),
        humidity: z.number(),
        sea_level: z.number().optional(),
        grnd_level: z.number().optional(),
    }),

    visibility: z.number(),

    wind: z.object({
        speed: z.number(),
        deg: z.number(),
        gust: z.number().optional(),
    }),

    rain: z
        .object({
            "1h": z.number(),
        })
        .optional(),

    clouds: z.object({
        all: z.number(),
    }),

    dt: z.number(),

    sys: z.object({
        type: z.number().optional(),
        id: z.number().optional(),
        country: z.string(),
        sunrise: z.number(),
        sunset: z.number(),
    }),

    timezone: z.number(),
    id: z.number(),
    name: z.string(),
    cod: z.number(),
});

/*********************/
/* Hourly Forecast   */
/*********************/

export const HourlyForecastItemSchema = z.object({
    dt: z.number(),

    main: z.object({
        temp: z.number(),
        feels_like: z.number(),
        temp_min: z.number(),
        temp_max: z.number(),
        pressure: z.number(),
        sea_level: z.number().optional(),
        grnd_level: z.number().optional(),
        humidity: z.number(),
        temp_kf: z.number().optional(),
    }),

    weather: z.array(WeatherConditionSchema),

    clouds: z.object({
        all: z.number(),
    }),

    wind: z.object({
        speed: z.number(),
        deg: z.number(),
        gust: z.number().optional(),
    }),

    visibility: z.number().optional(),
    pop: z.number(),

    rain: z
        .object({
            "1h": z.number(),
        })
        .optional(),

    sys: z.object({
        pod: z.enum(["d", "n"]),
    }),

    dt_txt: z.string(),
});

export const HourlyForecastResponseSchema = z.object({
    cod: z.string(),
    message: z.number(),
    cnt: z.number(),

    list: z.array(HourlyForecastItemSchema),

    city: z.object({
        id: z.number(),
        name: z.string(),
        coord: CoordSchema,
        country: z.string(),
        population: z.number(),
        timezone: z.number(),
        sunrise: z.number(),
        sunset: z.number(),
    }),
});

/*********************/
/* Daily Forecast    */
/*********************/

export const DailyForecastItemSchema = z.object({
    dt: z.number(),
    sunrise: z.number(),
    sunset: z.number(),

    temp: z.object({
        day: z.number(),
        min: z.number(),
        max: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
    }),

    feels_like: z.object({
        day: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
    }),

    pressure: z.number(),
    humidity: z.number(),

    weather: z.array(WeatherConditionSchema),

    speed: z.number(),
    deg: z.number(),
    gust: z.number().optional(),

    clouds: z.number(),
    pop: z.number(),

    rain: z.number().optional(),
});

export const DailyForecastResponseSchema = z.object({
    city: z.object({
        id: z.number(),
        name: z.string(),
        coord: CoordSchema,
        country: z.string(),
        population: z.number(),
        timezone: z.number(),
    }),

    cod: z.string(),
    message: z.number(),
    cnt: z.number(),

    list: z.array(DailyForecastItemSchema),
});
