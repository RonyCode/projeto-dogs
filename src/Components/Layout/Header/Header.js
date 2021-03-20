import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dog } from "../../../Assets/dogs.svg";
import { UserContext } from "../../../Hooks/UserContext";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink className={styles.logo} to="/" aria-label="Dogs - Home" end>
          <Dog />
        </NavLink>
        {data && (
          <button className={styles.button} onClick={userLogout}>
            <NavLink to="/login">Logout</NavLink>
          </button>
        )}
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
