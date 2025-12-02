import style from "./Checkbox.module.css";

interface CheckboxProps {
  completed: boolean;
  taskId?: string;
  onToggle?: (id: string) => void;
  onChange?: () => void;
}

const Checkbox = ({ completed = false, taskId, onToggle, onChange }: CheckboxProps) => {
  return (
    <span
      className={`${style.checkbox} ${completed && style.completed}`}
      onClick={() => {
        if (taskId && onToggle) onToggle(taskId);
        else onChange?.();
      }}
    ></span>
  );
};

export default Checkbox;
