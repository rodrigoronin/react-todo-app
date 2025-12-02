import style from "./Banner.module.css";

interface BannerProps {
  changeTheme: () => void;
}

const Banner = ({ changeTheme }: BannerProps) => {
  return (
    <header className={style.banner}>
      <h1 className={style.title}>TODO</h1>
      <span className={style["theme-icon"]} onClick={changeTheme}>
        Theme
      </span>
    </header>
  );
};

export default Banner;
