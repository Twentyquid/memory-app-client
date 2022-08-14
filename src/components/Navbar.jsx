import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-lightBlue px-5 py-2 rounded-t-2xl">
      <div className="flex justify-between text-2xl">
        <div>
          <AiOutlineHome></AiOutlineHome>
        </div>
        <div>
          <IoIosAddCircleOutline></IoIosAddCircleOutline>
        </div>
        <div>
          <AiOutlineUser></AiOutlineUser>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
