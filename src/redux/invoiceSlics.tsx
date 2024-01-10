import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    allInvoices: data,
  },
  reducers: {},
});

export default invoiceSlice;
