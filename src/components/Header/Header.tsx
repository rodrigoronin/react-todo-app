import style from "./Header.module.css";
import darkIcon from "../../assets/dark_icon.svg";
import lightIcon from "../../assets/ligh_icon.svg";
import { useState } from "react";

interface HeaderProps {
  changeTheme: () => void;
}

const Header = ({ changeTheme }: HeaderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const icons = { darkIcon, lightIcon };

  const handleThemeChange = () => {
    const htmlEle = document.documentElement;
    changeTheme();
    setDarkMode(htmlEle.classList.contains("dark"));
  };

  return (
    <header className={style.header}>
      <h1 className={style.title}>TODO</h1>
      <svg width={24} height={24} className={style["theme-icon"]} onClick={handleThemeChange}>
        <rect width="100%" height="100%" fill="transparent" />
        <image
          href={darkMode ? icons.lightIcon : icons.darkIcon}
          width="24"
          height="24"
          x="0"
          y="0"
        />
      </svg>
    </header>
  );
};

export default Header;
