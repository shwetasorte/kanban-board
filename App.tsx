import { KanbanBoard } from './KanbanBoard';
import './styles.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Shweta's Kanban Board</h1>
        <p>Drag and drop cards to organize your tasks</p>
      </header>
      <main className="app-main">
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;
