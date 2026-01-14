import clsx from "clsx";
import type { ReactNode } from "react";

type Props = { children: ReactNode; title: string; className?: string };

export default function Card({ children, title, className }: Props) {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-linear-to-br from-card to-card/40 shadow-md">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div
                className={clsx(
                    className,
                    "animate-[fade-in_1s_ease-out_forwards]"
                )}
            >
                {children}
            </div>
        </div>
    );
}
