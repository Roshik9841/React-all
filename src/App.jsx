import { useState } from 'react';
import NewWord from "./pages/newWord"
import Api from './pages/Api';
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
