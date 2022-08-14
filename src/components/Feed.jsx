import React from "react";
import { MdDeleteOutline, MdFavoriteBorder } from "react-icons/md";
import defaultImage2 from "../images/default2.png";

function Feed() {
  return (
    <article className="border-2 border-slate-600 rounded-xl flex flex-col justify-between p-8 mb-8 bg-white">
      <h3 className="text-lg font-semibold">HIKING AT THE MOUNTAINS</h3>
      <p className="mt-2 text-slate-500 text-xs">#hiking #mountains</p>
      <div className="mt-4 ">
        <img className="ml-auto mr-auto" src={defaultImage2} alt="" />
      </div>
      <p className="mt-6 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At architecto
        explicabo ipsa voluptatibus in odit expedita sequi soluta cumque
        corporis.
      </p>
      <div className="mt-6 flex w-full justify-between">
        <button className="rounded-lg border-2 border-blue-600 px-2 py-1 flex items-center">
          <span className="mr-2">
            <MdFavoriteBorder></MdFavoriteBorder>
          </span>
          Like
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
