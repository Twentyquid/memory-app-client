import React from "react";
import { useEffect, useState } from "react";
import backicon from "../images/backicon.png";
import { Link } from "react-router-dom";

function AddPost() {
  const [newpost, setNewpost] = useState({
    title: "",
    tags: "",
    fileSelected: "",
    description: "",
  });
  useEffect(() => {
    let actualBtn = document.getElementById("actual-btn");
    let fileChosen = document.getElementById("file-chosen");
    actualBtn.addEventListener("change", (e) => {
      fileChosen.textContent = e.target.files[0].name;
    });
    return () => {
      actualBtn.removeEventListener("change", (e) => {
        fileChosen.textContent = e.target.files[0].name;
      });
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newpost);
  }

  function handleChange(e) {
    let selected = e.target.name;
    let value = e.target.value;
    switch (selected) {
      case "title":
        setNewpost({ ...newpost, title: value });
        break;
      case "tags":
        setNewpost({ ...newpost, tags: value });
        break;
      case "description":
        setNewpost({ ...newpost, description: value });
        break;
      default:
        console.log("swith out of bounds");
        break;
    }
  }

  return (
    <section className=" bg-soapgreen h-screen py-16">
      <div className="px-3 flex justify-between">
        <div className="ml-auto mr-auto text-centern relative text-center">
          <Link to="/">
            <button className="absolute -left-20 top-2 rounded-full text-2xl text-yellow-300">
              <img className="w-3/4 h-3/4" src={backicon} alt="" />
            </button>
          </Link>
          <h3 className="text-xl text-slate-800 font-bold">New Post</h3>
          <p className="text-sm font-bold text-slate-500">
            create your new post
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="px-5 py-3 flex flex-col bg-white rounded-3xl border-2 border-slate-500 h-full mt-20"
      >
        <input
          onChange={handleChange}
          className="mt-2 px-2 py-1 rounded-lg bg-soapgreen"
          placeholder="Title"
          type="text"
          name="title"
        />
        <input
          onChange={handleChange}
          className="mt-2 px-2 py-1 rounded-lg bg-soapgreen"
          placeholder="Tags"
          type="text"
          name="tags"
        />
        <div className="mt-2 rounded-lg w-full flex">
          <label
            className="px-2 py-1 rounded-lg bg-green-400"
            htmlFor="actual-btn"
          >
            UPLOAD
          </label>
          <span
            id="file-chosen"
            className="px-2 py-1 rounded-lg w-full bg-soapgreen"
          >
            No file chosen
          </span>
        </div>
        <input
          onChange={(e) => {
            let reader = new FileReader();
            reader.onload = function (event) {
              let result = event.target.result;
              setNewpost({ ...newpost, fileSelected: result });
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
          name="fileSelected"
          type="file"
          id="actual-btn"
          hidden
        />
        <textarea
          onChange={handleChange}
          placeholder="Description"
          className="mt-2 px-2 py-1 rounded-lg bg-soapgreen"
          name="description"
          type="text"
          rows="3"
        />
        <button
          className="bg-orange-400  mr-auto px-2 py-1 rounded-lg mt-2"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}

export default AddPost;
