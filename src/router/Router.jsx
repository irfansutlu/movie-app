import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/AuthContext";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";

function Router() {
     const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Main/> : <Login />} index />
        <Route path="details/:id" element={user ? <MovieDetail/> : <Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
