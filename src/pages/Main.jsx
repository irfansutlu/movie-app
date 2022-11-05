import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import {BiSearchAlt} from "react-icons/bi"

function Main() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  

  const getApi = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovies(data.results);
    console.log(movies);
  };

  const getSearch = async () => {
    if(search == ""){
      getApi()
    }else{
      const { data } = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&page=1`
      );
      setMovies(data.results);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="main">
      <div className="search-div">
        <form onSubmit={(e)=>{
          e.preventDefault()
          getSearch()
        }}>
          <input type="text" placeholder="Search movie" onChange={(e)=>setSearch(e.target.value)}/>
          <button type="submit">
            <BiSearchAlt size={22} />
          </button>
        </form>
      </div>

      <div className="container">
        {movies.map((item) => (
          <MovieCard {...item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
