import { useState, type FormEvent } from "react";
import Card from "../Card/Card";
import type { Task } from "../../types/task";
import Checkbox from "../Checkbox/Checkbox";

import style from "./AddTask.module.css";
import newTaskIcon from "../../assets/new_task.svg";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

interface IState {
  title: string;
  completed: boolean;
}

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [newTask, setNewTask] = useState<IState>({
    title: "",
    completed: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!newTask.title.trim()) return;

    const id = crypto.randomUUID();

    onAddTask({
      id,
      title: newTask.title,
      completed: newTask.completed,
    });

    setNewTask(() => ({ title: "", completed: false }));
  };

  return (
    <Card>
      <form className={style.container} onSubmit={handleSubmit}>
        <Checkbox
          completed={newTask.completed}
          onChange={() => setNewTask((prev) => ({ ...prev, completed: !prev.completed }))}
        />
        <input
          className={`${style.input} text-preset-1`}
          id="input"
          type="text"
          placeholder="Create a new todo..."
          value={newTask.title}
          onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))}
        />
        <button className={style["button-submit"]} type="submit">
          <svg width={20} height={20}>
            <rect width="100%" height="100%" fill="transparent" />
            <image href={newTaskIcon} width={20} height={20} />
          </svg>
        </button>
      </form>
    </Card>
  );
};

export default AddTask;
