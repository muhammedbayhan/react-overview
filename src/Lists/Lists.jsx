import React from "react";

const Lists = () => {
  const users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 30 },
    { id: 3, name: "Jane", age: 40 },
    { id: 4, name: "Smith", age: 50 },
  ];

  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {users.map((user) => (
          <div className="border-2 w-32">
            <ul key={user.id}>
              <li>{user.name} </li>
              <li>{user.age} </li>
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
