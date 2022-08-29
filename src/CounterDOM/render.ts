/* render.ts */

/* IMPORT TYPES/INTERFACES */
import { CounterElement, CounterDOMElement, CounterDOMTextElement } from "../Types/types";

/*
    Interface: takes a CounterElement and element on the DOM (usually a parent div with an id "app"), then transforms that
        CounterElement into a DOM element alongside it's child elements. Once transformed, it adds those elements to the DOM.
*/
export function render(element: CounterElement, container: CounterDOMElement): void {
    // We start by creating a DOM element using the Counter Element's type.
    const dom: CounterDOMElement | CounterDOMTextElement = element.type === "TEXT" ? document.createTextNode("") : document.createElement(element.type);

    // Next we add props (excluding children) if they are there.
    if (element.elementProps != null) {
        const isProperty = (key: any) => key !== "children";
        const props = element.elementProps;
        Object.keys(props)
            .filter(isProperty)
            .forEach(function(name) {
                if (dom instanceof HTMLElement) {
                    dom[name] = props[name];
                } else {
                    dom[name] = props[name];
                }
            });
    }

    // We recursively transform child elements (grandchildren, etc) into DOM elements.
    if (element && element.elementProps && element.elementProps.children && dom instanceof HTMLElement) {
        element.elementProps.children.forEach(function(child: CounterElement) {
            render(child, dom);
        });
    }

    console.log("Last, but not least. We're going to append this sucker!");
    container.append(dom);
}