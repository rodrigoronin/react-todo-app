import style from "./Filter.module.css";

interface FilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  active: string;
}

const Filter = ({ setFilter, active }: FilterProps) => {
  return (
    <div className={style.filter}>
      <button
        type="button"
        className={`${style.button} text-preset-3 ${active === "all" && style.active}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        type="button"
        className={`${style.button} text-preset-3 ${active === "active" && style.active}`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        type="button"
        className={`${style.button} text-preset-3 ${active === "completed" && style.active}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
