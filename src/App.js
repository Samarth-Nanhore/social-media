import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
