import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav style={{ textAlign: "center" }}>
        <NavLink to={"/"}>Home</NavLink>||
        <NavLink to={"/explore"}>Explore</NavLink>||
        <NavLink>Bookmark</NavLink>||
        <NavLink>Profile</NavLink>||
        <NavLink to={"/login"}>Login</NavLink>
      </nav>
    </>
  );
};
