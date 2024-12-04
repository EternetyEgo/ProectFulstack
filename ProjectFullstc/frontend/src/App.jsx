import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./components/Sign";
import Hero from "./components/Hero";
import Update from "./components/update";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/sign" element={<Sign/>}></Route>
      <Route path="/hero" element={<Hero/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route>
    </Routes>
  );
}
