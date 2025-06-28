import React, { useEffect, useState } from "react";

function Api() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/recipes');
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {!data ? (
        <p>Loading...</p>
      ) : (
        data.recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "1rem" }}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={{ width: "200px" }} />
            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
            <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Calories:</strong> {recipe.caloriesPerServing}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions.join(" -> ")}</p>
            <p><strong>Tags:</strong> {recipe.tags.join(", ")}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Api;
