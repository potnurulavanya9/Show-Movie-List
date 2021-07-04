import { React, useState } from "react";
import logo from "../images/logo.svg";
import search from "../images/search.png";
import "./App.css";

const Header = (props) => {
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const searchInput = (e) => {
    props.searchKeyword && props.searchKeyword(e.target.value);
    setShowSearchIcon(e.target.value === "" ? true : false);
  };

  return (
    <div className="movie-header">
      <img src={logo} alt="Timescale" className="logo" />
      <div className="search">
        {showSearchIcon && <img src={search} alt="Search" />}
        <input
          type="text"
          placeholder="Search for a movie"
          onChange={searchInput}
        />
      </div>
    </div>
  );
};

export default Header;
