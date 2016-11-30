import ReduxRouterEngine from 'electrode-redux-router-engine';
import React from 'react';
import {routes} from "../../client/routes";
const Promise = require("bluebird");
import {createStore} from "redux";
import rootReducer from "../../client/reducers";

function storeInitializer(req) {
  let initialState;

  if(req.path === "/") {
    initialState = {
      data: {
        breadcrumbLinks: [{
          href: "",
          text: "Video Games"
        }, {
          href: "",
          text: "PlayStation 4"
        }, {
          href: "",
          text: "PlayStation 4 Consoles"
        }],
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
        productTitle: "PlayStation Pro 1TB Gaming Console"
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
