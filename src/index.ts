/*
    Current Task: revamp render.

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