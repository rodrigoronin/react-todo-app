import style from "./Checkbox.module.css";

interface CheckboxProps {
  completed: boolean;
  id: string;
  onToggle: (id: string) => void;
}

const Checkbox = ({ completed = false, id, onToggle }: CheckboxProps) => {
  return (
    <span
      className={`${style.checkbox} ${completed && style.completed}`}
      onClick={() => onToggle(id)}
    ></span>
  );
};

export default Checkbox;
