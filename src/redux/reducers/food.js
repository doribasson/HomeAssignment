import {
  GET_FOOD,
  FOOD_ERROR,
  UPDATE_FOOD,
  UPDATE_FAVORITES,
  CLEAR_FAVORITES,
  UPDATE_RANK
} from "../action/types";

const initialState = {
  food: [],
  loading: true,
  updateFood: {},
  error: {}
};

export default function foodReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FOOD:
      return {
        ...state,
        food: [...action.responseOne, ...action.responseTwo],
        loading: false
      };

    case UPDATE_FOOD:
      return {
        ...state,
        updateFood: { data: payload, searchName: action.searchTerm },
        loading: false
      };

    case UPDATE_FAVORITES:
      if (!state.food[payload - 1].selected) state.food[payload - 1].rank = 1;
      return {
        ...state,
        food: [
          ...state.food,
          (state.food[payload - 1].selected = !state.food[payload - 1].selected)
        ],
        loading: false
      };

    case UPDATE_RANK:
      return {
        ...state,
        food: [...state.food, (state.food[action.id - 1].rank = action.rank)],
        loading: false
      };

    case CLEAR_FAVORITES:
      const clearFavor = state.food.map(
        el => (el.selected = false) && (el.rank = 1)
      );

      return {
        ...state,
        food: clearFavor,
        loading: false
      };

    case FOOD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
