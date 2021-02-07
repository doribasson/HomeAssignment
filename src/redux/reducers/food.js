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
  updateFood: [],
  searchTerm: "",
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
      // setFilteredCountries(
      //   countries.filter((country) =>
      //     country.name.toLowerCase().includes(search.toLowerCase()))
      // console.log(state.food.food_pairing);

      // console.log(action.searchTerm.toLowerCase());

      // const filterFood = state.food.filter(item => {
      //   item.food_pairing.filter(item1 =>
      //     item1.includes(action.searchTerm.toLowerCase())
      //   );
      //   // console.log(item.food_pairing);
      //   // console.log("lasssla");
      //   // console.log("lala");
      //   console.log("item", item);
      //   return item;
      // });

      // const filterFood = state.food.filter(item => {
      // item => item.name.toLowerCase().includes("Pilsen Lager".toLowerCase())
      // item => item.food_pairing.includes(item1 => item1.indexOf("cakes") > -1)
      //   let temp = action.searchTerm.toLowerCase().indexOf(item) > -1;
      //   return temp;
      // });

      // const filterFood = state.food.filter(
      //   item =>
      //     item.name.toLowerCase().indexOf(action.searchTerm.toLowerCase()) !==
      //     -1
      // );

      // const filterFood = state.food.map((item, i) => item.food_pairing[i]);
      // const filterFood = state.food.filter((item, i) => {
      //   // console.log(item);
      //   let temp = item.food_pairing.filter(item1 => {
      //     if (item1.indexOf("cake") > -1) {
      //       // console.log(item1.indexOf("cake") !== -1, "yes");
      //       console.log("yes");
      //       temp = [...temp, item1];
      //       console.log(temp, "yes");

      //       return temp;
      //     }
      //   });
      //   // console.log(temp);
      //   // return temp;
      // });
      // console.log(temp, "temp");

      // const filterFood = state.food.filter((item, i) => {
      //   // console.log(item);
      //   item.food_pairing.filter((item1, index) => {
      //     // console.log(item1.search("cake") === -1);
      //     // if (item1.indexOf("cake") === -1) {

      //     return item1.search("cake") !== -1;
      //     // temp = { ...item };

      //     // console.log(...item,);
      //     // return item1;
      //     // item.splice(index, 1);
      //     // console.log("yea");
      //     // let temp = { ...item, item1 };
      //     // console.log(item1, "yeaaaas");
      //     // }
      //     // console.log("yeaaaas");
      //   });
      //   console.log(item);
      //   // return temp;
      // });

      // console.log(filterFood, "after");

      // const temp = filterFood.filter(
      //   item => item.food_pairing.filter(item => item.includes("cake") === true)
      // item.food_pairing.map(item1 => item1.indexOf("cake"))
      // );
      // const temp1 = temp.filter(item => item.length !== 0);
      // console.log("temp", temp);
      // toLowerCase().includes("Pilsen Lager".toLowerCase())
      // console.log("item", item);

      // const filterFood = state.food.filter((item, i) => {
      //   let temp = [];
      //   item.food_pairing.map(item1 => {
      //     if (item1.indexOf("cake") !== -1) {
      //       temp = [...filterFood, item];
      //       // console.log("lala");
      //     }
      //     // console.log("item1", item1);
      //   });
      //   console.log("temp", temp);
      // });

      // console.log(filterFood);

      const filterFood = state.food.filter(
        item =>
          item.name &&
          item.name.toLowerCase().search(action.searchTerm.toLowerCase()) !== -1
      );

      // filterFood();
      console.log(filterFood);
      return {
        ...state,
        searchTerm: action.searchTerm,
        // updateFood: { data: payload, searchName: action.searchTerm },
        updateFood: filterFood,
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
