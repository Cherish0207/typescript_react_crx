import React, { FunctionComponentElement } from "react";
import ReactDOM from "react-dom";

interface Props {
  className: string;
}
let props: Props = { className: "title" /* age: 1 */ };

function Hello(props: Props) {
  return React.createElement<Props, HTMLHeadingElement>("h1", props, "hello");
}
let element: FunctionComponentElement<Props> = React.createElement<Props>(
  Hello,
  props,
  "hello"
);

ReactDOM.render(element, document.querySelector("#root"));

// ReactDOM.render(<h1>hello</h1>, document.querySelector("#root"));
