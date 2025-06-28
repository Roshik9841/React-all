import { useState } from "react";

function NewWord() {
  const [word, setWord] = useState("");
  const [items, setItems] = useState([]);

  const [editId, setEditId] = useState(null);
  const [editWord, setEditWord] = useState("");

  function handleAdd() {
    if (word.trim() === "") return;
    setItems([...items, { word, id: Math.random() }]);
    setWord("");
  }

  function handleDelete(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleEdit(id, word) {
    setEditId(id);                  //edit garna lako id = word ko id
    setEditWord(word);               //editWord = aagadi reakheko word
  }

  function handleSave() {       
    setItems((prev) =>
      prev.map((item) =>                              //yeta sabaii item haru map garxa
        item.id === editId ? { ...item, word: editWord } : item                  //ani item id ra edit id ssame xa bhaye purano word lai editWord le replace gardini
      )
    );
    setEditId(null);
    setEditWord("");
  }

  return (
    <div className="flex flex-col max-w-xl mx-auto">
      <ul className="list-disc pb-10 pl-5">
   
        {items.map((item) => (
          <li
            key={item.id}
            className="pb-5 bg-gray-200 w-full flex justify-between list-disc  gap-2 p-2 rounded"
          >  
          {/* yedi editId ra item.id same xa bhaye input dekhauni ani editWord change garni */}
            {editId === item.id ? (
              <input
                className="flex-grow px-2 py-1"
                value={editWord}
                onChange={(e) => setEditWord(e.target.value)}
              />
            ) : (
              <span className="break-words max-w-[60%]">{item.word}</span>
            )}

            <div className="flex gap-1">
              <button
                className="w-[30px] h-[30px] bg-red-600 text-white rounded-full flex items-center justify-center"
                onClick={() => handleDelete(item.id)}
              >
                X
              </button>

              {editId === item.id ? (
                <button
                  className="px-2 h-[30px] bg-green-600 text-white rounded"
                  onClick={handleSave}          
                  // yeta pani edit id ra item id same xa bhaye save button aauxa ani click garesi handleSave ma janxa
                >
                  Save
                </button>
              ) : (
                <button
                  className="px-2 h-[30px] bg-blue-600 text-white rounded"
                  onClick={() => handleEdit(item.id, item.word)}       //edit ma click garesi
                >
                  Edit
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <input
        type="text"
        className="shadow hover:shadow-xl focus:outline-none focus:ring mb-10 w-full px-5 py-5"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />

      <button
        className="border bg-gray-500 w-1/3 mx-auto text-white py-2 rounded"
        onClick={handleAdd}
      >
        Submit
      </button>
    </div>
  );
}

export default NewWord;
