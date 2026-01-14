import type { Dispatch, SetStateAction } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

type Props = {
    mapLayer: string;
    setMapLayer: Dispatch<SetStateAction<string>>;
};

export default function MapLayerDropdown({ mapLayer, setMapLayer }: Props) {
    return (
        <Select value={mapLayer} onValueChange={(value) => setMapLayer(value)}>
            <SelectTrigger className="w-full xs:w-45">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="z-1001">
                {MAP_LAYERS.map((layer) => {
                    const extractedLabel = layer.split("_")[0];
                    const formatLabel =
                        extractedLabel.charAt(0).toUpperCase() +
                        extractedLabel.slice(1);

                    return (
                        <SelectItem key={layer} value={layer}>
                            {formatLabel}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
}

const MAP_LAYERS = [
    "clouds_new",
    "temp_new",
    "precipitation_new",
    "wind_new",
    "pressure_new",
];
