const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading); // this is a js object. React.create Element is basically returning an object.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
