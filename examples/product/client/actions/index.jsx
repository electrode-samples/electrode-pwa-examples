export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const REQUEST_COLLECTION = "REQUEST_COLLECTION";

export const receiveCollection = (json) => ({
  data: json.data,
  type: RECEIVE_COLLECTION
});

export const requestCollection = () => ({
  type: REQUEST_COLLECTION
});

export const fetchCollection = () => (dispatch) => {
  dispatch(requestCollection());

  return fetch(`/collection`)
    .then((res) => res.json())
    .then((json) => dispatch(receiveCollection(json)));
};
