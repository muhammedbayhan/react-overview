import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <NewPost
        handleBodyChange={handleBodyChange}
        handleAuthorChange={handleAuthorChange}
      />
      <ul className={classes.posts}>
        <Post author={author} body={body} />
        <Post author="Mehmet" body="Arif Bayhan" />
      </ul>
    </>
  );
};

export default PostList;
