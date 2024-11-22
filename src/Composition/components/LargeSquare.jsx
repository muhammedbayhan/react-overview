import React from "react";

const LargeSquare = (props) => {
  return (
    <div class="w-48 h-48 border-2 border-black text-sm bg-amber-700 flex items-center justify-center">
      {props.children}
    </div>
  );
};

export default LargeSquare;
