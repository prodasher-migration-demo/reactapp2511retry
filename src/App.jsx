import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import FilterBar from './components/FilterBar.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';

const FILTERS = {
  all: () => true,
  active: (t) => !t.completed,
  completed: (t) => t.completed,
};

export default function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (title, priority) => {
    setTasks((prev) => [
      { id: crypto.randomUUID(), title, priority, completed: false, createdAt: Date.now() },
      ...prev,
    ]);
  };

  const toggleTask = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  const clearCompleted = () => setTasks((prev) => prev.filter((t) => !t.completed));

  const visibleTasks = useMemo(() => tasks.filter(FILTERS[filter]), [tasks, filter]);
  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <main className="container">
      <Header total={tasks.length} remaining={remaining} />
      <TaskForm onAdd={addTask} />
      <FilterBar
        filter={filter}
        onChange={setFilter}
        onClearCompleted={clearCompleted}
        hasCompleted={tasks.some((t) => t.completed)}
      />
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  );
}
