import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import { UserStorage } from "./Components/UserContext";
import LoginPasswordLost from "./Components/Pages/Login/LoginPasswordLost";
import User from "./Components/Pages/User/User";
import ProtectedRoute from "./Helper/ProtectedRoute/ProtectedRoute";
import Photo from "./Components/Pages/Photo/Photo";
import UserProfile from "./Components/Pages/User/UserProfile";
import ErrorPg from "./Components/Layout/ErrorPg/ErrorPg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="login/perdeu" element={<LoginPasswordLost />} />
              <Route path="*" element={<ErrorPg />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
