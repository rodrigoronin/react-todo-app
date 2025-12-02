import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import TasksList from "./components/TasksList/TasksList";

import style from "./App.module.css";

function App() {
  const htmlEle = document.documentElement;

  return (
    <>
      <Header />

      <div className={style.container}>
        <Banner changeTheme={() => htmlEle.classList.toggle("dark")} />
        <TasksList />
      </div>
    </>
  );
}

export default App;
