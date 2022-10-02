import React from "react";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="pt-20 pb-10 h-screen bg-violet-400 text-white flex flex-col">
      <h3>Get started with memories</h3>
      <div>
        <Link to="/signup">
          <button className="bg-orange-400  mr-auto px-2 py-1 rounded-lg mt-4">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
