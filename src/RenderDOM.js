export const CounterDOM = (function() {

    /*
        Documentation:
        -https://programmingwithmosh.com/javascript/react-fiber/
    */
    let nextUnitOfWork = null;

    /*
        Purpose: Since Counter applications have the potential to be massive,
            we want to give the application an opportunity to perform tasks
            in between renders. This function helps allow for that.
    */
    function workLoop(deadline) {
        let shouldYield = false;
        while (nextUnitOfWork && !shouldYield) {
          nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
          shouldYield = deadline.timeRemaining() < 1;
        }
        requestIdleCallback(workLoop);
    }

    requestIdleCallback(workLoop);

    function performUnitOfWork(nextUnitOfWork) {
    // TODO
    }

    return {
        /*
            Input: (element: output of Counter.createElement)
        */
        render: function(element, container) {
            const dom = element.type == "TEXT"
                ? document.createTextNode("")
                : document.createElement(element.type);
            
            // Arrow function syntax that's short and to the point.
            const isProperty = key => key !== "children";

            // Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
            Object.keys(element.props)
                .filter(isProperty)
                .forEach(name => {
                dom[name] = element.props[name]
            });

            // This is a recursive function for children element.
            element.props.children.forEach(child => {
                this.render(child, dom);
            });

            // Assign element props to the node.

            container.appendChild(dom);
        }
    }
})();