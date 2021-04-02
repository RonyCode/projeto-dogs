import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const { pathname } = useLocation();
  React.useEffect(() => {
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatisticas");
        break;
      case "/conta/postar":
        setTitle("Poste sua foto");
        break;
      default:
        setTitle("Minha conta");
    }
  }, [{ pathname }]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
