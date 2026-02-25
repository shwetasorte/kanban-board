# Kanban Board

A fully functional, reusable Kanban Board component built with React, TypeScript, and DND Kit for drag-and-drop functionality.

## Features

- ✅ **Add Cards** - Click "Add Card" to create new cards in any column
- ✅ **Delete Cards** - Remove cards with the delete button
- ✅ **Drag and Drop** - Smooth drag-and-drop between columns with animations
- ✅ **Inline Edit** - Double-click card titles to edit them in place
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Clean Architecture** - Functional components with hooks and centralized state management

## Tech Stack

- **React 18** - Modern React with functional components
- **TypeScript** - Strong typing and interfaces
- **DND Kit** - Powerful drag-and-drop library
- **CSS3** - Modern styling with animations and transitions

## Project Structure

```
src/
├── types.ts           # TypeScript interfaces and types
├── KanbanBoard.tsx    # Main board component with state management
├── Column.tsx         # Column component with drag-and-drop
├── Card.tsx           # Card component with inline editing
├── App.tsx            # Sample app demonstrating the component
├── styles.css         # Responsive styling and animations
└── main.tsx           # React entry point
```

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Component API

### KanbanBoard

The main component that renders the complete kanban board.

```tsx
import { KanbanBoard } from './KanbanBoard';

function App() {
  return <KanbanBoard />;
}
```

### State Management

The board uses React's `useReducer` hook for centralized state management with the following actions:

- `ADD_CARD` - Add a new card to a column
- `DELETE_CARD` - Remove a card
- `UPDATE_CARD` - Update card title
- `MOVE_CARD` - Move card between columns
- `REORDER_CARDS` - Reorder cards within a column

### Types

```typescript
interface Column {
  id: string;
  title: string;
}

interface Card {
  id: string;
  columnId: string;
  title: string;
}
```

## Features in Detail

### Adding Cards
1. Click the "+ Add Card" button in any column
2. Enter a title and press Enter or click "Add"
3. Press Escape or click "Cancel" to discard

### Editing Cards
1. Double-click on any card title
2. Edit the title inline
3. Press Enter to save or Escape to cancel

### Drag and Drop
1. Click and hold any card to start dragging
2. Drag to another column or position
3. Release to drop the card in the new location

### Deleting Cards
1. Click the "×" button on any card
2. Card is immediately removed from the board

## Responsive Design

- **Desktop**: Columns displayed horizontally in a grid
- **Mobile**: Columns stacked vertically for easy scrolling
- **Touch**: Full touch support for mobile devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
