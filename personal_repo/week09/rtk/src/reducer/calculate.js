import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: ["Kim", "Lee", "Park"],
  //   calToState: {
  //     loading: false, //모두 초기값을 설정을 해줬다.
  //     done: false,
  //     err: null,
  //   },
};

export const calSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    PLUS_ONE: (state, action) => {
      state.name.push(action.payload);
      //   state.calState += 1;
    },
    MINUS_ONE: (state, action) => {
      //   state.calState -= 1;
      const newName = state.name.filter((name) => name !== "Kim");
      state.name = newName;
    },
    // PLUS_AMOUNT: (state, action) => {
    //   state.calState += action.payload;
    // },
  },
});

export const { PLUS_ONE, MINUS_ONE, PLUS_AMOUNT } = calSlice.actions;
