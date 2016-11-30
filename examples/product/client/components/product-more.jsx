import React, {PropTypes} from "react";
import styles from "../styles/product-more.css";

export default class ProductMore extends React.Component {
  render() {
    const {title, items} = this.props;

    return (
      <div className={styles.productMore}>
        <h3 className={styles.productMoreTitle}>{title}</h3>
      </div>
    );
  }
}

ProductMore.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

ProductMore.defaultProps = {
  items: []
};
