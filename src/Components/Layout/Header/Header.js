import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dog } from "../../../Assets/dogs.svg";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={styles.nav + " container"}>
        <NavLink className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </NavLink>
        {data ? (
          <NavLink className={styles.login} to="/conta">
            {data.nome}
          </NavLink>
        ) : (
          <NavLink className={styles.login} to="/login">
            Login / Criar
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
