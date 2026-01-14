import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import MiscInfo from "./components/cards/MiscInfo";
import Map from "./components/Map";
import { Suspense, useState } from "react";
import type { Coords } from "./lib/types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "./lib/api";
import MapLayerDropdown from "./components/dropdowns/MapLayerDropdown";
import MapLegend from "./components/MapLegend";
import CurrentSkeleton from "./components/skeletons/CurrentSkeleton";
import DailySkeleton from "./components/skeletons/DailySkeleton";
import HourlySkeleton from "./components/skeletons/HourlySkeleton";
import MiscInfoSkeleton from "./components/skeletons/MiscInfoSkeleton";
import SidePanel from "./components/SidePanel";
import Hamburger from "/src/assets/hamburger.svg?react";
import MobileHeader from "./components/MobileHeader";
import LightDarkToggle from "./components/LightDarkToggle";

function App() {
    const [mapLayer, setMapLayer] = useState("clouds_new");
    const [location, setLocation] = useState("Seoul");
    const [coordinates, setCoordinates] = useState<Coords>({
        lat: 37.56,
        lon: 126.98,
    });
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

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
            : {
                  lat: geocodeData?.lat ?? coordinates.lat,
                  lon: geocodeData?.lon ?? coordinates.lon,
              };

    return (
        <>
            <MobileHeader setIsSidePanelOpen={setIsSidePanelOpen} />
            <div className="flex flex-col gap-8 p-8 pt-0 xs:pt-8 w-full min-h-screen lg:w-[calc(100dvw-var(--sidebar-width))]">
                <div className="flex flex-col gap-4 xs:flex-row xs:gap-8">
                    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                        <h2 className="text-2xl font-semibold">Location:</h2>
                        <LocationDropdown
                            location={location}
                            setLocation={setLocation}
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                        <h2 className="text-2xl font-semibold">Layer: </h2>
                        <MapLayerDropdown
                            mapLayer={mapLayer}
                            setMapLayer={setMapLayer}
                        />
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                        <LightDarkToggle />
                        <button
                            onClick={() => setIsSidePanelOpen(true)}
                            className="hidden xs:block"
                        >
                            <Hamburger className="size-8 invert hover:cursor-pointer lg:hidden" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 2xl:flex-1 2xl:min-h-0 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-4">
                    <div className="relative h-120 md:col-span-2 2xl:h-auto 2xl:col-span-full 2xl:row-span-2 order-1">
                        <Map
                            coords={coords}
                            onMapClick={handleMapClick}
                            mapLayer={mapLayer}
                        />
                        <MapLegend mapLayer={mapLayer} />
                    </div>
                    <div className="2xl:row-span-2 order-2">
                        <Suspense fallback={<CurrentSkeleton />}>
                            <CurrentWeather coords={coords} />
                        </Suspense>
                    </div>
                    <div className="2xl:row-span-2 order-3 2xl:order-4">
                        <Suspense fallback={<DailySkeleton />}>
                            <DailyForecast coords={coords} />
                        </Suspense>
                    </div>
                    <div className="md:col-span-2 md:order-4 2xl:row-span-1 order-4 2xl:order-3">
                        <Suspense fallback={<HourlySkeleton />}>
                            <HourlyForecast coords={coords} />
                        </Suspense>
                    </div>
                    <div className="md:col-span-2 2xl:row-span-1 order-5">
                        <Suspense fallback={<MiscInfoSkeleton />}>
                            <MiscInfo coords={coords} />
                        </Suspense>
                    </div>
                </div>
            </div>
            <SidePanel
                coords={coords}
                isSidePanelOpen={isSidePanelOpen}
                setIsSidePanelOpen={setIsSidePanelOpen}
            />
        </>
    );
}

export default App;
