import React from "react";

const MediumSquare = (props) => {
  return (
    <div class="w-24 h-24 border-2 border-black text-xs bg-violet-600 flex items-center justify-center">
      {props.children}
    </div>
  );
};

export default MediumSquare;
