import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      {/* UseState Nedir
        useState, fonksiyonel bileşenlerde durumları (state) yönetmek için
        kullanılır. useState fonksiyonu, bir dizi döndüren bir fonksiyondur. Bu
        dizi, bir değişken ve bu değişkeni güncellemek için kullanılan bir
        fonksiyon içerir.
      */}

      <div>
        <h1 className="text-2xl"> {count}</h1>
        <button
          className="px-4 bg-green-300 rounded-xl"
          onClick={() => increase()}
        >
          +
        </button>
        <button
          className="px-4 bg-red-300 rounded-xl"
          onClick={() => decrease()}
        >
          -
        </button>
      </div>
    </>
  );
};

export default UseState;
