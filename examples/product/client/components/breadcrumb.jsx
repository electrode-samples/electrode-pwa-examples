import React, {PropTypes} from "react";
import styles from "../styles/breadcrumb.css";

const Breadcrumb = (props) => {
  const breadcrumbs = props.links.map((link, i) => (
    <span className={styles.breadcrumbLink} key={i}>
      <a href={link.href}>{link.text}</a>
      <i className="material-icons">keyboard_arrow_right</i>
    </span>
  ));

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs}
    </div>
  );
}

Breadcrumb.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string
    })
  )
};

Breadcrumb.defaultProps = {
  links: []
};

export default Breadcrumb;
