import axios from "axios";

const URL = "https://dry-inlet-98390.herokuapp.com/signup";

export const createUser = (data) => axios.post(URL, data);
