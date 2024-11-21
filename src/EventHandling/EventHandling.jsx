import React from "react";

const EventHandling = () => {
  //onclick, onchange, onsubmit, onfocus, onblur,
  //preventDefault, stopPropagation,
  return (
    <>
      <div>
        <h1>React</h1>
        <button onClick={() => alert("Hello")}>Click Me</button>

        <input
          className="border-2"
          type="text"
          onChange={(e) => console.log(e.target.value)}
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form Submitted");
          }}
        >
          <input className="border-2" type="text" />
          <button type="submit">Submit</button>
          <input
            className="border-2"
            type="text"
            onFocus={() => console.log("Focus")}
          />
          <input
            className="border-2"
            type="text"
            onBlur={() => console.log("Blur")}
          />
        </form>

        <div
          className="border-2"
          onClick={() => {
            console.log("Div Clicked");
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("Button Clicked");
            }}
          >
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default EventHandling;
