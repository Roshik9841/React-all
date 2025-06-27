import { useState } from "react";

function NewWord() {
  const [word, setWord] = useState("");
  const [items, setItems] = useState([]);

  function handleAdd() {
    if (word.trim() === "") return;
  
    setItems([...items,{word,id:Math.random()}]);
    setWord(""); 
  }

  function handleDelete(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="flex flex-col max-w-lg mx-auto">
        <ul className="list-disc pb-10 pl-5">
          {items.map((item) => (
            <li
              key={item.id}
              className="pb-5 relative bg-gray-200 w-1/2"
            >
              {item.word}
              <button
                className="absolute top-[10%] right-[5%] w-[20px] h-[20px] bg-red-600 text-white rounded-full flex items-center justify-center"
                onClick={() => handleDelete(item.id)} 
              >
                X
              </button>

                <button
                className="absolute top-[10%] right-[15%] w-1/3 h-[20px] bg-red-600 text-white  flex items-center justify-center"
                onClick={() => handleDelete(item.id)} 
              >
                Edit
              </button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          className="shadow hover:shadow-xl focus:outline-none focus:ring mb-10 max-w-sm px-5 py-5"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          placeholder="Enter a word"
        />

        <button
          className="border bg-gray-500 w-1/3 mx-auto text-white py-2 rounded"
          onClick={handleAdd}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default NewWord;
