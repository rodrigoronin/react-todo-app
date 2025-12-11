import style from "./Checkbox.module.css";
import checkedIcon from "../../assets/checked_icon.svg";

interface CheckboxProps {
  completed: boolean;
  taskId?: string;
  onToggle?: (id: string) => void;
  onChange?: () => void;
}

// onChange to check/uncheck on creation (taskId doesn't exist)
// onToggle to check/uncheck after creation
const Checkbox = ({ completed = false, taskId, onToggle, onChange }: CheckboxProps) => {
  return (
    <span
      className={`${style.checkbox} ${completed && style.completed}`}
      onClick={() => {
        if (taskId && onToggle) onToggle(taskId);
        else onChange?.();
      }}
    >
      {completed && (
        <svg width={24} height={24}>
          <rect width="100%" height="100%" fill="transparent" />
          <image href={checkedIcon} width={16} height={16} x="20%" y="20%" />
        </svg>
      )}
    </span>
  );
};

export default Checkbox;
