import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

export default function SideCardSkeleton() {
    return (
        <Card
            className="bg-linear-to-br from-sidebar-accent to-sidebar-accent/40 hover:scale-103 transition-transform duration-300"
            childrenClassName="flex flex-col gap-3"
        >
            <div className="flex justify-between">
                <Skeleton className="w-12 h-7 bg-sidebar" />
                <Skeleton className="w-12 h-7 bg-sidebar" />
            </div>

            <Skeleton className="w-full h-1.5 bg-sidebar" />

            <div className="flex justify-between">
                <Skeleton className="size-4 bg-sidebar" />
                <Skeleton className="size-4 bg-sidebar" />
            </div>

            <div className="flex justify-between">
                {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} className="w-15 h-6 bg-sidebar" />
                ))}
            </div>
        </Card>
    );
}
