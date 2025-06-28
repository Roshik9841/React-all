import { useState } from 'react';
import NewWord from "./components/newWord"
import Api from './components/Api';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Api/>}/>

    </Routes>
    
    </BrowserRouter>

   
  );
}

export default App;
