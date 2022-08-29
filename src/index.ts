/*
    Current Task: Now for Reconilation, fiber trees, etc.
    --In terms of the next step, this might be a good place to start:
    https://www.velotio.com/engineering-blog/react-fiber-algorithm 
    -Let's review what the reconciler is.

    Additional Notes:
    - JSX: here's how the following is interpretted by JSX:
    <div>
        <p name="Robert Sato"> Hello World </p>
    </div>

    becomes:
    Counter.createElement(
        "div", 
        null, 
        Counter.createElement("p", {name: "Robert Sato"}, "Hello World") // This is our child element, but notice it's a recursive function call.
    );
*/

import { Counter } from "./Counter";
import { CounterDOM } from "./CounterDOM";

const elCounter = Counter.createElement("div", null, Counter.createElement("p", {name: "Robert Sato"}, "Hello World"));

CounterDOM.render(elCounter, document.getElementById('app')!);