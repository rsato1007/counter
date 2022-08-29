// 
export interface CounterElement {
    type: string,
    elementProps: any
}

export interface CounterDOMElement extends HTMLElement {
    props?: any,
    [key: string]: any
}

export interface CounterDOMTextElement extends Text {
    [key: string]: any
}