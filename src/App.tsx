import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

import style from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={style.container}>
        <Input />
      </div>
    </>
  );
}

export default App;
