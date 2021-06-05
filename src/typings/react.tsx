type ReactText = number | string;

type ReactChild = ReactElement | ReactText;
type ReactNode = ReactChild | boolean | null | undefined;

// DOM globle: Element - HTMLElement - HTMLInputElement
interface Element {}

// react: ReactElement - DOMElement - DetailedReactHTMLElement
// 顶级ReactElement 其实就是虚拟DOM
interface ReactElement<P = any, T extends string = string> {
  type: T;
  props: P;
  key: string | null;
}
interface DOMElement<P, T> extends ReactElement {}
interface DetailedReactHTMLElement<P, T> extends DOMElement<P, T> {}

declare function createElement<P, T extends Element>(
  type: string,
  props?: P | null,
  ...children: ReactNode[]
): DetailedReactHTMLElement<P, T>;
