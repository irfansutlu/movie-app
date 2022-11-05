import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getApi = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovie(data);
    console.log(data);
  };
  useEffect(() => {
    getApi();
  }, []);
  const { genres, poster_path, title, overview } = movie;
  return (
    <div className="details-div">
      <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
      <div className="details-body">
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className="types">
          {genres?.map((item)=>(
            <h3>{item?.name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
