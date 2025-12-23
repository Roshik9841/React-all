import { useState } from "react";
import NewWord from "./pages/newWord";
import { NewWords } from "./pages/NewWords";
import Api from "./pages/Api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Timeline from "./components/TimeLine";
import Slidebar from "./pages/Slidebar";
import Cart from "./pages/Cart";
import Navbar from "./components/TimeLine";
import Carousel from "./pages/Carousel";
import Aos from "./pages/Aos";

export const ApiDataContext = React.createContext();
function App() {
  const [data, setData] = useState(null);
  const value ={data,setData}
  return (
    <ApiDataContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewWords/>} />
        </Routes>
      </BrowserRouter>
    </ApiDataContext.Provider>
  );
}

export default App;
