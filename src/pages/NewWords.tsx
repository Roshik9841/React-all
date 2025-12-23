import { useState } from "react";

type Item = {
  id: number;
  label: string;
  completed: boolean;
};

export const NewWords = () => {
  const [word, setWord] = useState<string>("");
  const [item, setItem] = useState<Item[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!word.trim()) return;

    if (editId !== null) {
      setItem((prev) =>
        prev.map((menu) =>
          menu.id === editId ? { ...menu, label: word } : menu
        )
      );
      setEditId(null);
    } else {
      setItem((prev) => [...prev, { id: Math.random(), label: word, completed: false }]);
    }

    setWord("");
  };

  const handleDelete = (id: number) => {
    setItem((prev) => prev.filter((menu) => menu.id !== id));
  };

  const handleEdit = (id: number) => {
    const menuToEdit = item.find((menu) => menu.id === id);
    if (menuToEdit) {
      setEditId(id);
      setWord(menuToEdit.label);
    }
  };

  const toggleCompleted = (id: number) => {
    setItem((prev) =>
      prev.map((menu) =>
        menu.id === id ? { ...menu, completed: !menu.completed } : menu
      )
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">{editId !== null ? "Update" : "Add"}</button>
      </form>

      <ul>
        {item.map((menu) => (
          <li
            key={menu.id}
            onClick={() => toggleCompleted(menu.id)}
            style={{
              textDecoration: menu.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {menu.label}{" "}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(menu.id);
              }}
            >
              Edit
            </button>{" "}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(menu.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
