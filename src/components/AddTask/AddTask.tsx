import { useState, type FormEvent } from "react";
import Card from "../Card/Card";

import style from "./AddTask.module.css";
import type { Task } from "../../types/task";
import Checkbox from "../Checkbox/Checkbox";

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

    setNewTask((prev) => {
      prev = {
        title: "",
        completed: false,
      };

      return prev;
    });
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
      </form>
    </Card>
  );
};

export default AddTask;
