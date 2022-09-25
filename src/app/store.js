import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transaction/transactionSlice";
import FilterReducer from "../features/FilterSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        Filter: FilterReducer,
    },
});
