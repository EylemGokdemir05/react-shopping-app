import { GET_ITEMS, ADD_QUANTITY, ADD_SHIPPING, ADD_TO_CARD, REMOVE_ITEM, SUB_QUANTITY } from "./cardAction";
import { createSlice } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getItems } from "./action";

const initState = {
  items: [],
  addedItems: [],
  total: 0,
};

const rootReducer = combineReducers({
  [getItems.reducerPath]: getItems.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(getItems.middleware),
    preloadedState,
  });
};

// const cardReducer = createSlice({
//   name: "cardReducer",
//   initState,
//   reducers: {
//     getItems: (state, action) => {
//       state.items = action.payload;
//     },
//   },
// });

const cardReducer = (state = initState, action) => {
  if (action.type === GET_ITEMS) {
    return action.payload;
  }
  if (action.type === ADD_TO_CARD) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let existedItem = state.addedItems.find((item) => action.id === item.id);
    if (existedItem) {
      addedItem.quantity++;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let newItems = state.addedItems.filter((item) => action.id !== item.id);
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: newItems,
      total: newTotal,
    };
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity++;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    if (addedItem.quantity === 1) {
      let newItems = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: newItems,
        total: newTotal,
      };
    } else {
      addedItem.quantity--;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }
  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }
  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};
export default cardReducer;
