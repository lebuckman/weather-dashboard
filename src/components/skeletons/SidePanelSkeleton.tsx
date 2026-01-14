import { Skeleton } from "../ui/skeleton";
import SideCardSkeleton from "./SideCardSkeleton";

type Props = {};
export default function SidePanelSkeleton({}: Props) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Air Pollution</h1>
            <div className="flex items-end gap-2">
                <Skeleton className="w-8 h-12" />
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-2xl">AQUI</span>
                </div>
            </div>

            {[...Array(8)].map((_, index) => (
                <SideCardSkeleton key={index} />
            ))}
        </div>
    );
}
