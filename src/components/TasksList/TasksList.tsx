import { useState } from "react";
import AddTask from "../AddTask/AddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskListFooter from "./components/TaskListFooter";

import type { Task } from "../../types/task";
import style from "./TasksList.module.css";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Daily shadow boxing training",
      completed: false,
    },
    {
      id: "2",
      title: "Work on TODO app",
      completed: true,
    },
    {
      id: "3",
      title: "Work on my game",
      completed: false,
    },
    {
      id: "4",
      title: "Make coffee",
      completed: true,
    },
    {
      id: "5",
      title: "Play some games",
      completed: true,
    },
  ]);

  function getRemainingTasks(): number {
    return tasks.filter((task) => !task.completed).length;
  }

  return (
    <div className={style.container}>
      <AddTask />
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        <TaskListFooter tasksRemaining={getRemainingTasks()} />
      </div>
    </div>
  );
};

export default TaskList;
