import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Recipe from "./Recipe";
function App() {
  const APP_ID = "4b03ac4f";
  const APP_KEY = "24847092d6fba21f22e46d0e264662f4";
  const [query, setQuery] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(res => {
        console.log(res.data);
        setQuery(res.data.hits);
      })
      .catch(e => console.log(e.message));
  }, []);
  return (
    <div className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {query.map}
    </div>
  );
}

export default App;
