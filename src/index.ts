/*
    Documentation:
    - A starting tutorial for recreating React: https://pomb.us/build-your-own-react/ 
    - Good resource on reconcilation: https://reactjs.org/docs/reconciliation.html
    - Deep dive into React Fiber resources: https://github.com/koba04/react-fiber-resources 
    - Another resource on Fiber trees and Scheduler: https://philippspiess.com/scheduling-in-react/ 

    React Concepts:
    - Scheduler
    - Fiber Trees
    - Reconcilation
    - Hooks
    - Commits (updating and deleting nodes)

    Additional Notes:
    - Usage of workloop/scheduler for performing units of work in between each 
    -- Workloop/scheduler allows the browser to perform various things in between each render.

    Current Task: Now for Reconilation, fiber trees, etc.
    --In terms of the next step, this might be a good place to start:
    https://www.velotio.com/engineering-blog/react-fiber-algorithm 
    -Let's review what the reconciler is.

*/

import { Counter } from "./Counter";
import { CounterDOM } from "./CounterDOM";

const elCounter = Counter.createElement("div", null, Counter.createElement("p", {name: "Robert Sato"}, "Hello World"));

CounterDOM.render(elCounter, document.getElementById('app')!);