import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import HomePage from "../pages/Home";

import { Explore } from "../pages/Explore";
import { RequireAuth } from "../features/RequireAuth";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};
