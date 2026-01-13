import type { ReactNode } from "react";

type Props = { children: ReactNode; title: string; className?: string };

export default function Card({ children, title, className }: Props) {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-zinc-900 shadow-md">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className={className}>{children}</div>
        </div>
    );
}
