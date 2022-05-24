import { ADD_TO_CARD, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from "./cardAction";

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
