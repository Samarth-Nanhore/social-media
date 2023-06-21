import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      const { foundUser, encodedToken } = response.data;
      // Store encodedToken in localStorage
      localStorage.setItem("token", encodedToken);
      // Store foundUser in localStorage
      localStorage.setItem("foundUser", JSON.stringify(foundUser));
      setUsername(""); // Clear username input
      setPassword(""); // Clear password input
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (username !== "" && password !== "") {
      handleLogin();
    }
  }, [username, password]);

  const handleGuestLogin = () => {
    setUsername("harrypotter");
    setPassword("harrypotter123");
  };

  return (
    <>
      <LoginContext.Provider
        value={{
          handleUsernameChange,
          handlePasswordChange,
          handleLogin,
          username,
          password,
          handleGuestLogin,
        }}
      >
        {children}
      </LoginContext.Provider>
    </>
  );
};
