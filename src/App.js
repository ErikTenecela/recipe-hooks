import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Recipe from "./Recipe";
function App() {
  const APP_ID = "4b03ac4f";
  const APP_KEY = "24847092d6fba21f22e46d0e264662f4";
  const [store, setStore] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(res => {
        console.log(res.data);
        setStore(res.data.hits);
      })
      .catch(e => console.log(e.message));
  }, []);
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
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
        />
      ))}
    </div>
  );
}

export default App;
