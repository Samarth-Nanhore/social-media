import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginContextProvider } from "../src/contexts/loginContext";
import { PostContextProvider } from "../src/contexts/PostContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <LoginContextProvider>
          <PostContextProvider>
            <App />
          </PostContextProvider>
        </LoginContextProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
