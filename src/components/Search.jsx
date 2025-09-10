import {React,useEffect,useState} from "react";


export default function Search({updateValue}) {
  const [searchItem, setSearchItem] = useState("");
  

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`https://dummyjson.com/recipes/search?q=${searchItem}`);
          const jsonData = await res.json();
          updateValue(jsonData);
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchData();
    }, [searchItem]);
  

  return (
    <input
      className=" w-full max-w-4xl  m-10 mx-auto flex px-5 py-3 rounded-3xl  border-2 border-black-900 focus:outline-none focus:ring"
      type="text"
      placeholder="search your item"
      value={searchItem}
      onchange= {e=>{
        setSearchItem(e.target.value)
      }} 
    />
  );
}
