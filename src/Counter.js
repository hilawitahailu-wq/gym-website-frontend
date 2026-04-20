import { useState } from "react";

function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrease</button>
    </div>
  );
}

export default Counter;
