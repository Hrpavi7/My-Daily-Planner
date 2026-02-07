import { format } from "date-fns";
import { CalendarEvent } from "@/types/calendar";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Clock, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventSidebarProps {
  selectedDate: Date | null;
  events: CalendarEvent[];
  onAddEvent: () => void;
  onRemoveEvent: (id: string) => void;
}

const colorDotMap = {
  primary: "bg-primary",
  destructive: "bg-destructive",
  chart1: "bg-[hsl(var(--chart-1))]",
  chart2: "bg-[hsl(var(--chart-2))]",
  chart3: "bg-[hsl(var(--chart-3))]",
};

export function EventSidebar({
  selectedDate,
  events,
  onAddEvent,
  onRemoveEvent,
}: EventSidebarProps) {
  return (
    <aside className="w-80 border-l border-border bg-card p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">
            {selectedDate
              ? format(selectedDate, "MMM d, yyyy")
              : "Select a date"}
          </h2>
        </div>
        <Button size="sm" onClick={onAddEvent} disabled={!selectedDate}>
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>

      {selectedDate && events.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground">
          <CalendarDays className="h-12 w-12 mb-3 opacity-50" />
          <p className="text-sm">No events scheduled</p>
          <p className="text-xs mt-1">Click "Add" to create an event</p>
        </div>
      )}

      {events.length > 0 && (
        <div className="space-y-3 flex-1 overflow-y-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="group flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                  colorDotMap[event.color],
                )}
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{event.title}</p>
                {event.time && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                onClick={() => onRemoveEvent(event.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {!selectedDate && (
        <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground">
          <CalendarDays className="h-12 w-12 mb-3 opacity-50" />
          <p className="text-sm">Select a date to view events</p>
        </div>
      )}
    </aside>
  );
}
