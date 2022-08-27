function createTextElement(text) {
    return {
        type: "TEXT",
        props: {
          nodeValue: text,
          children: [],
        },
    }
}

/*
    Documentation Worth Reading:
    -https://www.telerik.com/blogs/how-jsx-react-works-under-hood#:~:text=JSX%20stands%20for%20JavaScript%20syntax,it%20returned%20from%20a%20component.

    Input: (string, object || null, arrary || string)

    Output: object

    Current: let's start simple. The only children the createElement should take is 
        a string of the text inside the element.
*/
const createElement = (type, props, ...children) => {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object"
                    ? child
                    : createTextElement(child)
            ),
        },
    }
}