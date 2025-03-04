import React from "react";
import ReactDOM from "react-dom";

//React.createElement -> React Element Js object -> HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // this is not a html element it is an object

//JSX-HTML like or XML like syntax ( jsx is transpiled before it reaches the JS parcel -> Babel)
//JSX-> React.Create Element -> React Element Js object -> HTMLElement(render)
const jsxHeading = (
  <h1 id="heading" className="Manu">
    Using JSX
  </h1>
);

//React components
//Class based components - OLD
//Functional components - NEW

//React functional component

const HeadingComponent0 = () => {
  //same  but this is beeter syntax with return
  return <h1> Namaste Manu </h1>;
};

const HeadingComponent1 = () => (
  //same
  //COMPONENT
  <h1 className="heading"> Namste Manu </h1>
);

const HeadingComponent2 = () => <h1> Namste Manu </h1>; //Both syntax are for the same thing

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent0 />);
