import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../lib/api";
import Card from "./Card";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../lib/types";

type Props = {
    coords: Coords;
};

export default function CurrentWeather({ coords }: Props) {
    const { data: current } = useSuspenseQuery({
        queryKey: ["weather", coords],
        queryFn: () =>
            getWeather({
                lat: coords.lat,
                lon: coords.lon,
            }),
    });

    return (
        <Card title="Current Weather" childrenClassName="text-center space-y-6">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-6xl font-semibold">
                    {Math.round(current.main.temp)}ºF
                </h2>
                <WeatherIcon
                    src={current.weather[0].icon}
                    alt={current.weather[0].description}
                    className="size-14"
                />
                <h3 className="capitalize text-xl">
                    {current.weather[0].description}
                </h3>
            </div>

            <div className="flex flex-col items-center gap-2">
                <p className="text-xl">Local Time:</p>
                <h3 className="text-4xl font-semibold">
                    {new Intl.DateTimeFormat("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                        timeZone: 'UTC'
                    }).format(new Date((current.dt + current.timezone) * 1000))}
                </h3>
            </div>

            <div className="flex justify-between w-full">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Feels Like</p>
                    <p>{Math.round(current.main.feels_like)}ºF</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Humidity</p>
                    <p>{current.main.humidity}%</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500">Wind</p>
                    <p>{current.wind.speed} mph</p>
                </div>
            </div>
        </Card>
    );
}
