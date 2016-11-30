import React, {PropTypes} from "react";
import Breadcrumb from "./breadcrumb";
import styles from "../styles/product.css";

export default class Product extends React.Component {
  render() {
    return (
      <div className={styles.product}>
        <div className={styles.productWrapper}>
          <Breadcrumb links={this.props.breadcrumbLinks} />
          {this.renderProductTitle()}
        </div>
      </div>
    );
  }

  renderProductTitle() {
    return (
      <h2 className={styles.productTitle}>{this.props.title}</h2>
    );
  }
}

Product.propTypes = {
  breadcrumbLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string
    })
  ),
  title: PropTypes.string
};

Product.defaultProps = {
  breadcrumbLinks: [],
  title: ""
};
