import React from "react";
import { useState } from "react";

export default function Search() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <input
      className=" w-full max-w-4xl  m-10 mx-auto flex px-5 py-3 rounded-3xl bg-red-200"
      type="text"
      placeholder="search your item"
      value={searchItem}
      onChange={(event) => {
        setSearchItem(event.target.value);
      }}
    />
  );
}
