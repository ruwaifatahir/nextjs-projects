import { createSlice } from "@reduxjs/toolkit";

interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: boolean;
}

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    value: [] as Transaction[],
    count: 0,
    selectedId: 0 as any,
    statistics: {
      income: 0,
      expense: 0,
    },
  },
  reducers: {
    addTransaction: (state, action) => {
      state.value.push(action.payload);
      state.count++;
      state.selectedId = undefined;
      action.payload.type
        ? (state.statistics.income += action.payload.amount)
        : (state.statistics.expense += action.payload.amount);
    },

    removeTransaction: (state, action) => {
      console.log(action.payload);
      state.value.splice(action.payload, 1);
      state.selectedId = undefined;

      const transaction = state.value[action.payload];

      transaction?.type
        ? (state.statistics.income -= transaction?.amount)
        : (state.statistics.expense -= transaction?.amount);
    },
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTransaction, removeTransaction, setSelectedId } =
  transactionSlice.actions;

export default transactionSlice.reducer;
