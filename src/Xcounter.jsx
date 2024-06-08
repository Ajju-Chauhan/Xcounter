import { useState } from "react";


function Xcounter() {
    let [counter , setCounter] = useState(0)
    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <p>Count : {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
    
}

export default Xcounter;