import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import HomePage from "../pages/Home";
import { Navigation } from "../components/Navigation";
import { Explore } from "../pages/Explore";

export const AppRoutes = () => {
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
};
