import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./invoiceSlics";

const dataStore = configureStore({
  reducer: {
    invoices: invoiceSlice.reducer,
  },
});

export default dataStore;
