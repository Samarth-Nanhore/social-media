import { useEffect, useState } from "react";
import { getAllPostsFromServer } from "../services/PostService";
import { DisplayPost } from "../components/DisplayPost";
import { Navigation } from "../components/Navigation";
import Loader from "../components/Loader";

export const Explore = () => {
  const [allpost, setAllPost] = useState([]);

  useEffect(() => {
    getAllPostsFromServer()
      .then((response) => {
        const posts = response.data.posts;
        setAllPost(posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  console.log(allpost);

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Navigation />
      </div>

      {allpost.length === 0 ? (
        <Loader />
      ) : (
        allpost.map((post, index) => {
          return <DisplayPost key={index} {...post} />;
        })
      )}
    </>
  );
};
