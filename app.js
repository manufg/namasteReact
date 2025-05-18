import React from "react";
import ReactDOM from "react-dom";



/**
 * 
 * Header 
 *   - Logo
 *  - Nav Items
 * * Body
 *   - Search bar
 *   - Restaurant Container
 * *     - Restaurant Card
 * Footer
 *    -Copyright
 *   - Links
 * *   - Address
 * *   - Contact
 * *   - Social Media Links
 */

//React.createElement -> React Element Js object -> HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // this is not a html element it is an object

//JSX-HTML like or XML like syntax ( jsx is transpiled before it reaches the JS parcel -> Babel)
//JSX-> React.Create Element -> React Element Js object -> HTMLElement(render)
// starting and closing bracket forms the start and end of JSX code 
//this is a react element
const JsxHeading =  (
  <h1 id="heading" className="Manu">
    Using JSX
  </h1>);


//without bracket also fine 
const JsxHeading1 =  
  <h1 id="heading" className="Manu"> Using JSX </h1>




//React components
//Class based components - OLD
//Functional components - NEW

//React functional component: an arrow function that rturns some JSX 

const Title = () => (
  
  <h1 className="heading" tabIndex="5">
    Namste Manu learning
  </h1>


);

const HeadingComponent0 = () => {
  //same  but this is beeter syntax with return When you need to add logic before returning JSX: eg:
  const name = "doodle";
  return <h1> Namaste {name} </h1>;
  //return <h1> Namaste Manu </h1>;
};


const value =100;
const HeadingComponent1 = () => (
  //same
  //COMPONENT
  // Any js expression inside {} will be evaluated and rendered 
  // using react element inside a component
  // <Title/> or <Title></Title>
  <div id="container">
    <h2>{value}</h2> 
    <Title/> 
    <Title></Title>
    {Title()}
      <h1 className="heading" tabIndex="5">
    Namste Manu
  </h1>
  </div>

);



// HeadingComponent0 and HeadingComponent2 are the same thing

const HeadingComponent2 = () => <h1 classsName= "heading"> Namste Manu one line  </h1>; //Both syntax are for the same thing
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1/>);
