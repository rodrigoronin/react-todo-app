import { useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskListFooter from "./components/TaskListFooter";
import Filter from "../Filter/Filter";

import type { Task } from "../../types/task";
import style from "./TasksList.module.css";
import Card from "../Card/Card";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterType, setFilterType] = useState<string>("all");

  function getRemainingTasks(): number {
    return tasks.filter((task) => !task.completed).length;
  }

  function onAddTask(task: Task): void {
    setTasks((prev) => [...prev, task]);
  }

  function onToggle(id: string): void {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function onDelete(id: string): void {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  // returning true will result in the entire tasks array being returned without any filters
  const filteredTasks: Task[] = tasks.filter((task) => {
    if (filterType === "active") return !task.completed;
    if (filterType === "completed") return task.completed;
    return true;
  });

  return (
    <div className={style.container}>
      <AddTask onAddTask={onAddTask} />
      <div>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))}

        {tasks.length > 0 && (
          <TaskListFooter
            tasksRemaining={getRemainingTasks()}
            clearCompleted={() => setTasks((prev) => prev.filter((task) => !task.completed))}
          >
            <Filter setFilter={setFilterType} />
          </TaskListFooter>
        )}

        <div className={style["filter-container"]}>
          <Card>
            <Filter setFilter={setFilterType} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
