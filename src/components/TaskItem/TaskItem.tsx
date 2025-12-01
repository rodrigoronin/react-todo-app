import type { Task } from "../../types/task";
import Card from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";

import style from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <Card>
      <Checkbox completed={task.completed} id={task.id} onToggle={onToggle} />
      <span className={`${style.title} ${task.completed && style.completed} text-preset-1`}>
        {task.title}
      </span>
      <span className={style.delete} onClick={() => onDelete(task.id)}>
        X
      </span>
    </Card>
  );
};

export default TaskItem;
