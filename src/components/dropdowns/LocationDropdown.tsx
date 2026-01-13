import type { Dispatch, SetStateAction } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

type Props = {
    location: string;
    setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
    return (
        <Select value={location} onValueChange={(value) => setLocation(value)}>
            <SelectTrigger className="w-45">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-1001">
                {CITY_GROUPS.map((group) => (
                    <SelectGroup key={group.label}>
                        <SelectLabel>{group.label}</SelectLabel>

                        {group.cities.map((city) => (
                            <SelectItem key={city.name} value={city.name}>
                                {city.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                ))}
            </SelectContent>
        </Select>
    );
}

const CITY_GROUPS = [
    {
        label: "Europe",
        cities: [
            { name: "London" },
            { name: "Paris" },
            { name: "Rome" },
            { name: "Berlin" },
            { name: "Madrid" },
            { name: "Amsterdam" },
            { name: "Vienna" },
            { name: "Prague" },
        ],
    },
    {
        label: "Asia",
        cities: [
            { name: "Tokyo" },
            { name: "Seoul" },
            { name: "Singapore" },
            { name: "Beijing" },
            { name: "Shanghai" },
            { name: "Hong Kong" },
            { name: "Bangkok" },
            { name: "Mumbai" },
            { name: "Dubai" },
        ],
    },
    {
        label: "North America",
        cities: [
            { name: "New York" },
            { name: "Los Angeles" },
            { name: "Chicago" },
            { name: "Toronto" },
            { name: "Vancouver" },
            { name: "Mexico City" },
            { name: "San Francisco" },
            { name: "Miami" },
        ],
    },
    {
        label: "South America",
        cities: [
            { name: "São Paulo" },
            { name: "Rio de Janeiro" },
            { name: "Buenos Aires" },
            { name: "Santiago" },
            { name: "Bogotá" },
            { name: "Lima" },
        ],
    },
    {
        label: "Africa",
        cities: [
            { name: "Cairo" },
            { name: "Cape Town" },
            { name: "Johannesburg" },
            { name: "Nairobi" },
            { name: "Lagos" },
            { name: "Accra" },
            { name: "Casablanca" },
        ],
    },
    {
        label: "Oceania",
        cities: [
            { name: "Sydney" },
            { name: "Melbourne" },
            { name: "Brisbane" },
            { name: "Auckland" },
            { name: "Wellington" },
            { name: "Perth" },
        ],
    },
] as const;
