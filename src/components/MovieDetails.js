import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import close from "../images/close-icon.svg";
import no_image from "../images/no-image.png";

export default function MovieDetails(props) {
  const { movieId } = props;
  const DOMAIN = "https://api.themoviedb.org/3";
  const KEY = "7315ec59ea2264da1fa4f4eb8d647853";
  const [movieDetail, setMovieDetail] = useState({});
  const url = `${DOMAIN}/movie/${movieId}?api_key=${KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      if (movieId) {
        const response = await axios.get(url);
        setMovieDetail(response.data);
      }
    };
    fetchData();
  }, [movieId]);

  const closeModal = () => {
    props.closeDetail && props.closeDetail(true);
  };

  if (movieDetail && Object.keys(movieDetail).length === 0) return null;

  const {
    title,
    poster_path,
    vote_average,
    release_date,
    overview,
    vote_count,
  } = movieDetail;
  let rel_date = new Date(release_date);
  rel_date = rel_date?.toDateString().split(" ");
  rel_date = ` ${rel_date[1]} ${rel_date[2]}, ${rel_date[3]}`;

  
  const image_src =
  poster_path !== null
      ? `https://image.tmdb.org/t/p/original/${poster_path}`
      : no_image;

  return (
    <>
      <div className="modal" onClick={closeModal}></div>
      <div className="modal-main">
        <img
          className="close-button"
          id="close-button"
          src={close}
          onClick={closeModal}
          alt="close"
        />
        <div className="modal-title">{title}</div>
        <div className="modal-content">
          <div className="modal-head">
            <div>
              <img
                src={image_src}
                className="modal-img"
                alt="poster"
              />
            </div>
          </div>
          <div className="modal-detail">
            <div>
              <strong>Release Date:</strong>
              {rel_date}
            </div>
            <div>{overview}</div>
            <div>
              <strong>{vote_average}</strong>
              {` / 10 (${vote_count} total votes)`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
