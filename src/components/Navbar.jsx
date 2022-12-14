import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1>
        <a href="https://irfansutlu.github.io/mywebsite/" target="_blank">
          <img src="https://irfansutlu.github.io/mywebsite/img/irfanpp-removebg-preview.png" />
        </a>
        Movie App
      </h1>
      <div className="nav-btn">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => setUser(null)}>
          {user ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
