import { useState, useCallback } from "react";
import { addMonths, subMonths } from "date-fns";
import { CalendarHeader } from "@/components/calendar/CalendarHeader";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { EventSidebar } from "@/components/calendar/EventSidebar";
import { AddEventDialog } from "@/components/calendar/AddEventDialog";
import { useCalendarEvents } from "@/hooks/useCalendarEvents";

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { events, addEvent, removeEvent, getEventsForDate } =
    useCalendarEvents();

  const handlePreviousMonth = useCallback(() => {
    setCurrentDate((prev) => subMonths(prev, 1));
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate((prev) => addMonths(prev, 1));
  }, []);

  const handleToday = useCallback(() => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  }, []);

  const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="flex h-screen bg-background">
      <main className="flex-1 flex flex-col p-6">
        <CalendarHeader
          currentDate={currentDate}
          onPreviousMonth={handlePreviousMonth}
          onNextMonth={handleNextMonth}
          onToday={handleToday}
        />
        <CalendarGrid
          currentDate={currentDate}
          selectedDate={selectedDate}
          events={events}
          onSelectDate={setSelectedDate}
        />
      </main>
      <EventSidebar
        selectedDate={selectedDate}
        events={selectedEvents}
        onAddEvent={() => setIsDialogOpen(true)}
        onRemoveEvent={removeEvent}
      />
      {selectedDate && (
        <AddEventDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          selectedDate={selectedDate}
          onAddEvent={addEvent}
        />
      )}
    </div>
  );
};

export default Index;
