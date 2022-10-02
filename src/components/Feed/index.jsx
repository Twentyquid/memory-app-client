import React from "react";
import { useDispatch } from "react-redux";
import { MdDeleteOutline, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { updateFeed } from "../../reducers/postSlice";
import { useState } from "react";
// import defaultImage2 from "../images/default2.png";

function Feed(props) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  function handleClick(event) {
    if (!liked) {
      let oldCount = props.likeCount;
      let newPost = { ...props, likeCount: oldCount + 1 };
      dispatch(updateFeed(newPost));
      setLiked(true);
    }
  }
  return (
    <article className="border-2 border-slate-600 rounded-3xl flex flex-col justify-between p-8 mb-8 bg-white overflow-hidden">
      <h3 className="text-lg font-semibold">{props.title.toUpperCase()}</h3>
      <p className="mt-2 text-slate-500 text-xs">
        {props.tags.map((item, i) => {
          return <span key={i}>{`#${item}`}</span>;
        })}
      </p>
      <div className="mt-4 ">
        <img className="ml-auto mr-auto" src={props.imageFile} alt="" />
      </div>
      <p className="mt-6 text-sm">{props.description}</p>
      <div className="mt-6 flex w-full justify-between">
        <button
          onClick={handleClick}
          className="rounded-lg border-2 border-blue-600 px-2 py-1 flex items-center"
        >
          <span className="mr-2">
            {liked ? (
              <MdFavorite></MdFavorite>
            ) : (
              <MdFavoriteBorder></MdFavoriteBorder>
            )}
          </span>
          {props.likeCount}
        </button>
        <button className="px-2 py-1 rounded-lg bg-red-500 text-white flex items-center ml-2">
          <span className="mr-2">
            <MdDeleteOutline></MdDeleteOutline>
          </span>
          DELETE
        </button>
      </div>
    </article>
  );
}

export default Feed;
