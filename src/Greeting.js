/*function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Your age is {props.age}</p>
    </div>
  );
}

export default Greeting;*/
function Greeting({ name }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid green" }}>
      <h2>Hello, {name}!</h2>
      <p>Welcome to our mini app!</p>
    </div>
  );
}

export default Greeting;

