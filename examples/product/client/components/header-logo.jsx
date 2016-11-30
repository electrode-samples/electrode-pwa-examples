import React, {PropTypes} from "react";
import {IndexLink} from "react-router";
import styles from "../styles/header-logo.css";

const HeaderLogo = () => {
  return (
    <IndexLink className={styles.headerLogo} to="/" />
  );
}

export default HeaderLogo;
