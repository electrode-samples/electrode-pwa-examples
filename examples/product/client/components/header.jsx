import React, {PropTypes} from "react";
import HeaderAccount from "./header-account";
import HeaderLogo from "./header-logo";
import HeaderSearch from "./header-search";
import HeaderNavBottom from "./header-nav-bottom";
import HeaderNavTop from "./header-nav-top";
import styles from "../styles/header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <HeaderNavTop navItems={this.props.navItemsTop} />
          <HeaderLogo />
          <HeaderSearch />
          <HeaderAccount />
          <HeaderNavBottom />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  navItemsTop: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string
  }))
};

Header.defaultProps = {
  navItemsTop: []
};
