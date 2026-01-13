import weatherApi from "./axios";
import {
    HourlyForecastResponseSchema,
    WeatherResponseSchema,
    DailyForecastResponseSchema,
} from "./schemas/weatherSchemas";
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

export async function getHourlyForecast({ lat, lon }: GetWeatherParams) {
    const { data } = await weatherApi.get("/forecast/hourly", {
        params: {
            lat,
            lon,
            cnt: 1,
        },
    });
    return HourlyForecastResponseSchema.parse(data);
}

export async function getDailyForecast({
    lat,
    lon,
    units = "imperial",
}: GetWeatherParams) {
    const { data } = await weatherApi.get("/forecast/daily", {
        params: {
            lat,
            lon,
            units,
            cnt: 1,
        },
    });
    return DailyForecastResponseSchema.parse(data);
}
