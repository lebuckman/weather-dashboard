import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import MiscInfo from "./components/cards/MiscInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./lib/types";

function App() {
    const [coords, setCoords] = useState<Coords>({ lat: 51.5, lon: -0.12 });

    function handleMapClick(lat: number, lon: number) {
        setCoords({ lat, lon });
    }

    return (
        <div className="flex flex-col gap-8">
            <Map coords={coords} onMapClick={handleMapClick} />
            <CurrentWeather coords={coords} />
            <HourlyForecast coords={coords} />
            <DailyForecast coords={coords} />
            <MiscInfo coords={coords} />
        </div>
    );
}

export default App;
