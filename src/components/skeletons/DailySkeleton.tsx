import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function DailySkeleton() {
    return (
        <Card title="Daily Forecast" className="flex flex-col gap-4">
            {[...Array(8)].map((_, index) => (
                <div key={index} className="flex justify-between">
                    <Skeleton className="w-20 h-8" />
                    <Skeleton className="size-8 rounded-full" />

                    <Skeleton className="size-8" />
                    <Skeleton className="size-8" />
                    <Skeleton className="size-8" />
                </div>
            ))}
        </Card>
    );
}
