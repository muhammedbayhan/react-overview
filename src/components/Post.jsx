import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author ?? "EMPTY"}</p>
      <p className={classes.text}> {props.body ?? "EMPTY"}</p>
    </div>
  );
};

export default Post;
