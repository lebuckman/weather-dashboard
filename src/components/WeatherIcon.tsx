import clsx from "clsx";

type Props = { src: string; alt?: string; className?: string };

export default function WeatherIcon({ src, alt = "", className }: Props) {
    return (
        <img
            className={clsx("size-8", className)}
            src={`https://openweathermap.org/img/wn/${src}.png`}
            alt={alt}
        />
    );
}
