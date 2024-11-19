import React, { useState } from "react";
import UserList from "./components/UserList";
import { UserContext } from "./contexts/UserContext";

const UseContext = () => {
  const data = [
    { id: 1, name: "John", age: 25, color: "red" },
    { id: 2, name: "Doe", age: 30, color: "blue" },
    { id: 3, name: "Smith", age: 35, color: "green" },
  ];
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, color: color } : user))
    );
  };

  return (
    <UserContext.Provider value={{ users: users, changeColor: changeColor }}>
      <div>
        <UserList />
      </div>
    </UserContext.Provider>
  );
};

export default UseContext;
