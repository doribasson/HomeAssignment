import axios from "axios";
import {
  GET_FOOD,
  FOOD_ERROR,
  UPDATE_FOOD,
  UPDATE_FAVORITES,
  UPDATE_RANK,
  CLEAR_FAVORITES
} from "../action/types";

export const getFood = () => async dispach => {
  try {
    let one = `https://api.punkapi.com/v2/beers?page=1&per_page=50`;
    let two = `https://api.punkapi.com/v2/beers?page=2&per_page=50`;
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);

    axios.all([requestOne, requestTwo]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];

        dispach({
          type: GET_FOOD,
          responseOne: responseOne.data,
          responseTwo: responseTwo.data
        });
      })
    );
  } catch (err) {
    dispach({
      type: FOOD_ERROR,
      payload: { msg: err.message, msg2: "endpoint problem" }
    });
  }
};

export const updateFood = searchTerm => async dispach => {
  try {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers?food=${searchTerm}`
    );

    dispach({
      type: UPDATE_FOOD,
      payload: res.data,
      searchTerm: searchTerm
    });
  } catch (err) {
    dispach({
      type: FOOD_ERROR,
      payload: { msg: err.message, msg2: "problem to update" }
    });
  }
};

export const updateFavorites = id => async dispach => {
  try {
    dispach({
      type: UPDATE_FAVORITES,
      payload: id
    });
  } catch (err) {
    dispach({
      type: FOOD_ERROR,
      payload: { msg: err.message, msg2: "problem to update favorite" }
    });
  }
};

export const updateRank = (id, rank) => async dispach => {
  try {
    dispach({
      type: UPDATE_RANK,
      rank: rank,
      id: id
    });
  } catch (err) {
    dispach({
      type: FOOD_ERROR,
      payload: { msg: err.message, msg2: "problem to update rank" }
    });
  }
};

export const clearFavorites = () => async dispach => {
  try {
    dispach({
      type: CLEAR_FAVORITES
    });
  } catch (err) {
    dispach({
      type: FOOD_ERROR,
      payload: { msg: err.message, msg2: "cant clear the favorites" }
    });
  }
};
