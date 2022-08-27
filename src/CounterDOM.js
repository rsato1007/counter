/*
    Documentation:
        - Commit Phase: https://blog.bitsrc.io/how-react-renders-a-component-on-screen-da97c56caf71
*/
const commitRoot = () => {

}

const render = (element, container) => {
    wipRoot = {
      dom: container,
      props: {
        children: [element],
      },
    }
    nextUnitOfWork = wipRoot;
}

/*
    Documentation:
        - Fiber: https://programmingwithmosh.com/javascript/react-fiber/
*/
let nextUnitOfWork = null;
let wipRoot = null;

/*
    Documentation:
        - Workloop: https://itnext.io/react-performance-tricks-why-is-it-so-fast-6ece8ade9762 
*/
const workLoop = (deadline) => {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        shouldYield = deadline.timeRemaining() < 1;
    }

    // Once there is no more units to work, we can commit the whole
    // fiber tree to the dom.
    if(!nextUnitOfWork && wipRoot) {
        commitRoot();
    }

    requestIdleCallback(workLoop);
}
        
requestIdleCallback(workLoop);
        
// This function creates the DOM.
const createDom = (fiber) => {
    const dom =
        fiber.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(fiber.type);

    const isProperty = key => key !== "children";

    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = fiber.props[name];
        });
        
    return dom;
}

/*
    Purpose: This function is based on React's "virtual DOM" algorithm. As of React 16, the framework uses
        fiber data structure to divide rendering work into mulitple chunks.
    Documentation:
        - https://blog.logrocket.com/deep-dive-react-fiber/
        - Understanding React Fiber Algorithm: https://www.velotio.com/engineering-blog/react-fiber-algorithm 
    Input:
        - Object
    
    Output:
        - 
    
*/
const performUnitOfWork = (fiber) => {
    /*
        By creating fiber.dom, we can keep track of the DOM node.
    */
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }

    // Next, we create a fiber for each element.
    const elements = fiber.props.children;
    let index = 0;
    let prevSibling = null;

    while (index < elements.length) {
        const element = elements[index];

        // Fiber data structure.
        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null,
        };

        // Here we determine if the fiber is a child or sibling.
        if (index === 0) {
            fiber.child = newFiber;
        } else {
            prevSibling.sibling = newFiber;
        }

        prevSibling = newFiber;
        index++;
    }

    // We need to search for the next unit of work.
    if (fiber.child) {
        return fiber.child;
    }
    let nextFiber = fiber;
    while (nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling;
        }
        nextFiber = nextFiber.parent;
    }        
}

module.exports = {
    render
}