import React, {PropTypes} from "react";
import styles from "../styles/header-account.css";

const HeaderAccount = () => {
  return (
    <div className={styles.headerAccount}>
      <div className={styles.headerAccountLogin}>
        <div className={styles.headerAccountGreeting}>
          Hello. Sign In
        </div>
        <div className={styles.headerAccountMyAccount}>
          <span className={styles.headerAccountMyAccountLink}>My Account</span>
          <i className="material-icons">arrow_drop_down</i>
        </div>
      </div>
      <div className={styles.headerAccountCart}>
        <i className="material-icons">shopping_cart</i>
      </div>
    </div>
  );
}

export default HeaderAccount;
