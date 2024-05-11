import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    ShowGptSearch: false,
  },
  reducers: {
    ShowGptSearchView: (state) => {
      state.ShowGptSearch = !state.ShowGptSearch;
    },
  },
});

export const { ShowGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
