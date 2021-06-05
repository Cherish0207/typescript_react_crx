import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

interface Props {
  className: string;
}
interface State {
  id: string;
}
let props: Props = { className: "title" /* age: 1 */ };

class Hello extends React.Component<Props, State> {
  state = {
    id: "cherish",
  };
  render() {
    return React.createElement("h1", props, "hello");
  }
}
let element: ReactElement<Props> = React.createElement<Props>(Hello, props);

ReactDOM.render(element, document.querySelector("#root"));

// ReactDOM.render(<h1>hello</h1>, document.querySelector("#root"));
