import * as types from "./actionTypes";
import { createSlice } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getItems } from "./action";

const initState = {
  items: [],
  addedProducts: [],
  total: 0,
  loading: true,
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case types.ADD_TO_CARD:
      if(state.total === 0) {
        let card = {
          added: action.payload.added,
          quantity:1,
          price: action.payload.price,
          name: action.payload.name,
          itemType: action.payload.itemType
        }
        console.log('card: ',card)
        state.addedProducts.push(card);
        console.log('addedProducts: ',state.addedProducts)
      } else {
        let check = false;
        state.addedProducts.map((product,key) => {
          if(product.added === action.payload.added) {
            state.addedProducts[key].quantity++;
            check = true;
          }
        })
        if(!check) {
          let card = {
            added: action.payload.added,
            quantity:1,
            price: action.payload.price,
            name: action.payload.name,
            itemType: action.payload.itemType
          }
          state.addedProducts.push(card);
        }
      }
      return {
        ...state,
        total: state.total+1
      };
    case types.INCREASE_QUANTITY:
      state.total++;
      state.addedProducts[action.payload].quantity++;
      return {
        ...state
      }
    case types.DECREASE_QUANTITY:
      let quantity = state.addedProducts[action.payload].quantity;
      if(quantity > 1) {
        state.total--;
        return state.addedProducts[action.payload].quantity;
      }
      return {
        ...state
      }
    default:
      return state;
  }
};

export default productReducer;
