import { createContext } from "react";
import { useState, useEffect } from "react";
import { postLoginData } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await postLoginData(username, password);
      const { foundUser, encodedToken } = response.data;
      // Store encodedToken in localStorage
      localStorage.setItem("token", encodedToken);
      // Store foundUser in localStorage
      localStorage.setItem("foundUser", JSON.stringify(foundUser));
      setUsername(""); // Clear username input
      setPassword(""); // Clear password input
      navigate("/");
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
