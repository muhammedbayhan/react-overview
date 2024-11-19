import React, { useContext } from "react";
import UserCard from "./UserCard";
import { UserContext } from "../contexts/UserContext";

const UserList = () => {
  const context = useContext(UserContext);
  return (
    <div>
      {context.users.map((user) => (
        <div>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
