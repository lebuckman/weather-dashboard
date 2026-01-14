import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    title?: string;
    className?: string;
    childrenClassName?: string;
};

export default function Card({
    children,
    title,
    className,
    childrenClassName,
}: Props) {
    return (
        <div
            className={clsx(
                "flex flex-col p-4 rounded-xl bg-linear-to-br from-card to-card/40 shadow-md 2xl:h-full",
                title && 'gap-4',
                className
            )}
        >
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div
                className={clsx(
                    childrenClassName,
                    "animate-[fade-in_1s_ease-out_forwards] 2xl:flex-1"
                )}
            >
                {children}
            </div>
        </div>
    );
}
