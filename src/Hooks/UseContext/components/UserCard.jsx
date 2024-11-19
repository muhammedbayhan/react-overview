import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserCard = ({ user }) => {
  const context = useContext(UserContext);

  return (
    <div>
      <div className="p-2" style={{ background: user.color }}>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Color: {user.color}</p>
        <input
          type="text"
          onChange={(e) => context.changeColor(user.id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserCard;
