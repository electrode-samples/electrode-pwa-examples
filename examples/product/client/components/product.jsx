import React, {PropTypes} from "react";
import Breadcrumb from "./breadcrumb";
import ProductGallery from "./product-gallery";
import styles from "../styles/product.css";

export default class Product extends React.Component {
  render() {
    return (
      <div className={styles.product}>
        <div className={styles.productWrapper}>
          <Breadcrumb links={this.props.product.breadcrumb} />
          <ProductGallery product={this.props.product} />
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object
};

Product.defaultProps = {
  product: {}
};
