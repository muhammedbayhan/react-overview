import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        log.console(error);
      });
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <div className="border-2 p-2 m-2" key={comment.id}>
          <h1>{comment.name}</h1>
          <h3>{comment.email}</h3>
          <h3>{comment.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default Axios;
