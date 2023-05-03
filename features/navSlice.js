import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;
const selectOrigin = (state) => state.nav.origin;
const selectDestination = (state) => state.nav.destination;
const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export default navSlice.reducer;
