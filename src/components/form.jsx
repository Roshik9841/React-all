import { useState } from 'react';

function App() {
  // State is an array of form objects
  const [forms, setForms] = useState([
    { name: "", email: "", address: "", phone: "", password: "" }
  ]);

  // Update a specific form's field
  function handleChange(index, field, value) {
    const updatedForms = [...forms];
    updatedForms[index] = {
      ...updatedForms[index],
      [field]: value
    };
    setForms(updatedForms);
  }
  
  //for single form  object use garda

  //   function handleChange( field, value) {
  //     setForms((prev)=>({...prev,[field]:value}))
  // }

  // Add a new empty form to the array
  function handleAdd() {
    setForms(prev => [
      ...prev,
      { name: "", email: "", address: "", phone: "", password: "" }
    ]);
  }

  // On submit, log all forms
  function handleSubmit(e) {
    e.preventDefault();
    console.log(forms);
  }

  return (
    <>
      <form
        className="max-w-xl mx-auto mt-10 border-2 border-gray-500 flex flex-col gap-4 p-10"
        onSubmit={handleSubmit}
      >
        {/* Add Form button aligned right */}
        <div className="flex justify-end">
          <button
            type="button"
            className="border border-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition"
            onClick={handleAdd}
          >
            Add Form
          </button>
        </div>

        {forms.map((form, index) => (
          <div key={index} className="border p-4 rounded mb-4 bg-gray-100">
            <h2 className="font-semibold mb-2">Form {index + 1}</h2>
            <input
              className="border focus:outline-none focus:ring w-full p-2 mb-2"
              type="text"
              name="name"
              value={form.name}
              onChange={e => handleChange(index, "name", e.target.value)}
              placeholder="Name"
            />
            <input
              className="border focus:outline-none focus:ring w-full p-2 mb-2"
              type="email"
              name="email"
              value={form.email}
              onChange={e => handleChange(index, "email", e.target.value)}
              placeholder="Email"
            />
            <input
              className="border focus:outline-none focus:ring w-full p-2 mb-2"
              type="text"
              name="address"
              value={form.address}
              onChange={e => handleChange(index, "address", e.target.value)}
              placeholder="Address"
            />
            <input
              className="border focus:outline-none focus:ring w-full p-2 mb-2"
              type="text"
              maxLength="10"
              name="phone"
              value={form.phone}
              onChange={e => handleChange(index, "phone", e.target.value)}
              placeholder="Phone"
            />
            <input
              className="border focus:outline-none focus:ring w-full p-2"
              type="password"
              name="password"
              value={form.password}
              onChange={e => handleChange(index, "password", e.target.value)}
              placeholder="Password"
            />
          </div>
        ))}

        <button
          type="submit"
          className="border w-1/3 mx-auto py-2 rounded hover:bg-gray-500 hover:text-white cursor-pointer"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
