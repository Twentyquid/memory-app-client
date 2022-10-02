import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
  },
});

const { addUser } = userSlice.actions;

export const createUser = (userData) => async (dispatch) => {
  try {
    let { data } = await api.createUser(userData);
    dispatch(addUser(data));
  } catch (error) {
    console.log("Error in creating user: \n", error);
  }
};

export default userSlice.reducer;
