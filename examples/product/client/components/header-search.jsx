import React, {PropTypes} from "react";
import styles from "../styles/header-search.css";

const HeaderSearch = () => {
  return (
    <div className={styles.headerSearch}>
      <div className={styles.headerSearchCategories}>
        <span>All</span>
        <i className="material-icons">arrow_drop_down</i>
      </div>
      <input className={styles.headerSearchInput} placeholder="Search" type="text" />
      <div className={styles.headerSearchButton}>
        <i className="material-icons">search</i>
      </div>
    </div>
  );
}

export default HeaderSearch;
