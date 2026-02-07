# API Documentation

## Calendar Events API

### CalendarEvent Interface

```typescript
interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time?: string;
  color: 'primary' | 'destructive' | 'chart1' | 'chart2' | 'chart3';
}
```

### useCalendarEvents Hook

Custom hook for managing calendar events.

#### Returns

```typescript
{
  events: CalendarEvent[];
  addEvent: (event: Omit<CalendarEvent, 'id'>) => void;
  removeEvent: (id: string) => void;
  getEventsForDate: (date: Date) => CalendarEvent[];
}
```

#### Methods

- `addEvent(event)`: Adds a new event to the calendar
- `removeEvent(id)`: Removes an event by its ID
- `getEventsForDate(date)`: Returns all events for a specific date

## Component Props

### CalendarGrid Props

```typescript
interface CalendarGridProps {
  currentDate: Date;
  selectedDate: Date | null;
  events: CalendarEvent[];
  onSelectDate: (date: Date) => void;
}
```

### CalendarHeader Props

```typescript
interface CalendarHeaderProps {
  currentDate: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}
```

### EventSidebar Props

```typescript
interface EventSidebarProps {
  selectedDate: Date | null;
  events: CalendarEvent[];
  onAddEvent: () => void;
  onRemoveEvent: (id: string) => void;
}
```

### AddEventDialog Props

```typescript
interface AddEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: Date;
  onAddEvent: (event: Omit<CalendarEvent, 'id'>) => void;
}
```