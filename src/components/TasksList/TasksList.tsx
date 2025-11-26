import AddTask from "../AddTask/AddTask";
import Card from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";

import style from "./TasksList.module.css";

interface Task {
  title: string;
  completed: boolean;
}

const tasks: Task[] = [
  {
    title: "Daily shadow boxing training",
    completed: false,
  },
  {
    title: "Work on TODO app",
    completed: true,
  },
  {
    title: "Work on my game",
    completed: false,
  },
  {
    title: "Make coffee",
    completed: true,
  },
  {
    title: "Play some games",
    completed: false,
  },
];

const Input = () => {
  return (
    <div className={style.container}>
      <AddTask />
      <div>
        {tasks.map((task) => (
          <Card>
            <Checkbox completed={task.completed} />
            <span className={`${style.title} ${task.completed && style.completed} text-preset-1`}>
              {task.title}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Input;
