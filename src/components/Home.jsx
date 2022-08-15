import React from "react";
import Feed from "./Feed";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getPosts } from "../reducers/postSlice";

function Home() {
  const feed = useSelector((state) => state.posts);
  return (
    <section className="h-screen bg-home overflow-y-scroll py-16  px-3">
      {feed.map((item) => {
        return <Feed key={item._id} {...item} />;
      })}
    </section>
  );
}

export default Home;
