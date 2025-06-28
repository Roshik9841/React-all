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
    <div >
      {error && <p>Error: {error}</p>}
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto  bg-red-200">
        {data.recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={{ width: "200px" }} />
           
          </div>
        ))}
        </div>
      )}
    </div>
  );
}

export default Api;
