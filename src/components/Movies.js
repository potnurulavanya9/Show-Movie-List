import { React, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MovieTiles from "./MovieTiles";
import MovieDetails from "./MovieDetails";
import NoResults from "./NoResults";

const Movies = (props) => {
  const { searchTerm } = props;
  const [movie, setMovie] = useState();
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const DOMAIN = "https://api.themoviedb.org/3";
  const KEY = "7315ec59ea2264da1fa4f4eb8d647853";
  const url = `${DOMAIN}/movie/now_playing?api_key=${KEY}`;

  const showModal = (data) => {
    console.log(data);
    setShow(true);
    setId(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = {};
      if (searchTerm === "") {
        response = await axios.get(url);
      } else {
        response = await axios.get(
          `${DOMAIN}/search/movie?api_key=${KEY}&query=${searchTerm}`
        );
        if (response?.data?.results.length === 0) return <NoResults />;
      }
      setMovie(response.data.results);
    };
    fetchData();
  }, [searchTerm]);

  const closeModal = (isClosed) => {
    setShow(isClosed ? false : true);
  };

  return (
    <div>
      <h1>Most Recent Movies</h1>
      <div className="container">
        {movie?.map((movies, index) => {
          return (
            <MovieTiles movies={movies} key={index} selectTile={showModal} />
          );
        })}
      </div>
      {show && <MovieDetails movieId={id} closeDetail={closeModal} />}
    </div>
  );
};

export default Movies;
