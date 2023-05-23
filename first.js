import React from "react";
import ReactDOM from "react-dom";
import Red from "/red.js";
const First = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Red />
    </div>
  );
};

export default First;
ReactDOM.render(<First />, document.getElementById('root'));