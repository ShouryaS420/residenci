import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import ViewDetails from "./components/ViewDetails";
import BrokerNext from "./components/BrokerNext";
import SearchDetails from "./components/SearchDetails";
import ShortList from "./components/ShortList";
import PrivacyPolicy from "./components/PrivacyPolicy.js";
import TermsOfServices from "./components/TermsOfServices.js";
import CodeOfConduct from "./components/CodeOfConduct.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/projects/view-details/:id/:builderID" element={<ViewDetails/>} />
            <Route path="/broker-next" element={<BrokerNext/>} />
            <Route path="/search-details/:localityURI" element={<SearchDetails/>} />
            <Route path="/short-listed/projects" element={<ShortList/>} />
            <Route path="policies/privacy" element={<PrivacyPolicy/>} />
            <Route path="/policies/terms-of-service" element={<TermsOfServices/>} />
            <Route path="/policies/code-of-conduct" element={<CodeOfConduct/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
