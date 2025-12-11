import { useState } from "react";
import type { Task } from "../../types/task";
import AddTask from "../AddTask/AddTask";
import TaskItem from "../TaskItem/TaskItem";
import TaskListFooter from "./components/TaskListFooter";
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

import style from "./TasksList.module.css";
import { SortableContext } from "@dnd-kit/sortable";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterType, setFilterType] = useState<string>("all");

  function getRemainingTasks(): number {
    return tasks.filter((task) => !task.completed).length;
  }

  function onAddTask(task: Task): void {
    setTasks((prev) => [...prev, task]);
  }

  function onToggle(id: string): void {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function onDelete(id: string): void {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function handleDragEnd(event: DragEndEvent): void {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setTasks((prev) => {
        const oldIndex = prev.findIndex((t) => `draggable-${t.id}` === active.id);
        const newIndex = prev.findIndex((t) => `draggable-${t.id}` === over.id);

        const newTasksOrder = [...prev];
        const [removed] = newTasksOrder.splice(oldIndex, 1);
        newTasksOrder.splice(newIndex, 0, removed);

        return newTasksOrder;
      });
    }
  }

  // returning true will result in the entire tasks array being returned without any filters
  const filteredTasks: Task[] = tasks.filter((task) => {
    if (filterType === "active") return !task.completed;
    if (filterType === "completed") return task.completed;
    return true;
  });

  return (
    <>
      <AddTask onAddTask={onAddTask} />
      <div className={style.container}>
        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext items={tasks}>
            <div>
              {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
              ))}

              {tasks.length > 0 && (
                <TaskListFooter
                  tasksRemaining={getRemainingTasks()}
                  clearCompleted={() => setTasks((prev) => prev.filter((task) => !task.completed))}
                >
                  <Filter setFilter={setFilterType} active={filterType} />
                </TaskListFooter>
              )}

              <div className={style["filter-container"]}>
                <Card>
                  <Filter setFilter={setFilterType} active={filterType} />
                </Card>
              </div>
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
};

export default TaskList;
