import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {fetchCollection} from "../actions";
import StarRating from "./star-rating";
import image1 from "../images/battlefield.jpg";
import image2 from "../images/madden.jpg";
import image3 from "../images/wwe.jpg";
import image4 from "../images/fifa.jpg";
import image5 from "../images/last-of-us.jpg";
import image6 from "../images/overwatch.jpg";
import image7 from "../images/skyrim.jpg";
import styles from "../styles/product-more.css";

const productImages = [
  image1, image2, image3, image4, image5, image6, image7
];

class ProductMore extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(fetchCollection());
  }

  render() {
    const items = []
    const {title} = this.props;

    return (
      <div className={styles.productMore}>
        <h3 className={styles.productMoreTitle}>{title}</h3>
        {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    const {product} = this.props;

    if (!product.moreCollection.length) {
      return (
        <div className={styles.productMoreLoading}></div>
      );
    }

    const items = product.moreCollection.map((item, i) => (
      <div className={styles.productMoreItemsItem}>
        <img className={styles.productMoreItemsItemImage} src={productImages[i]} />
        <div className={styles.productMoreItemsItemPrice}>
          <span className={styles.productMoreItemsItemPriceCurrency}>
            {item.currency}
          </span>
          <span>{item.price}</span>
        </div>
        <div className={styles.productMoreItemsName}>
          {item.name}
        </div>
        <div className={styles.productMoreItemsRating}>
          <StarRating rating={item.rating} />
          <span> {item.reviewCount}</span>
        </div>
      </div>
    ));

    return (
      <div className={styles.productMoreItems}>
        {items}
      </div>
    );
  }
}

ProductMore.propTypes = {
  dispatch: PropTypes.func,
  product: PropTypes.object
};

ProductMore.defaultProps = {
  product: {}
};

export default connect()(ProductMore);
