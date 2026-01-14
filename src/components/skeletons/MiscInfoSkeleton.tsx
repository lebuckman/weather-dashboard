import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function MiscInfoSkeleton() {
    return (
        <Card
            title="Additional Weather Info"
            childrenClassName="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            {[...Array(6)].map((_, index) => {
                return (
                    <div key={index} className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Skeleton className="size-4 rounded-full" />
                            <Skeleton className="w-24 h-6" />
                        </div>
                        <Skeleton className="w-21 h-6" />
                    </div>
                );
            })}
        </Card>
    );
}
