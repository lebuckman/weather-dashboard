import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getDailyForecast } from "../../lib/api";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../lib/types";

type Props = {
    coords: Coords;
};

export default function DailyForecast({ coords }: Props) {
    const { data: daily } = useSuspenseQuery({
        queryKey: ["daily", coords],
        queryFn: () =>
            getDailyForecast({
                lat: coords.lat,
                lon: coords.lon,
            }),
        select: (daily) => daily.list,
    });

    return (
        <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4 2xl:justify-between">
            {daily.map((day) => (
                <div key={day.dt} className="flex justify-between">
                    <p className="w-20">
                        {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                            weekday: "short",
                            month: "numeric",
                            day: "numeric",
                        })}
                    </p>
                    <WeatherIcon
                        src={day.weather[0].icon}
                        alt={day.weather[0].description}
                    />
                    <p>{Math.round(day.temp.day)}ºF</p>
                    <p className="text-gray-300/75">
                        {Math.round(day.temp.min)}ºF
                    </p>
                    <p className="text-gray-300/75">
                        {Math.round(day.temp.max)}ºF
                    </p>
                </div>
            ))}
        </Card>
    );
}
