import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ApplicationState = {};

const initialState: ApplicationState = {};

const application = createSlice({
  name: "application",
  initialState,
  reducers: {},
});

export default application.reducer;
