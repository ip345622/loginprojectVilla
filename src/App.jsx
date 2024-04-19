import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import React,{ useContext, useEffect, useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Login,Register,Home } from "./components";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Login/> },
    { path: "/register", element: <Register/> },
  ]);
  return routes;
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register/>} />,
      <Route path="/home" element={<Home/>} />,
    </Routes>
  </BrowserRouter>
  )
}

export default App
