/*
    Purpose: renders the virtual DOM to the actual DOM.
*/

import { CounterElement } from "../Counter/createElement";

 export const render = (counterElement: CounterElement, containerNode: HTMLElement): void => {
    // What does render do in React exactly?
    // We pass in a counterElement that's rendered as actual 
    // Start by creating the virtual DOM
    const virtualDOM: HTMLElement | Text = counterElement.type == "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(counterElement.type)

    // A couple things happening here:
    // (1) We add the props to our DOM element.
    // (2) We check to ensure prop types exist
    if (counterElement.props != null && virtualDOM instanceof HTMLElement) {
        const isProperty = (key: any) => key !== "children";
        const props = counterElement.props;
        Object.keys(props)
        .filter(isProperty)
        .forEach(name => {
            // Need to narrow type on vritualDOM
            virtualDOM[name] = props[name];
        })
    }
}