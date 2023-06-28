import axios from "axios";

const getAllPostsFromServer = () => axios.get("/api/posts");

const getAllPostsOfUserFromServer = (username) =>
  axios.get(`/api/posts/user/${username}`);

export { getAllPostsFromServer, getAllPostsOfUserFromServer };
