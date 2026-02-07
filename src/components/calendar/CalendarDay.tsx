import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarEvent } from "@/types/calendar";

interface CalendarDayProps {
  day: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: CalendarEvent[];
  onSelect: (date: Date) => void;
  className?: string;
}

const colorMap = {
  primary: "bg-primary text-primary-foreground",
  destructive: "bg-destructive text-destructive-foreground",
  chart1: "bg-[hsl(var(--chart-1))] text-foreground",
  chart2: "bg-[hsl(var(--chart-2))] text-foreground",
  chart3: "bg-[hsl(var(--chart-3))] text-primary-foreground",
};

export function CalendarDay({
  day,
  isCurrentMonth,
  isToday,
  isSelected,
  events,
  onSelect,
  className,
}: CalendarDayProps) {
  return (
    <button
      onClick={() => onSelect(day)}
      className={cn(
        "min-h-[100px] p-2 text-left transition-colors hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset",
        !isCurrentMonth && "text-muted-foreground/50 bg-muted/30",
        isSelected && "bg-accent",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium",
          isToday && "bg-primary text-primary-foreground",
        )}
      >
        {format(day, "d")}
      </span>
      <div className="mt-1 space-y-1">
        {events.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className={cn(
              "truncate rounded px-1.5 py-0.5 text-xs font-medium",
              colorMap[event.color],
            )}
          >
            {event.title}
          </div>
        ))}
        {events.length > 3 && (
          <div className="text-xs text-muted-foreground px-1.5">
            +{events.length - 3} more
          </div>
        )}
      </div>
    </button>
  );
}
