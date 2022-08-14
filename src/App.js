import React from "react";
import { useEffect } from "react";
import { getFeed } from "./reducers/postSlice";
import { useDispatch } from "react-redux";
import "./App.css";

import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  return (
    <>
      <h1>Home page</h1>
      <Home></Home>
    </>
  );
}

export default App;
