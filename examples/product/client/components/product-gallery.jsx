import React, {PropTypes} from "react";
import styles from "../styles/product-gallery.css";

export default class ProductGallery extends React.Component {
  render() {
    return (
      <section className={styles.productGallery}>
        {this.renderProductTitle()}
      </section>
    )
  }

  renderProductTitle() {
    return (
      <h2 className={styles.productTitle}>{this.props.product.title}</h2>
    );
  }
}

ProductGallery.propTypes = {
  product: PropTypes.object
};

ProductGallery.defaultProps = {
  product: {}
};
