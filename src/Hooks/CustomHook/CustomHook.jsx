import React, { useState } from "react";
import { useInput } from "./hooks/useInput";
const CustomHook = () => {
  const [inputs, setInputs] = useInput({ name: "", age: "", email: "" });

  return (
    <div className="flex flex-col">
      <input
        className="border-2"
        name="name"
        value={inputs.name}
        onChange={setInputs}
        placeholder="Name"
      />
      <input
        className="border-2"
        name="age"
        value={inputs.age}
        onChange={setInputs}
        placeholder="Age"
      />
      <input
        className="border-2"
        name="email"
        value={inputs.email}
        onChange={setInputs}
        placeholder="Email"
      />
    </div>
  );
};

export default CustomHook;
