import React from "react";

function Recipe({ key, title, calories, img }) {
  return (
    <div>
      <h1 key={key}>{title}</h1>
      <p>{calories}</p>
      <img src={img} alt="" />
    </div>
  );
}

export default Recipe;
