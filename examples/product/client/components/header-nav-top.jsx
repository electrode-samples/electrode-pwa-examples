import React, {PropTypes} from "react";
import styles from "../styles/header-nav-top.css";

const HeaderNavTop = (props) => {
  const renderedTopNavItems = props.navItems.map((item, i) => (
    <div className={styles.headerNavTopItem} key={i}>
      <i className="material-icons">{item.icon}</i>
      {item.name}
    </div>
  ));

  return (
    <nav className={styles.headerNavTop}>
      <div className={styles.headerNavTopWrapper}>
        {renderedTopNavItems}
      </div>
    </nav>
  );
};

HeaderNavTop.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string
  }))
};

HeaderNavTop.defaultProps = {
  navItems: []
};

export default HeaderNavTop;
