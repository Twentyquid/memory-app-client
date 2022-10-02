import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    let loggeduser = JSON.parse(localStorage.getItem("memories-app-user"));
    if (loggeduser) {
      navigate("/");
    } else {
      navigate("/getstarted");
    }
  }, [navigate]);
  return <div>Dashboard</div>;
}

export default Dashboard;
