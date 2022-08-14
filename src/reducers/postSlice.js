import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/feed";

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts: (state, action) => {
      return action.payload;
    },
  },
});

export const { getPosts } = postSlice.actions;

export const getFeed = () => async (dispatch) => {
  try {
    const { data } = await api.getFeed();
    dispatch(getPosts(data));
  } catch (error) {
    console.log(error);
  }
};

export default postSlice.reducer;
