import axios from "axios";

const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

if (!OPENWEATHER_KEY) {
    throw new Error("Missing env var: OPENWEATHER_KEY");
}

const weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        appid: OPENWEATHER_KEY,
    },
});

const geoApi = axios.create({
    baseURL: "http://api.openweathermap.org/geo/1.0",
    params: {
        appid: OPENWEATHER_KEY,
    },
});

export { weatherApi, geoApi, OPENWEATHER_KEY };
