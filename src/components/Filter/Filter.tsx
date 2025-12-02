import style from "./Filter.module.css";

interface FilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ setFilter }: FilterProps) => {
  return (
    <div className={style.filter}>
      <button
        type="button"
        className={`${style.button} text-preset-3`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        type="button"
        className={`${style.button} text-preset-3`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        type="button"
        className={`${style.button} text-preset-3`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
