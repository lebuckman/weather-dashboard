export type Units = "standard" | "metric" | "imperial";

export type GetWeatherParams = {
    lat: number;
    lon: number;
    units?: Units;
};

export type Coords = {
    lat: number;
    lon: number;
};
