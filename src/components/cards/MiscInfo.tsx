import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../lib/api";
import City from "/src/assets/city.svg?react";
import Cloud from "/src/assets/cloud.svg?react";
import Pressure from "/src/assets/pressure.svg?react";
import Sunrise from "/src/assets/sunrise.svg?react";
import Sunset from "/src/assets/sunset.svg?react";
import UpArrow from "/src/assets/uparrow.svg?react";
import Wind from "/src/assets/wind.svg?react";
import type { Coords } from "../../lib/types";

type Props = {
    coords: Coords;
};

export default function MiscInfo({ coords }: Props) {
    const { data: current } = useSuspenseQuery({
        queryKey: ["weather", coords],
        queryFn: () =>
            getWeather({
                lat: coords.lat,
                lon: coords.lon,
            }),
    });

    return (
        <Card title="Additional Weather Info" childrenClassName="flex flex-col gap-8">
            {rows.map(({ label, value, Icon, format }) => {
                const raw = getValue(current, value);
                return (
                    <div key={value} className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Icon className="size-4 invert" />
                            <span className="text-gray-500 font-semibold">
                                {label}
                            </span>
                        </div>
                        <span>{format ? format(raw) : raw}</span>
                    </div>
                );
            })}
        </Card>
    );
}

function getValue(data: any, path: string) {
    return path.split(".").reduce((acc, key) => acc?.[key], data);
}

const rows = [
    {
        label: "City",
        value: "name",
        Icon: City,
    },
    {
        label: "Cloudiness (%)",
        value: "clouds.all",
        Icon: Cloud,
    },
    {
        label: "Wind Direction",
        value: "wind.deg",
        Icon: Wind,
        format: (v: number) => (
            <UpArrow
                className="size-5 invert transition-transform duration-300"
                style={{ transform: `rotate(${v}deg)` }}
            />
        ),
    },
    {
        label: "Pressure (hPa)",
        value: "main.pressure",
        Icon: Pressure,
    },
    {
        label: "Sunrise",
        value: "sys.sunrise",
        Icon: Sunrise,
        format: (v: number) =>
            new Date(v * 1000).toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            }),
    },
    {
        label: "Sunset",
        value: "sys.sunset",
        Icon: Sunset,
        format: (v: number) =>
            new Date(v * 1000).toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            }),
    },
];
