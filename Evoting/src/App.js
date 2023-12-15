import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from "./pages/Welcome";
import AuthPage from "./pages/AuthPage";
import OtpPage from "./pages/OtpPage";
import UserPage from "./pages/UserPage";
import Admin from "./pages/AdminPage/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/userauthentication" element={<AuthPage/>} />
        <Route path="/otpVerification" element={<OtpPage/>} />
        <Route path="/userpage/*" element={<UserPage />}>
          <Route path=""/>
          <Route path="dashboard"/>
          <Route path="guidelines"/>
          <Route path="vote"/>
          <Route path="voteboard"/>
          <Route path="submit"/>
          <Route path="contact"/>
          <Route path="result"/>
        </Route>
        <Route path="/admin/*" element={<Admin/>}>
          <Route path=""/>
          <Route path="home"/>
          <Route path="result"/>
          <Route path="addCandidate"/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
