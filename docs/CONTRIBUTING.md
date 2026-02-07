# Contributing to My Daily Planner

Thank you for your interest in contributing to My Daily Planner! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- Bun package manager
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/My-Daily-Planner.git
   cd My-Daily-Planner
   ```
3. Install dependencies:
   ```bash
   bun install
   ```
4. Start the development server:
   ```bash
   bun run dev
   ```

## How to Contribute

### Reporting Issues

- Use the issue tracker to report bugs or request features
- Provide a clear description of the issue
- Include steps to reproduce the problem
- Add relevant screenshots or error messages
- Specify your environment (OS, browser, Node.js version)

### Suggesting Features

- Check if the feature has already been suggested
- Provide a clear use case for the feature
- Explain why this feature would be beneficial
- Be open to discussion and feedback

### Code Contributions

#### Branch Naming

Use descriptive branch names:
- `feature/add-event-categories`
- `bugfix/calendar-navigation-issue`
- `docs/update-readme`

#### Commit Messages

Follow conventional commit format:
```
type(scope): description

feat(calendar): add drag-and-drop event support
fix(ui): resolve mobile responsiveness issue
docs(readme): update installation instructions
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

#### Code Style

- Follow the existing code style and patterns
- Use TypeScript strict mode
- Write self-documenting code with clear variable names
- Add comments only when necessary to explain complex logic
- Use functional components and hooks

### Development Guidelines

#### Component Structure

```typescript
// Use descriptive component names
const CalendarEventCard: React.FC<CalendarEventCardProps> = ({ event, onDelete }) => {
  // Component logic here
  return (
    // JSX here
  );
};

// Export with named export
export { CalendarEventCard };
```

#### TypeScript Guidelines

- Always define prop interfaces
- Use proper type annotations
- Avoid `any` type
- Use utility types when appropriate

```typescript
interface CalendarEventCardProps {
  event: CalendarEvent;
  onDelete: (id: string) => void;
  className?: string;
}
```

#### Styling Guidelines

- Use Tailwind CSS classes
- Follow the existing design system
- Use the `cn()` utility for conditional classes
- Maintain responsive design principles

```tsx
<div className={cn(
  "p-4 rounded-lg border",
  isSelected && "bg-primary text-primary-foreground",
  className
)}>
```

### Testing

#### Writing Tests

- Write tests for new features
- Ensure all tests pass before submitting PR
- Use descriptive test names
- Follow the existing test patterns

```typescript
describe('CalendarEventCard', () => {
  it('should render event title correctly', () => {
    // Test implementation
  });
});
```

#### Running Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run tests with coverage
bun run test:coverage
```

### Pull Request Process

1. **Before Submitting**:
   - Ensure all tests pass
   - Run linting: `bun run lint`
   - Build successfully: `bun run build`
   - Update documentation if needed

2. **PR Description**:
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes
   - List any breaking changes

3. **Review Process**:
   - Maintainers will review your PR
   - Address any feedback or requested changes
   - Keep your branch up to date with main

## Code Review Standards

### For Contributors

- Be open to feedback and suggestions
- Respond to review comments promptly
- Make requested changes in new commits
- Ask questions if feedback is unclear

### For Maintainers

- Provide constructive feedback
- Explain the reasoning behind suggestions
- Be respectful and professional
- Help contributors improve their contributions

## Project Structure

```
My-Daily-Planner/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities
│   ├── pages/         # Page components
│   ├── types/         # TypeScript types
│   └── test/          # Test files
├── docs/              # Documentation
├── public/            # Static assets
└── [config files]
```

## Development Workflow

1. **Feature Development**:
   - Create feature branch
   - Implement feature with tests
   - Update documentation
   - Submit PR

2. **Bug Fixes**:
   - Create bugfix branch
   - Write test reproducing the bug
   - Fix the bug
   - Ensure test passes
   - Submit PR

3. **Documentation**:
   - Update relevant documentation
   - Add code comments if needed
   - Update README if necessary

## Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on the code, not the person
- Help maintain a positive environment

### Communication

- Use clear, professional language
- Be patient with questions
- Provide helpful context
- Acknowledge contributions

## Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributors section

## Questions?

If you have questions about contributing:
- Check existing documentation
- Search through issues
- Ask in discussions
- Contact maintainers

Thank you for contributing to My Daily Planner!