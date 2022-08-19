import axios from "axios";

const URL = "https://dry-inlet-98390.herokuapp.com/feed";

export const getFeed = () => axios.get(URL);
export const createFeed = (data) => axios.post(URL, data);
export const updateFeed = (data, id) =>
  axios.patch(`${URL}/update/${id}`, data);
