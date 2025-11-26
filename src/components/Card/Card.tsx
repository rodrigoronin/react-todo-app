import style from "./Card.module.css";

interface ChildrenProp {
  children: React.ReactNode;
}

const Card = ({ children }: ChildrenProp) => {
  return <div className={style.container}>{children}</div>;
};

export default Card;
