import React from "react";

function TitleBar() {
  return (
    <div className="bg-home text-slate-700 px-3 py-2 flex justify-between overflow-x-hidden items-end fixed top-0 left-0 w-full">
      <p className="text-2xl font-bold">MEMORIES</p>
      <div>
        <div className="flex flex-col justify-between items-center">
          <div className="w-6 h-1 bg-navViolet mt-1 rounded-full"></div>
          <div className="w-6 h-1 bg-navViolet mt-1 rounded-full"></div>
          <div className="w-6 h-1 bg-navViolet mt-1 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
