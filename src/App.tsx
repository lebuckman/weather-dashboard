import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import MiscInfo from "./components/cards/MiscInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./lib/types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "./lib/api";

function App() {
    const [location, setLocation] = useState("Seoul");
    const [coordinates, setCoordinates] = useState<Coords>({
        lat: 37.56,
        lon: 126.98,
    });

    const { data: geocodeData } = useQuery({
        queryKey: ["geocode", location],
        queryFn: () => getGeocode(location),
        select: (geocodeData) => geocodeData[0],
    });

    function handleMapClick(lat: number, lon: number) {
        setCoordinates({ lat, lon });
        setLocation("custom");
    }

    const coords =
        location === "custom"
            ? coordinates
            : { lat: geocodeData?.lat ?? coordinates.lat, lon: geocodeData?.lon ?? coordinates.lon };

    return (
        <div className="flex flex-col gap-8">
            <LocationDropdown location={location} setLocation={setLocation} />
            <Map coords={coords} onMapClick={handleMapClick} />
            <CurrentWeather coords={coords} />
            <HourlyForecast coords={coords} />
            <DailyForecast coords={coords} />
            <MiscInfo coords={coords} />
        </div>
    );
}

export default App;
