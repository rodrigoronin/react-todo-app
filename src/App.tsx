import TasksList from "./components/TasksList/TasksList";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

import style from "./App.module.css";

function App() {
  const htmlEle = document.documentElement;

  return (
    <>
      <Banner />

      <div className={style.container}>
        <Header changeTheme={() => htmlEle.classList.toggle("dark")} />
        <TasksList />
        <span className={`text-preset-2 ${style["reorder-hint"]}`}>
          Drag and drop to reorder list
        </span>
      </div>
    </>
  );
}

export default App;
