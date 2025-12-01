import { useState, type FormEvent } from "react";
import Card from "../Card/Card";

import style from "./AddTask.module.css";
import type { Task } from "../../types/task";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const id = crypto.randomUUID();

    onAddTask({
      id,
      title,
      completed,
    });

    setTitle("");
  };

  return (
    <Card>
      <form className={style.container} onSubmit={handleSubmit}>
        <span
          className={`${style.checkbox} ${completed && style.completed}`}
          onClick={() => setCompleted((prev) => !prev)}
        ></span>
        <input
          className={`${style.input} text-preset-1`}
          id="input"
          type="text"
          placeholder="Create a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </Card>
  );
};

export default AddTask;
