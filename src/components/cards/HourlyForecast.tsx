import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getHourlyForecast } from "../../lib/api";
import WeatherIcon from "../WeatherIcon";

type Props = {};

export default function HourlyForecast({}: Props) {
    const { data: hourly } = useSuspenseQuery({
        queryKey: ["hourly"],
        queryFn: () =>
            getHourlyForecast({
                lat: 10,
                lon: 25,
            }),
        select: (hourly) => hourly.list,
        staleTime: 300000,

    });
	
    return (
        <Card
            title="Hourly Forecast (48 Hours)"
            className="flex gap-6 overflow-x-scroll"
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
