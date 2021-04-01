import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import { UserStorage } from "./Components/UserContext";
import "./App.css";
import LoginPasswordLost from "./Components/Pages/Login/LoginPasswordLost";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/login/perdeu" element={<LoginPasswordLost />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </section>
  );
}

export default App;
