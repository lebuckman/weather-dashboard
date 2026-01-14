import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getHourlyForecast } from "../../lib/api";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../lib/types";

type Props = {
    coords: Coords;
};

export default function HourlyForecast({ coords }: Props) {
    const { data: hourly } = useSuspenseQuery({
        queryKey: ["hourly", coords],
        queryFn: () =>
            getHourlyForecast({
                lat: coords.lat,
                lon: coords.lon,
            }),
        select: (hourly) => hourly.list,
    });

    return (
        <Card
            title="Hourly Forecast (48 Hours)"
            childrenClassName="flex gap-6 overflow-x-scroll"
        >
            {hourly.map((hour) => (
                <div
                    key={hour.dt}
                    className="flex flex-col items-center gap-2 p-2"
                >
                    <p className="whitespace-nowrap">
                        {new Date(hour.dt * 1000).toLocaleTimeString(
                            undefined,
                            {
                                hour: "numeric",
                                hour12: true,
                            }
                        )}
                    </p>
                    <WeatherIcon
                        src={hour.weather[0].icon}
                        alt={hour.weather[0].description}
                    />
                    <p>{Math.round(hour.main.temp)}ºF</p>
                </div>
            ))}
        </Card>
    );
}
