import Card from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";

import style from "./AddTask.module.css";

const AddTask = () => {
  return (
    <Card>
      <Checkbox />
      <input
        className={`${style.input} text-preset-1`}
        id="input"
        type="text"
        placeholder="Create a new todo..."
      />
    </Card>
  );
};

export default AddTask;
