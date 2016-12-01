/* global navigator */

import React, {PropTypes} from "react";
import styles from "../styles/product-order.css";
import icon from "../images/walmart-icon-192x192.png";
import badge from "../images/walmart-icon-72x72.png";

export default class ProductOrder extends React.Component {

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager.subscribe({ userVisibleOnly: true });
      });
    }
  }

  handleAddToCart() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Added to Cart", {
          body: "Your item has been added to your cart.",
          icon,
          badge
        });
      });
    }
  }

  render() {
    return (
      <section className={styles.productOrder}>
        <div className={styles.productOrderWrapper}>
          {this.renderPrice()}
          {this.renderShippedBy()}
          {this.renderShippingOptions()}
          {this.renderPickup()}
          {this.renderCarePlan()}
          {this.renderAddToCart()}
        </div>
      </section>
    );
  }

  renderPrice() {
    const {product} = this.props;

    return (
      <div className={styles.productOrderPrice}>
        <span className={styles.productOrderPriceCurrency}>{product.price.currency}</span>
        <span className={styles.productOrderPriceDollars}>{product.price.dollars}</span>
        <span className={styles.productOrderPriceCents}>{product.price.cents}</span>
        <span className={styles.productOrderPriceShipping}>
          <span> + </span>
          <span className={styles.productOrderPriceShippingAmount}>{product.shipping}</span>
          <span> shipping </span>
        </span>
      </div>
    );
  }

  renderShippedBy() {
    const {product} = this.props;

    return (
      <div className={styles.productOrderShippedBy}>
        <span>{product.shippedByMessage} </span>
        <a
          className={styles.productOrderShippedByLink}
          href={product.shippedByLink.href}>
          {product.shippedByLink.text}
        </a>
      </div>
    );
  }

  renderShippingOptions() {
    const {product} = this.props;

    return (
      <div className={styles.productOrderShippingOptions}>
        <i className="material-icons">directions_bus</i>
        <span>Want it by </span>
        <span className={styles.productOrderShippingOptionsBold}>
          {product.shippingDateExpedited}
        </span>
        <span>? Choose </span>
        <span className={styles.productOrderShippingOptionsBold}>
          Expedited
        </span>
        <span> at checkout</span>
      </div>
    );
  }

  renderPickup() {
    return (
      <div className={styles.productOrderPickup}>
        <i className="material-icons">store</i>
        <span>Pickup not available</span>
      </div>
    );
  }

  renderCarePlan() {
    const {product} = this.props;
    const carePlans = product.carePlans.map((carePlan, i) => (
      <div className={styles.productOrderCarePlanItem} key={i}>
        <i className="material-icons">add_circle_outline</i>
        <span>Add </span>
        <span className={styles.productOrderCarePlanItemBold}>{carePlan.duration}</span>
        <span> Protection </span>
        <span className={styles.productOrderCarePlanItemBold}>{carePlan.price}</span>
      </div>
    ));

    return (
      <div className={styles.productOrderCarePlan}>
        <div className={styles.productOrderCarePlanHeader}>
          <span>Protect your purchased with a </span>
          <span className={styles.productOrderCarePlanHeaderBold}>Care Plan</span>
          <i className="material-icons">help</i>
        </div>
        {carePlans}
      </div>
    );
  }

  renderAddToCart() {
    return (
      <div className={styles.productOrderAddToCart}>
          <span className={styles.productOrderAddToCartQuantity}>
            <span className={styles.productOrderAddToCartQuantityText}>Quantity: </span>
            <span className={styles.productOrderAddToCartQuantitySelector}>
              <span>1</span>
              <i className="material-icons">arrow_drop_down</i>
            </span>
          </span>
          <button
            onClick={this.handleAddToCart}
            className={styles.productOrderAddToCartButton}>
              Add to Cart
          </button>
      </div>
    );
  }
}

ProductOrder.propTypes = {
  product: PropTypes.object
};

ProductOrder.defaultProps = {
  product: {}
};
