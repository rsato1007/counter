/*
    Counter emulation of React.createElement which allows JSX compatiibilty.
*/

import {CounterElement} from "../Types/types";

// I'll need to adjust the props later in case we want it to accept more
// data types.
interface propsInput {
    [key: string]: string | number | boolean
}

// In order to utilize the arguments object, we must use function declaration syntax.
export function createElement (elementType: string, props: propsInput | null, ...children: any[]): CounterElement {
    const elementProps: {[key: string]: any} = {};
    
    // Checks if function was passed props and add them to the Counter ELement.
    if (props != null) {
        for (const propName in props) {
            elementProps[propName] = props[propName];
        }
    }

    // If children props exist, we add them as well.
    if (arguments.length > 2) {
        const childrenArray: any[] = [];
        for(let i = 2; arguments.length > i; i++) {
            // We also need to check if the child is text an actual Counter Element. This ensures
            // we don't try to render text as a DOM element.
            if (typeof arguments[i] === "object") {
                childrenArray.push(arguments[i]);
            } else {
                childrenArray.push({type: "TEXT", elementProps: {nodeValue: arguments[i]}});
            }
        }
        elementProps.children = childrenArray;
    }

    return {
        type: elementType,
        elementProps: elementProps
    }
}