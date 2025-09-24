import { useState } from "react";
import NewWord from "./pages/newWord";
import Api from "./pages/Api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Timeline from "./components/TimeLine";

export const ApiDataContext = React.createContext();
function App() {
  const [data, setData] = useState(null);
  const value ={data,setData}
  return (
    <ApiDataContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </ApiDataContext.Provider>
  );
}

export default App;
