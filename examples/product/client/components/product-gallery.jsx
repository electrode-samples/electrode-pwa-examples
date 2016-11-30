import React, {PropTypes} from "react";
import Gallery from "./gallery";
import StarRating from "./star-rating";
import image1 from "../images/ps4-1.jpg";
import image2 from "../images/ps4-2.jpg";
import image3 from "../images/ps4-3.jpg";
import image4 from "../images/ps4-4.jpg";
import image5 from "../images/ps4-5.jpg";
import styles from "../styles/product-gallery.css";

const galleryImages = [image1, image2, image3, image4, image5];

export default class ProductGallery extends React.Component {
  render() {
    return (
      <section className={styles.productGallery}>
        {this.renderProductTitle()}
        {this.renderProductMeta()}
        {this.renderProductGallery()}
      </section>
    )
  }

  renderProductTitle() {
    return (
      <h1 className={styles.productGalleryTitle}>{this.props.product.title}</h1>
    );
  }

  renderProductMeta() {
    const {product} = this.props;

    return (
      <div className={styles.productGalleryMeta}>
        <StarRating rating={product.starRating} />
        <span className={styles.productGalleryMetaSection}>
          <a href="">{product.reviewCount} reviews</a>
        </span>
        <span className={styles.productGalleryMetaSection}>
          <a href="">Q&A</a>
        </span>
        <span className={styles.productGalleryMetaSection}>
          <span>By: </span>
          <a href="">{product.madeBy}</a>
        </span>
        <span className={styles.productGalleryMetaSection}>
          <span>Walmart #: {product.storeNumber}</span>
        </span>
      </div>
    );
  }

  renderProductGallery() {
    return (<Gallery images={galleryImages} />);
  }
}

ProductGallery.propTypes = {
  product: PropTypes.object
};

ProductGallery.defaultProps = {
  product: {}
};
