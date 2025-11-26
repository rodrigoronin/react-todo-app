import style from "./Checkbox.module.css";

const Checkbox = ({ completed = false }: { completed?: boolean }) => {
  return <span className={`${style.checkbox} ${completed && style.completed}`}></span>;
};

export default Checkbox;
