import React from "react";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getPosts } from "../reducers/postSlice";

function Home() {
  const feed = useSelector((state) => state.posts);
  console.log("feed inside the home component: ", feed);
  return <></>;
}

export default Home;
