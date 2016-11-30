import ReduxRouterEngine from 'electrode-redux-router-engine';
import React from 'react';
import {routes} from "../../client/routes";
import moment from "moment";
import {createStore} from "redux";
import rootReducer from "../../client/reducers";

const Promise = require("bluebird");

function storeInitializer(req) {
  let initialState;
  const today = moment();

  if(req.path === "/") {
    initialState = {
      data: {
        navItemsTop: [{
          icon: "credit_card",
          name: "Gift Cards"
        }, {
          icon: "card_giftcard",
          name: "Registry & Lists"
        }, {
          icon: "event",
          name: "Weekly Ads"
        }, {
          icon: "room",
          name: "Store Finder"
        }, {
          icon: "store",
          name: "Track Order"
        }, {
          icon: "credit_card",
          name: "Credit Card"
        }, {
          icon: "help",
          name: "Help"
        }, {
          icon: "restaurant_menu",
          name: "Grocery Pickup"
        }],
        product: {
          breadcrumb: [{
            href: "",
            text: "Video Games"
          }, {
            href: "",
            text: "PlayStation 4"
          }, {
            href: "",
            text: "PlayStation 4 Consoles"
          }],
          price: {
            cents: "00",
            dollars: "399",
            currency: "$"
          },
          carePlans: [{
            duration: "3-Year",
            price: "$39.00"
          }, {
            duration: "4-year",
            price: "$53.00"
          }],
          shippedByMessage: "Sold & Shipped by",
          shippedByLink: {
            href: "",
            text: "Walmart"
          },
          shipping: "FREE",
          shippingDateExpedited: today.add(2, "days").format("dddd, MMM D"),
          title: "PlayStation Pro 1TB Gaming Console"
        }
      }
    };
  } else {
    initialState = {};
  }

  return createStore(rootReducer, initialState);
}

function createReduxStore(req, match) {
  const store = storeInitializer(req);

  return Promise.all([
      // DO ASYNC THUNK ACTIONS HERE : store.dispatch(boostrapApp())
      Promise.resolve({})
    ]).then(() => {
      return store;
  });
}

// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.

module.exports = (req) => {
  const app = req.server && req.server.app || req.app;
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({routes, createReduxStore});
  }

  return app.routesEngine.render(req);
};
