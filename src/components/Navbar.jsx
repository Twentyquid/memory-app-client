import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-lightBlue px-5 py-3 rounded-t-2xl">
      <div className="flex justify-between text-2xl font-bold">
        <Link to="/">
          <div className="bg-yellow-300 p-1 flex justify-center items-center rounded-full">
            <AiOutlineHome></AiOutlineHome>
          </div>
        </Link>
        <Link to="/add">
          <div className="bg-yellow-300 p-1 flex justify-center items-center rounded-full">
            <IoIosAddCircleOutline></IoIosAddCircleOutline>
          </div>
        </Link>
        <Link to="/dash">
          <div className="bg-yellow-300 p-1 flex justify-center items-center rounded-full">
            <AiOutlineUser></AiOutlineUser>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
