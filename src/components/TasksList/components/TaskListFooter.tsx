import Card from "../../Card/Card";

import style from "./TaskListFooter.module.css";

const TaskListFooter = ({ tasksRemaining }) => {
  return (
    <Card>
      <div className={style.container}>
        <span
          className={`${style["remaining-tasks"]} text-preset-2`}
        >{`${tasksRemaining()} items left`}</span>
        <div className={style.filter}>
          <button type="button" className={`${style.button} text-preset-3`}>
            All
          </button>
          <button type="button" className={`${style.button} text-preset-3`}>
            Active
          </button>
          <button type="button" className={`${style.button} text-preset-3`}>
            Completed
          </button>
        </div>
        <button type="button" className={`${style["clear-tasks"]} ${style.button} text-preset-2`}>
          Clear Completed
        </button>
      </div>
    </Card>
  );
};

export default TaskListFooter;
