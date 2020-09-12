import React from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./component/Helloworld"

const Index = () => {
  return <div><HelloWorld/></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
