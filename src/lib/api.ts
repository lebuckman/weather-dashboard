import weatherApi from "./axios";
import { WeatherResponseSchema } from "./schemas/weatherSchemas";
import type { GetWeatherParams } from "./types";

export async function getWeather({
    lat,
    lon,
    units = "imperial",
}: GetWeatherParams) {
    const { data } = await weatherApi.get("/weather", {
        params: {
            lat,
            lon,
            units,
        },
    });
    return WeatherResponseSchema.parse(data);
}
