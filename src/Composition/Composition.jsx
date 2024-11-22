import React from "react";
import SmallSquare from "./components/SmallSquare";
import MediumSquare from "./components/MediumSquare";
import LargeSquare from "./components/LargeSquare";

const Composition = () => {
  return (
    <div>
      <p>
        Composition is a way to build components that contain other components.
      </p>
      <div className="flex">
        <div className="flex mx-6">
          <SmallSquare />
          <MediumSquare />
          <LargeSquare />
        </div>

        <div className="mx-6">
          <MediumSquare>
            <SmallSquare />
          </MediumSquare>
        </div>
        <div className="mx-6">
          <LargeSquare>
            <MediumSquare />
          </LargeSquare>
        </div>
        <div className="mx-6">
          <LargeSquare>
            <MediumSquare>
              <SmallSquare />
            </MediumSquare>
          </LargeSquare>
        </div>
      </div>
    </div>
  );
};

export default Composition;
