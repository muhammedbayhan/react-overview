import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="Muhammed" body="Bayhannn" />
      <Post author="Mehmet" body="Arif Bayhan" />
    </ul>
  );
};
export default PostList;
