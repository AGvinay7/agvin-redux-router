import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/projects' element={<Dashboard/>}/>
    <Route path='/*' element={<h3>Page not found</h3>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;



