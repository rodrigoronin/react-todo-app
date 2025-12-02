import Card from "../../Card/Card";

import style from "./TaskListFooter.module.css";

interface FooterProps {
  tasksRemaining: number;
  clearCompleted: () => void;
  children?: React.ReactNode;
}

const TaskListFooter = ({ tasksRemaining, clearCompleted, children }: FooterProps) => {
  return (
    <Card>
      <div className={style.container}>
        <span
          className={`${style["remaining-tasks"]} text-preset-2`}
        >{`${tasksRemaining} items left`}</span>

        <div className={style["desktop-filters"]}>{children}</div>

        <button
          type="button"
          className={`${style["clear-tasks"]} ${style.button} text-preset-2`}
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </Card>
  );
};

export default TaskListFooter;
