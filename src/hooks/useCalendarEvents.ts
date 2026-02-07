import { useState, useCallback } from "react";
import { CalendarEvent } from "@/types/calendar";

const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Meeting",
    date: new Date(),
    time: "10:00 AM",
    color: "primary",
  },
  {
    id: "2",
    title: "Lunch with Client",
    date: new Date(),
    time: "12:30 PM",
    color: "chart1",
  },
  {
    id: "3",
    title: "Project Review",
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    time: "3:00 PM",
    color: "chart2",
  },
];

export function useCalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);

  const addEvent = useCallback((event: Omit<CalendarEvent, "id">) => {
    const newEvent: CalendarEvent = {
      ...event,
      id: Date.now().toString(),
    };
    setEvents((prev) => [...prev, newEvent]);
    return newEvent;
  }, []);

  const removeEvent = useCallback((id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  }, []);

  const getEventsForDate = useCallback(
    (date: Date) => {
      return events.filter(
        (event) => event.date.toDateString() === date.toDateString(),
      );
    },
    [events],
  );

  return { events, addEvent, removeEvent, getEventsForDate };
}
