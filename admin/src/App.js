import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NotFoundPage from "./component/NotFoundPage";

export default function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="*" element={ <NotFoundPage/> } />
        </Routes>
      </Router>
    </>
  )
}
