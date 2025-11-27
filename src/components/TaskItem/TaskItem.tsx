import type { Task } from "../../types/task";
import Card from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";

import style from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <Card>
      <Checkbox completed={task.completed} />
      <span className={`${style.title} ${task.completed && style.completed} text-preset-1`}>
        {task.title}
      </span>
    </Card>
  );
};

export default TaskItem;
