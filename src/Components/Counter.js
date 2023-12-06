import { useState } from "react";
function Counter({initialCount=1}) {
    const [count, setCount] = useState(initialCount);

    const increment = (value=1) => {
        setCount(prev => prev + value);
    }

    const decrement = (value=1) => {
        setCount(prev => prev - value);
    }

    return (
      <div>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={() => increment()} className="btn btn-info btn-sm me-2">Increment</button>
        <button onClick={() => decrement()} className="btn btn-success btn-sm">Decrement</button>
      </div>
    );
  }
  
  export default Counter;