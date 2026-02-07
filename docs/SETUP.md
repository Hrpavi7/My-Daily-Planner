# Setup Guide

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **Bun**: Fast package manager and runtime
- **Git**: For version control

## Installation Steps

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd My-Daily-Planner
```

### 2. Install Dependencies

```bash
bun install
```

This will install all required dependencies including:
- React and React DOM
- TypeScript and type definitions
- Tailwind CSS and PostCSS
- shadcn/ui components
- Testing libraries
- Build tools (Vite)

### 3. Development Server

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
bun run build
```

The built files will be in the `dist` directory.

## Project Configuration

### TypeScript Configuration

The project uses multiple TypeScript configuration files:

- `tsconfig.json`: Base TypeScript configuration
- `tsconfig.app.json`: Application-specific settings
- `tsconfig.node.json`: Node.js-specific settings

### Vite Configuration

`vite.config.ts` contains the build configuration including:
- React plugin with SWC for fast compilation
- Path aliases for clean imports
- Development server settings

### Tailwind Configuration

`tailwind.config.ts` includes:
- Custom color scheme
- Component classes from shadcn/ui
- Dark mode support

### ESLint Configuration

`eslint.config.js` provides:
- TypeScript linting rules
- React-specific rules
- Import organization

## Development Workflow

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run build:dev` - Build for development
- `bun run lint` - Run ESLint and fix issues
- `bun run preview` - Preview production build
- `bun run test` - Run unit tests
- `bun run test:watch` - Run tests in watch mode

### Code Organization

```
src/
├── components/     # React components
│   ├── calendar/  # Calendar-specific components
│   └── ui/        # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── test/          # Test files
```

### Import Aliases

The project is configured with path aliases for cleaner imports:

```typescript
import { Button } from "@/components/ui/button";
import { useCalendarEvents } from "@/hooks/useCalendarEvents";
import { CalendarEvent } from "@/types/calendar";
```

## Testing

### Running Tests

```bash
# Run all tests once
bun run test

# Run tests in watch mode
bun run test:watch
```

### Test Structure

Tests are located in the `src/test/` directory and use:
- Vitest as the test runner
- Testing Library for component testing
- jsdom for DOM simulation

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 5173 is occupied, Vite will automatically use the next available port
2. **Module not found**: Ensure all dependencies are installed with `bun install`
3. **TypeScript errors**: Check that all type definitions are properly imported
4. **Build failures**: Run `bun run lint` to check for code issues

### Development Tips

1. **Hot Reload**: The development server supports hot module replacement for instant feedback
2. **Type Safety**: Use TypeScript strict mode for better code quality
3. **Component Testing**: Write tests for new components using Testing Library
4. **Code Style**: Follow the existing code patterns and use the provided ESLint configuration

## Deployment

### Build Process

1. Run `bun run build` to create production build
2. The `dist/` folder contains all static files
3. Deploy the contents of `dist/` to your web server

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```
VITE_APP_TITLE=My Daily Planner
VITE_API_URL=https://api.example.com
```

Access in your code:
```typescript
const appTitle = import.meta.env.VITE_APP_TITLE;
```