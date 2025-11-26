import Card from "../Card/Card";

import style from "./AddTask.module.css";

const Input = () => {
  return (
    <Card>
      <span className={style.checkbox}></span>
      <input
        className={`${style.input} text-preset-1`}
        id="input"
        type="text"
        placeholder="Create a new todo..."
      />
    </Card>
  );
};

export default Input;
