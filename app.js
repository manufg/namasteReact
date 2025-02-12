import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // this is not a html element it is an object

//JSX-HTML like or XML like syntax
const jsxHeading = (
  <h1 id="heading" className="Manu">
    {" "}
    Using JSX{" "}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
