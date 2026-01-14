import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "../lib/types";
import { OPENWEATHER_KEY } from "@/lib/axios";

type Props = {
    coords: Coords;
    onMapClick: (lat: number, lon: number) => void;
    mapLayer: string;
};

export default function Map({ coords, onMapClick, mapLayer }: Props) {
    const { lat, lon } = coords;

    return (
        <MapContainer
            center={[lat, lon]}
            zoom={5}
            style={{ width: "100%", height: "100%" }}
        >
            <MapClick onMapClick={onMapClick} coords={coords} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <TileLayer
                url={`https://tile.openweathermap.org/map/${mapLayer}/{z}/{x}/{y}.png?appid=${OPENWEATHER_KEY}`}
            />
            <Marker position={[lat, lon]} />
        </MapContainer>
    );
}

function MapClick({
    coords,
    onMapClick,
}: {
    coords: Coords;
    onMapClick: (lat: number, lon: number) => void;
}) {
    const map = useMap();
    map.panTo([coords.lat, coords.lon]);

    map.on("click", (e) => {
        const { lat, lng } = e.latlng;
        map.panTo([lat, lng]);
        onMapClick(lat, lng);
    });

    return null;
}
