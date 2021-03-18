import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="login">
            <Login />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
