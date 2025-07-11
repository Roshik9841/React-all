import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { ApiDataContext } from "../App";
function Api() {
  const {data,setData} = React.useContext(ApiDataContext);
  
  const [error, setError] = useState("");

  function updateValue(apiItem) {

      setData(apiItem);

   
  }

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <Search updateValue={updateValue} />
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
          {data.recipes.map((recipe) => (
            <div key={recipe.id} className="shadow overflow-hidden">
              <div className="relative  w-full h-70 overflow-hidden rounded-xl cursor-pointer">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className=" object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <h1 className="p-4 font-bold">{recipe.name}</h1>
              <Link to="/id:">
                <p className="p-4 pt-0 text-orange-400">View Details →</p>
              </Link>
            </div>
          ))}
        </div>
      )}
      {data?.recipes?.length === 0 && (
        <p className="text-center text-gray-500">No results found</p>
      )}
    </div>
  );
}

export default Api;
