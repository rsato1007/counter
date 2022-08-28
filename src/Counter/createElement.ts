/*
    Counter emulation of React.createElement which allows JSX compatiibilty.
*/

// type propsType = propsObject | null;

// // We need to rewrite this, but this will be fine for now.
// type childrenType = CounterElement[];
// // What our CounterElement should contain.
// export interface CounterElement {
//     type: string,
//     props: propsType
// }

// // We want our props to be flexible since they techincally can house anything.
// interface propsObject {
//     [key: string]: boolean | string | number | object | [],
//     children: childrenType
// }

// export const createElement = (type: string, props: propsType, ...children: childrenType): CounterElement => {
//     return {
//         type: type,
//         props: {
//             ...props,
//             children,
//         }
//     }
// }

// Let's revist createElement again
// Here we attempt to determine what a Counter Element looks like.

interface CounterElement {
    type: string
}

interface propsInput {
    [key: string]: any
}

// In order to utilize the arguments object, we must use function declaration syntax.
export function createElement (elementType: string, props: propsInput | null, ...children: any[]): CounterElement {
    const elementProps = {};
    if (props) {

    }

    console.log(arguments.length);
    return {
        type: elementType
    }
}