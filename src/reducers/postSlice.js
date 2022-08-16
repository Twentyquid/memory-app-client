import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/feed";

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts: (state, action) => {
      return action.payload;
    },
    uploadPosts: (state, action) => {
      return [...state, action.payload];
    },
  },
});

const { getPosts, uploadPosts } = postSlice.actions;

export const getFeed = () => async (dispatch) => {
  try {
    const { data } = await api.getFeed();
    dispatch(getPosts(data));
  } catch (error) {
    console.log(error);
  }
};

export const createFeed = (newpost) => async (dispatch) => {
  try {
    newpost.tags = newpost.tags.split(",");
    let { data } = await api.createFeed(newpost);
    dispatch(uploadPosts(data));
  } catch (error) {
    console.log(error);
  }
};

export default postSlice.reducer;
