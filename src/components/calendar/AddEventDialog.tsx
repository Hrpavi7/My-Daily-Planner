import { useState } from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarEvent } from "@/types/calendar";
import { cn } from "@/lib/utils";

interface AddEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: Date;
  onAddEvent: (event: Omit<CalendarEvent, "id">) => void;
}

const colorOptions: {
  value: CalendarEvent["color"];
  label: string;
  className: string;
}[] = [
  { value: "primary", label: "Default", className: "bg-primary" },
  { value: "chart1", label: "Gold", className: "bg-[hsl(var(--chart-1))]" },
  { value: "chart2", label: "Teal", className: "bg-[hsl(var(--chart-2))]" },
  { value: "chart3", label: "Slate", className: "bg-[hsl(var(--chart-3))]" },
  { value: "destructive", label: "Coral", className: "bg-destructive" },
];

export function AddEventDialog({
  open,
  onOpenChange,
  selectedDate,
  onAddEvent,
}: AddEventDialogProps) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState<CalendarEvent["color"]>("primary");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddEvent({
      title: title.trim(),
      date: selectedDate,
      time: time || undefined,
      color,
    });

    setTitle("");
    setTime("");
    setColor("primary");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <p className="text-sm text-muted-foreground">
            {format(selectedDate, "EEEE, MMMM d, yyyy")}
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time (optional)</Label>
            <Input
              id="time"
              placeholder="e.g., 10:00 AM"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Color</Label>
            <div className="flex gap-2">
              {colorOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setColor(option.value)}
                  className={cn(
                    "w-8 h-8 rounded-full transition-all",
                    option.className,
                    color === option.value
                      ? "ring-2 ring-ring ring-offset-2 ring-offset-background"
                      : "opacity-60 hover:opacity-100",
                  )}
                  title={option.label}
                />
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!title.trim()}>
              Add Event
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
