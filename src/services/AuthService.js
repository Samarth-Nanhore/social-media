import axios from "axios";

const postLoginData = (username, password) =>
  axios.post("/api/auth/login", {
    username,
    password,
  });

export { postLoginData };
