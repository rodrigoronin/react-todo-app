import type { Task } from "../../types/task";
import Card from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";
import { useDraggable } from "@dnd-kit/core";

import style from "./TaskItem.module.css";
import deleteIcon from "../../assets/delete_icon.svg";
import { useSortable } from "@dnd-kit/sortable";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${task.id}`,
  });
  const { setNodeRef: setSortableRef } = useSortable({
    id: `draggable-${task.id}`,
  });
  const dragStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        setSortableRef(node);
      }}
      style={dragStyle}
    >
      <Card>
        <Checkbox completed={task.completed} taskId={task.id} onToggle={onToggle} />
        <span className={`${style.title} ${task.completed && style.completed} text-preset-1`}>
          {task.title}
        </span>
        <span className={style.delete} onClick={() => onDelete(task.id)}>
          <svg width={18} height={18}>
            <rect width="100%" height="100%" fill="transparent" />
            <image href={deleteIcon} width={18} height={18} />
          </svg>
        </span>
        <span className={style.dragHandle} {...listeners} {...attributes}>
          {`:::`}
        </span>
      </Card>
    </div>
  );
};

export default TaskItem;
