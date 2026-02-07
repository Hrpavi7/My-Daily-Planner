# Architecture Documentation

## Overview

My Daily Planner is a React-based calendar application built with modern web technologies. This document outlines the architectural decisions, patterns, and structure of the application.

## Technology Stack

### Core Technologies
- **React 18**: UI library with hooks and functional components
- **TypeScript**: Type-safe JavaScript with strict mode
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library built on Radix UI

### State Management
- **React Hooks**: Local component state with useState and useCallback
- **Custom Hooks**: Reusable state logic (useCalendarEvents)
- **React Query**: Data fetching and caching (configured but optional)

### Routing
- **React Router DOM**: Client-side routing for single-page application

### Development Tools
- **ESLint**: Code linting with TypeScript and React rules
- **Vitest**: Unit testing framework
- **Testing Library**: Component testing utilities

## Application Structure

### Component Architecture

The application follows a component-based architecture with clear separation of concerns:

```
App.tsx
├── Index.tsx (Main Calendar Page)
│   ├── CalendarHeader (Navigation)
│   ├── CalendarGrid (Month View)
│   │   └── CalendarDay (Individual Days)
│   ├── EventSidebar (Event Management)
│   └── AddEventDialog (Event Creation)
└── NotFound.tsx (404 Page)
```

### State Management Architecture

#### Local State
- **Current Date**: Managed in Index component for calendar navigation
- **Selected Date**: Tracks which date is currently selected
- **Dialog State**: Controls Add Event modal visibility

#### Custom Hook: useCalendarEvents

Centralized event management with the following responsibilities:
- Event storage and retrieval
- Date-based filtering
- CRUD operations (Create, Read, Update, Delete)
- Event persistence (localStorage-based)

```typescript
const useCalendarEvents = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  
  const addEvent = (event: Omit<CalendarEvent, 'id'>) => { /* implementation */ };
  const removeEvent = (id: string) => { /* implementation */ };
  const getEventsForDate = (date: Date) => { /* implementation */ };
  
  return { events, addEvent, removeEvent, getEventsForDate };
};
```

### Data Flow

1. **Event Creation**: User input → AddEventDialog → useCalendarEvents → EventSidebar/CalendarGrid
2. **Date Selection**: CalendarDay → Index → EventSidebar (event filtering)
3. **Navigation**: CalendarHeader → Index → CalendarGrid (month change)

## Component Design Patterns

### Compound Components

The calendar components work together as a compound component system:

```tsx
<CalendarContainer>
  <CalendarHeader />
  <CalendarGrid />
  <EventSidebar />
</CalendarContainer>
```

### Props Interface Pattern

All components use TypeScript interfaces for prop validation:

```typescript
interface CalendarGridProps {
  currentDate: Date;
  selectedDate: Date | null;
  events: CalendarEvent[];
  onSelectDate: (date: Date) => void;
}
```

### Callback Pattern

Parent components pass callback functions to child components for state updates:

```tsx
<CalendarGrid 
  onSelectDate={setSelectedDate}
  onAddEvent={addEvent}
/>
```

## Styling Architecture

### Tailwind CSS Integration

- Utility-first approach for rapid development
- Consistent design system with predefined colors and spacing
- Responsive design utilities for mobile compatibility
- Dark mode support through next-themes

### Component Styling

Each component uses Tailwind classes with the `cn()` utility for conditional styling:

```tsx
<div className={cn(
  "p-4 rounded-lg border",
  isSelected && "bg-primary text-primary-foreground"
)}>
```

### Theme System

The application supports theme switching through:
- CSS custom properties for colors
- next-themes for theme management
- shadcn/ui theme integration

## Performance Considerations

### Optimization Strategies

1. **React.memo**: Used for expensive components when needed
2. **useCallback**: Prevents unnecessary re-renders of callback functions
3. **useMemo**: Caches expensive computations
4. **Lazy Loading**: Components loaded on demand (if needed)

### Bundle Optimization

- Vite's built-in code splitting
- Tree shaking for unused code elimination
- Dynamic imports for large components

## Testing Architecture

### Unit Testing

- **Vitest**: Fast test runner with TypeScript support
- **Testing Library**: Component testing with user-centric approach
- **jsdom**: DOM simulation for React component testing

### Test Structure

```
src/test/
├── setup.ts          # Test environment setup
└── example.test.ts   # Example test cases
```

### Testing Patterns

- Component rendering tests
- User interaction simulation
- State management testing
- Custom hook testing

## Security Considerations

### Client-Side Security

- No sensitive data storage in localStorage
- Input validation for all user inputs
- XSS prevention through React's built-in protections
- No direct DOM manipulation

### Best Practices

- Use TypeScript for type safety
- Validate all external inputs
- Sanitize user-generated content
- Follow React security guidelines

## Scalability

### Future Considerations

1. **Backend Integration**: Ready for API integration with React Query
2. **State Management**: Can scale to Redux/Zustand if needed
3. **Performance**: Component virtualization for large datasets
4. **Features**: Plugin architecture for extensibility

### Modular Architecture

- Components are self-contained and reusable
- Hooks encapsulate business logic
- Utilities are pure functions for easy testing
- Types are centralized for consistency

## Deployment Architecture

### Build Process

1. **Development**: Vite dev server with HMR
2. **Testing**: Vitest with watch mode
3. **Production**: Vite build with optimizations
4. **Deployment**: Static file hosting

### Environment Configuration

- Environment variables for configuration
- Build-time optimizations
- Runtime feature flags (if needed)

This architecture provides a solid foundation for a maintainable, scalable calendar application while following modern React best practices and performance optimization techniques.