import {Counter} from "./VirtualDOM";
import {CounterDOM} from "./RenderDOM";

console.log(Counter.createElement ('div', null, 'Hello World'));

CounterDOM.render(Counter.createElement('div', null, 'Hello World'), document.getElementById("app"));