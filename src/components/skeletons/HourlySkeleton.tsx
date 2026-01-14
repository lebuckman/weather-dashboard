import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function HourlySkeleton() {
    return (
        <Card
            title="Hourly Forecast (48 Hours)"
            childrenClassName="flex gap-6 overflow-x-scroll"
        >
            {[...Array(48)].map((_, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-2 2xl:justify-between"
                >
                    <Skeleton className="w-10 h-6 2xl:scale-110" />
                    <Skeleton className="size-8 rounded-full 2xl:size-10" />
                    <Skeleton className="w-9 h-6 2xl:scale-110" />
                </div>
            ))}
        </Card>
    );
}
