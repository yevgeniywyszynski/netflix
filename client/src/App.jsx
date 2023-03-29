import React from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watcher from "./Pages/Watcher/Watcher";
import FavoriteList from "./Pages/FavoriteList/FavoriteList";
import ProtectedRoute from "./utils/PotectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Home />} path="/home" exact />
          <Route path="/watcher" element={<Watcher />} />
          <Route path="/series" element={<Home />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/new" element={<Home />} />
          <Route path="/mylist" element={<FavoriteList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
