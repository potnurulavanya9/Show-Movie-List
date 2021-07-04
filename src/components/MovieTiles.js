import React from "react";
import "./App.css";
import no_image from "../images/no-image.png";

export default function MovieTiles(props) {
  const { title, backdrop_path, vote_average, id } = props.movies;
  const toggleModal = (id) => {
    props.selectTile && props.selectTile(id);
  };
  const image_src =
    backdrop_path !== null
      ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
      : no_image;
  return (
    <div className="tile">
      <p className="rating">{vote_average}</p>
      <img
        src={image_src}
        style={{ width: 300, height: 300 }}
        onClick={() => toggleModal(id)}
        alt="movie list"
      />
      <div className="movie-title">{title}</div>
    </div>
  );
}
