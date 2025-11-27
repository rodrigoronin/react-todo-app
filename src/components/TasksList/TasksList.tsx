import { useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskListFooter from "./components/TaskListFooter";

import type { Task } from "../../types/task";
import style from "./TasksList.module.css";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function getRemainingTasks(): number {
    return tasks.filter((task) => !task.completed).length;
  }

  function onAddTask(task: Task): void {
    setTasks((prev) => [...prev, task]);
  }

  return (
    <div className={style.container}>
      <AddTask onAddTask={onAddTask} />
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        {tasks.length > 0 && <TaskListFooter tasksRemaining={getRemainingTasks()} />}
      </div>
    </div>
  );
};

export default TaskList;
