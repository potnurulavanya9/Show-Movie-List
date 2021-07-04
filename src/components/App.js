import React, { useState } from "react";
import Header from "./Header.js";
import Movies from "./Movies.js";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleKeyword = (keyword) => {
    setSearchTerm(keyword);
  };
  return (
    <div>
      <Header searchKeyword={handleKeyword} />
      <hr />
      <Movies searchTerm={searchTerm} />
    </div>
  );
};

export default App;
