import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../reducers/userSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name: "", email: "" });
  function handleChange(e) {
    let selected = e.target.name;
    let value = e.target.value;
    switch (selected) {
      case "name":
        setUser({ ...user, username: value });
        break;
      case "email":
        setUser({ ...user, email: value });
        break;
      default:
        console.log("swith out of bounds");
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createUser(user));
    localStorage.setItem("memories-app-user", JSON.stringify(user));
    navigate("/");
  }

  return (
    <>
      <div className="">
        <section className=" bg-soapgreen h-screen py-16">
          <div className="px-3 flex justify-between">
            <div className="ml-auto mr-auto text-centern relative text-center">
              <Link to="/">
                <button className="absolute -left-20 top-2 rounded-full text-2xl text-yellow-300">
                  {/* <img className="w-3/4 h-3/4" src={backicon} alt="" /> */}
                </button>
              </Link>
              <h3 className="text-xl text-slate-800 font-bold">Sign Up</h3>
              <p className="text-sm font-bold text-slate-500">
                create your memories account
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="px-5 py-3 flex flex-col bg-white rounded-3xl border-2 border-slate-500 h-full pb-20 pt-8 mt-8"
          >
            <input
              onChange={handleChange}
              className="mt-4 px-2 py-1 rounded-lg bg-soapgreen"
              placeholder="name"
              type="text"
              name="name"
              required
            />
            <input
              onChange={handleChange}
              className="mt-4 px-2 py-1 rounded-lg bg-soapgreen"
              placeholder="email"
              type="email"
              name="email"
              required
            />

            <button
              className="bg-orange-400  mr-auto px-2 py-1 rounded-lg mt-4"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Signup;
