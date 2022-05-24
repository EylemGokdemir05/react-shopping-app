import { GET_ITEMS, ADD_TO_CARD, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from "./cardAction";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const getItems = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
//   endpoints: (builder) => ({
//     getItems: builder.query({
//       query: () => `items`,
//     }),
//   }),
// });

// export const { useGetItemsQuery } = getItems;

export const getItems = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/items").then((response) => {
      console.log("response: ", response);
      dispatch({ type: GET_ITEMS, payload: response.data });
    });
  };
};

export const addToCard = (id) => {
  return {
    type: ADD_TO_CARD,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
