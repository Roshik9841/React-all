import { useState } from 'react';
import NewWord from "./components/newWord"
import {BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewWord/>}/>

    </Routes>
    
    </BrowserRouter>

   
  );
}

export default App;
