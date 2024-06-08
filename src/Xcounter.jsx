import { useState } from "react";

function Xcounter() {
    // Initialize the counter state with an initial value of 0
    let [counter, setCounter] = useState(0);

    // Function to increment the counter value by 1
    function increment() {
        setCounter(counter + 1);
    }

    // Function to decrement the counter value by 1
    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <p>Count: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Xcounter;
