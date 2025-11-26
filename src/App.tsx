import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";

import style from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={style.container}>
        <AddTask />
      </div>
    </>
  );
}

export default App;
