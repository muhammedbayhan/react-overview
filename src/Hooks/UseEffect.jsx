import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const Increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("USEFFECT ONLY");
    //Herzaman çalışır
  });
  useEffect(() => {
    console.log("USEFFECT ARRAY EMPTY");
    //Sayfa ilk açıldığında çalışır dahada çalışmaz
  }, []);

  useEffect(() => {
    console.log("USEFFECT ARRAY COUNT");
    //Count değiştiğinde çalışır
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => Increase()}>+</button>
    </>
  );
};

export default UseEffect;
