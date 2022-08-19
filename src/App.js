import React from "react";
import { useEffect } from "react";
import { getFeed } from "./reducers/postSlice";
import { useDispatch } from "react-redux";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TitleBar from "./components/TitleBar";
import { Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import Dashboard from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  return (
    <>
      <TitleBar></TitleBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddPost />}></Route>
        <Route path="/dash" element={<Dashboard />}></Route>
      </Routes>
      <Navbar></Navbar>
    </>
  );
}

export default App;
