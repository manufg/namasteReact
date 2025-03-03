import React from "react";
import ReactDOM from "react-dom";

//React.createElement -> React Element Js object -> HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // this is not a html element it is an object

//JSX-HTML like or XML like syntax ( jsx is transpiled before it reaches the JS parcel -> Babel)
//JSX-> React.Create Element -> React Element Js object -> HTMLElement(render)
const jsxHeading = (
  <h1 id="heading" className="Manu">
    {" "}
    Using JSX{" "}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
