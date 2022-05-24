import { GET_ITEMS, ADD_TO_CARD, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from "./cardAction";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "react";

export const getItems = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/items" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => `items`,
    }),
  }),
});

console.log("getItems: ", getItems);

export const { useGetItemsQuery } = getItems;

// export const pokemonApi = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: Config.API_URL }),
//   tagTypes: [],
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// });

// // Export hooks for usage in functional components
// export const { useGetPokemonByNameQuery } = pokemonApi;

// export const getItems = () => {
//   return (dispatch) => {
//     return axios.get("http://localhost:3000/items").then((response) => {
//       console.log("response: ", response);
//       dispatch({ type: GET_ITEMS, payload: response.data });
//     });
//   };
// };

// export const addToCard = (id) => {
//   return {
//     type: ADD_TO_CARD,
//     id,
//   };
// };

// export const removeItem = (id) => {
//   return {
//     type: REMOVE_ITEM,
//     id,
//   };
// };

// export const subtractQuantity = (id) => {
//   return {
//     type: SUB_QUANTITY,
//     id,
//   };
// };

// export const addQuantity = (id) => {
//   return {
//     type: ADD_QUANTITY,
//     id,
//   };
// };
