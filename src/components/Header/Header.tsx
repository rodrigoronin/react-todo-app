import style from "./Header.module.css";

interface HeaderProps {
  changeTheme: () => void;
}

const Header = ({ changeTheme }: HeaderProps) => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>TODO</h1>
      <span className={style["theme-icon"]} onClick={changeTheme}>
        Theme
      </span>
    </header>
  );
};

export default Header;
