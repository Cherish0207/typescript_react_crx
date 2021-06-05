import React, { DetailedReactHTMLElement } from "react";
import ReactDOM from "react-dom";

interface Props {
  className: string;
}
let props: Props = { className: "title" /* age: 1 */ };
let element: DetailedReactHTMLElement<Props, HTMLHeadingElement> =
  React.createElement<Props, HTMLHeadingElement>("h1", props, "hello");

ReactDOM.render(element, document.querySelector("#root"));

// ReactDOM.render(<h1>hello</h1>, document.querySelector("#root"));
