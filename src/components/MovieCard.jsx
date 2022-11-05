import React from "react";
import { useNavigate } from "react-router-dom";


function MovieCard(item) {
  const navigate = useNavigate();
  const {
    id,
    title,
    poster_path,
    release_date,
    overview,
    vote_average,
    vote_count,
  } = item;
  return (
    <div
      key={id}
      className="card"
      onClick={() => navigate(`details/${id}`)}
    >
      <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
      <div className="card-body">
        <h3>{title}</h3>
        <div className="votes">
          <p>{vote_average}</p>
          <p>{vote_count}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
