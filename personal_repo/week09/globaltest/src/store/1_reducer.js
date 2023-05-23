import { useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      action.payload.preventDefault();
      return [
        ...state,
        {
          id: Math.random() * 100000,
          name: action.payload.target.name.value,
          price: action.payload.target.price.value,
        },
      ];
    case "FILTER":
      return state.filter((ingredient) => ingredient.id !== action.payload);
    default:
      return state;
  }
};
export default reducer;
