import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as FooterDog } from "../../../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterDog />
      <p>Ronycode todos os direitos reservados &copy;2021</p>
    </footer>
  );
};

export default Footer;
