/*
    Counter emulation of React.createElement which allows JSX compatiibilty.
*/

interface CounterElement {

}

type propsType = {} | null;

type childrenType = (string|number|object)[];

const createElement = (type: string, props: propsType, ...children: childrenType): CounterElement => {
    return {
        type: type,
        props: {
            ...props,
            children,
        }
    }
}

createElement("div", null);