/* 
  <div id ="root">
   <div id =" parent">
    <div id = "child"
     <h1 id ="heading"> nested structure </h1>
     </div>
     </div>
     </div>
*/

const nested = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "h1 tag"),
    React.createElement("h2", { id: "heading1" }, "h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "h1 tag"),
    React.createElement("h2", { id: "heading1" }, "h2 tag"),
  ]),
]);

// this is vry tideous thats why JSX exists.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading); // this is a js object. React.create Element is basically returning an object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nested);
