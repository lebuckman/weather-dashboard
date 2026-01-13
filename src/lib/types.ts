export type Units = "standard" | "metric" | "imperial";

export type GetWeatherParams = {
    lat: number;
    lon: number;
    units?: Units;
};
