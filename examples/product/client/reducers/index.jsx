import {RECEIVE_COLLECTION} from "../actions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_COLLECTION:
    return Object.assign({}, state, {
      data: Object.assign({}, state.data, {
        product: Object.assign({}, state.data.product, {
          moreCollection: action.data
        })
      })
    });
  default:
    return state;
  }
};

export default rootReducer;
