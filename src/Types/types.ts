// A simple type that allows for all basic data types. Added here to reduce code duplicate.
type allSimpleTypesAllowed = string | number | boolean;

// The interface used for the resulting object from createElement
export interface CounterElement {
    type: string,
    // This allows for a variable type
    elementProps: {
        [key: string]: any,
    }
}

// Interface used when transforming counter elements into DOM element.
export interface CounterDOMElement extends HTMLElement {
    props?: any,
    // This allows us to add properties
    [key: string]: any
}

export interface CounterDOMTextElement extends Text {
    [key: string]: any
}