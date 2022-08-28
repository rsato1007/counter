/*
    Purpose: renders the virtual DOM to the actual DOM.
*/

// // Extension of the HTMLElement to allow us to dyanmically add Counter Element properties to our
// // actual DOM object.
// // Revist to see if we can make this interface more flexible.
// interface VDOMElement extends HTMLElement {
//     props?: any,
// }

// import { CounterElement } from "../Counter/createElement";

//  export const render = (counterElement: CounterElement, containerNode: HTMLElement): void => {
//     // What does render do in React exactly? We pass in a counterElement that's 
//     // rendered as actual DOM element(s).

//     // Start by creating the virtual DOM
//     const virtualDOM: VDOMElement | Text = counterElement.type == "TEXT_ELEMENT"
//         ? document.createTextNode("")
//         : document.createElement(counterElement.type)

//     // A couple things happening here:
//     // (1) We add the props to our DOM element.
//     // (2) We check to ensure prop types exist
//     if (counterElement.props != null && virtualDOM instanceof HTMLElement) {
//         const isProperty = (key: any) => key !== "children";
//         const props = counterElement.props;
//         Object.keys(props)
//         .filter(isProperty)
//         .forEach(name => {
//             virtualDOM.props[name] = props.name;
//         })
//     }

//     // We make this a recursive function that transform child counter elements
//     // to DOM elements.
//     // NOTE: the conditional is messy, but in order to satisfy TypeScript, this is the
//     // current solution.
//     if (counterElement && counterElement.props && counterElement.props.children && virtualDOM instanceof HTMLElement) {
//         counterElement.props.children.forEach(child => {
//             render(child, virtualDOM);
//         });
//     }

//     containerNode.appendChild(virtualDOM);
// }