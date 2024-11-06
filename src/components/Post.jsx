const Post = () => {
  const names = ["Muhammed", "Mehmet"];
  const chooseName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chooseName}</p>
      <p>React.js is awesome</p>
    </div>
  );
};

export default Post;
