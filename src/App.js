import React from "react";
import { useEffect } from "react";
import { getFeed } from "./reducers/postSlice";
import { useDispatch } from "react-redux";

import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import TitleBar from "./components/Titlebar";
import { Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import Dashboard from "./components/Dashboard";
import GetStarted from "./components/GetStarted";
import Signup from "./components/Signup";
import Onboard from "./components/Onboard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddPost />}></Route>
        <Route path="/dash" element={<Dashboard />}></Route>
        <Route path="/getstarted" element={<GetStarted />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/onboard" element={<Onboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
