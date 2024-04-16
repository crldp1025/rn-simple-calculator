import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";

interface IValueProps {
  prevValue: string;
  currentValue: string;
  operator: string | undefined;
}

const initialState: IValueProps = {
  prevValue: "0",
  currentValue: "0",
  operator: undefined
}

export const enterNumber = createAction<string>("ENTER_NUMBER");
export const selectOperator = createAction<string>("SELECT_OPERATOR");
export const reset = createAction("RESET");

export const selectNumber = createAsyncThunk(
  'select_number',
  async (arg, {getState}) => {
    
  }
);

const calculatorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(enterNumber, (state, action) => {
      state.currentValue = (state.currentValue === "0") ? action.payload : state.currentValue + action.payload;
    })
    .addCase(selectOperator, (state, action) => {
      state.operator = action.payload;
    })
    .addCase(reset, (state) => {
      state.prevValue = "0";
      state.currentValue = "0";
      state.operator = undefined;
    });
});

export default calculatorReducer;