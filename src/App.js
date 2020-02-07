import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Recipe from "./Recipe";
function App() {
  const APP_ID = "4b03ac4f";
  const APP_KEY = "24847092d6fba21f22e46d0e264662f4";
  const [store, setStore] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(res => {
        console.log(res.data);
        setStore(res.data.hits);
      })
      .catch(e => console.log(e.message));
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  //onSubmit runs only when we have a forum wrapped around the fourm element
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {store.map(each => (
        <Recipe
          title={each.recipe.label}
          calories={each.recipe.calories}
          img={each.recipe.image}
          key={each.recipe.label}
          ingredients={each.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
