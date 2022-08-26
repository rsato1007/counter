// VirtualDOM.js
/*
    TODO List:
    -Recreate JSX and React.createElement.
    -Learn how the virtual DOM is created and recreate that.
*/

/*
    Let's determine how JSX works under the hood.
*/

/*
    How do functional components work?
    Functional componets look like this under the hood:
    -> This:
        function Greet() {
            return <h1>Hello World!</h1>
        }
    -> Becomes this:
        function Greet() {

        }
*/

export const Counter = (function() {
    function createTextElement(text) {
        return {
            type: "TEXT",
            props: {
              nodeValue: text,
              children: [],
            },
        }
    }
    return {
        /*
        Documentation Worth Reading:
        -https://www.telerik.com/blogs/how-jsx-react-works-under-hood#:~:text=JSX%20stands%20for%20JavaScript%20syntax,it%20returned%20from%20a%20component.

        Input: (string, object || null, arrary || string)

        Output: object

        Current: let's start simple. The only children the createElement should take is 
            a string of the text inside the element.
        */
        createElement: function(type, props, ...children) {
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
    }
})();