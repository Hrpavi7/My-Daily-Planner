# Component Documentation

## Overview

This document describes the main components used in the My Daily Planner application.

## Calendar Components

### CalendarGrid

**Location**: `src/components/calendar/CalendarGrid.tsx`

The main calendar display component that shows a month view with all days and events.

**Features**:
- Displays a full month grid
- Shows events on their respective dates
- Handles date selection
- Responsive design

**Usage**:
```tsx
<CalendarGrid
  currentDate={currentDate}
  selectedDate={selectedDate}
  events={events}
  onSelectDate={handleSelectDate}
/>
```

### CalendarHeader

**Location**: `src/components/calendar/CalendarHeader.tsx`

Navigation header for the calendar with month/year display and navigation controls.

**Features**:
- Shows current month and year
- Previous/Next month navigation
- "Today" button for quick navigation
- Clean, modern design

**Usage**:
```tsx
<CalendarHeader
  currentDate={currentDate}
  onPreviousMonth={handlePreviousMonth}
  onNextMonth={handleNextMonth}
  onToday={handleToday}
/>
```

### CalendarDay

**Location**: `src/components/calendar/CalendarDay.tsx`

Individual day cell component used within the calendar grid.

**Features**:
- Displays day number
- Shows event indicators
- Handles click events
- Visual feedback for selected/current dates

### EventSidebar

**Location**: `src/components/calendar/EventSidebar.tsx`

Sidebar component that displays events for the selected date.

**Features**:
- Shows all events for selected date
- Add new event button
- Remove event functionality
- Responsive layout

**Usage**:
```tsx
<EventSidebar
  selectedDate={selectedDate}
  events={selectedEvents}
  onAddEvent={handleAddEvent}
  onRemoveEvent={handleRemoveEvent}
/>
```

### AddEventDialog

**Location**: `src/components/calendar/AddEventDialog.tsx`

Modal dialog for creating new calendar events.

**Features**:
- Form for event details (title, time, color)
- Date picker integration
- Form validation
- Accessible design

**Usage**:
```tsx
<AddEventDialog
  open={isDialogOpen}
  onOpenChange={setIsDialogOpen}
  selectedDate={selectedDate}
  onAddEvent={handleAddEvent}
/>
```

## UI Components

The application uses shadcn/ui components for consistent styling and accessibility:

### Button
**Location**: `src/components/ui/button.tsx`

Styled button component with variants for different purposes.

### Dialog
**Location**: `src/components/ui/dialog.tsx`

Modal dialog component used for the Add Event functionality.

### Card
**Location**: `src/components/ui/card.tsx`

Card component for displaying content in organized sections.

### Calendar
**Location**: `src/components/ui/calendar.tsx`

Base calendar component from react-day-picker with custom styling.

### Input & Label
**Location**: `src/components/ui/input.tsx`, `src/components/ui/label.tsx`

Form input and label components with consistent styling.

### Select
**Location**: `src/components/ui/select.tsx`

Dropdown select component used for color selection in event creation.

## Custom Hooks

### useCalendarEvents

**Location**: `src/hooks/useCalendarEvents.ts`

Custom hook for managing calendar events state and operations.

**Features**:
- Event storage and retrieval
- Date-based filtering
- Event CRUD operations
- Persistent state management

**Usage**:
```tsx
const { events, addEvent, removeEvent, getEventsForDate } = useCalendarEvents();
```

## Utility Functions

### cn (ClassName)

**Location**: `src/lib/utils.ts`

Utility function for combining Tailwind CSS classes with conditional logic.

**Usage**:
```tsx
import { cn } from '@/lib/utils';

<div className={cn('base-class', conditional && 'conditional-class')} />
```