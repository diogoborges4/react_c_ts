import React from "react";
import styles from "./Footer.module.css"

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <p>
        <span>React + TS Todo</span> @ 2023
      </p>
    </div>
  );
};

export default Footer;
