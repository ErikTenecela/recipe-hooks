import React from "react";

function Recipe({ key, title, calories, img, ingredients }) {
  return (
    <div>
      <h1 key={key}>{title}</h1>
      <p>{calories}</p>
      <img src={img} alt="" />
      <ol>
        {ingredients.map(each => (
          <li>
            Instruction: {each.text} Wieght: {each.weight}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;
