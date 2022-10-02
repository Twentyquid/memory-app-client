import React from "react";
import Feed from "../Feed";
import { Puff } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getPosts } from "../reducers/postSlice";

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const feed = useSelector((state) => state.posts);
  useEffect(() => {
    if (feed[0]) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [feed]);

  useEffect(() => {
    let loggeduser = JSON.parse(localStorage.getItem("memories-app-user"));
    if (loggeduser) {
      navigate("/");
    } else {
      navigate("/onboard");
    }
  }, [navigate]);
  return (
    <section className="container bg-home overflow-y-scroll">
      {feed.map((item) => {
        return <Feed key={item._id} {...item} />;
      })}
      {loading ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Puff color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
}

export default Home;
