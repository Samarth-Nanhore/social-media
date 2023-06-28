// import { Navbar } from "../components/Navbar";
// import { Sidebar } from "../components/Sidebar";
// import { Navigation } from "../components/Navigation";
import { useState, useEffect } from "react";
import { DisplayPost } from "../components/DisplayPost";
import { getAllPostsOfUserFromServer } from "../services/PostService";
import Loader from "../components/Loader";

const HomePage = () => {
  const [userpost, setUserPost] = useState([]);

  const userName = "harrypotter"; // static username from database
  useEffect(() => {
    getAllPostsOfUserFromServer(userName)
      .then((response) => {
        const posts = response.data.posts;
        setUserPost(posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  console.log(userpost);

  return (
    <div>
      {userpost.length === 0 ? (
        <Loader />
      ) : (
        userpost.map((post, index) => {
          return <DisplayPost key={index} {...post} />;
        })
      )}
    </div>
  );
};

export default HomePage;
