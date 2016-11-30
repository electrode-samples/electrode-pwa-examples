import React, {PropTypes} from "react";
import styles from "../styles/header-nav-bottom.css";

const HeaderNavBottom = (props) => {
  return (
    <nav className={styles.headerNavBottom}>
      <div className={styles.headerNavBottomDepartments}>
        <span>All Departments</span>
        <i className="material-icons">arrow_drop_down</i>
      </div>
      <div className={styles.headerNavBottomLinks}>
        <span className={styles.headerNavBottomLink}>Cyber Week Deals</span>
        <span className={styles.headerNavBottomLink}>My Local Store</span>
        <span className={styles.headerNavBottomLink}>Pick It Up TODAY</span>
        <span className={styles.headerNavBottomLink}>Christmas Decor</span>
      </div>
      <div className={styles.headerNavBottomRight}>
        FREE store pickup as soon as today
      </div>
    </nav>
  );
}

export default HeaderNavBottom;
