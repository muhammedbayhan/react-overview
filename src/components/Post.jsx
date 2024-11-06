const Post = (props) => {
  return (
    <div>
      <p>{props.author ?? "EMPTY"}</p>
      <p>{props.body ?? "EMPTY"}</p>
    </div>
  );
};

export default Post;
