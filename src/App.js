/*mport { useState } from "react";

function App() {
  // declare state
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;*/
//use state count//



/*import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <h1>Welcome to React Props Example</h1>
      <Greeting name="Hilawit" age={20} />
      <Greeting name="Abebe" age={25} />
    </div>
  );
}

export default App;*/
//props//


/*import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello!");

  // Event handler function
  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Event Handling Example</h1>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;*/
//event handling button click//

/*import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  // Event handler for input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Input Event Handling Example</h1>

      <input 
        type="text" 
        placeholder="Type your name..." 
        value={name} 
        onChange={handleChange} 
      />

      <p>Hello, {name}!</p>
    </div>
  );
}

export default App;*/
//event handling input//

/*function App() {
  const name = "Hilawit";
  const age = 20;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Your age is {age}</p>
      <button>Click Me</button>
    </div>
  );
}

export default App;*/
//jsx code//
/*import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Class Component Example</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
      </div>
    );
  }
}

export default App;
import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";



function App() {
  return (
    <div>
  
      <Home />

  
      <About />
    
      <Navbar />
      

      <Skill />
    

      <Projects />

    
   
      <Contact />
     
    
      <Footer />
      
 
      

    
    
    </div>
  );
}

export default App;
import { useState } from "react";
import Login from "./Login";
import Logincss from  "./Login.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome to Dashboard 🎉</h2>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;*/
//login page//

/*import React from "react";
import Fruit from "./Fruit";
function App() {
  return (
    <div>
  
      < Fruit/>
      
    </div>
  );
}
  //fruit by function component//


class App extends from components{
  render(){
    return(
      
      <div>
        <h1>fruit list</h1>
        <Fruit/>
      </div>
    );
  }
}
  
export default App;*/
//fruit by class component//

 /* import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default App;*/
// form by use state//
/*import React, { useState } from "react";
import InputField from "./InputField";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Update form data from children
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate form
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Registered User:", formData);
      alert("Registration Successful!");
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default App;
*/
//form validation by usestate//
/*import React from "react";
import UserList from "./UserList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>User List App</h1>
      <UserList />
    </div>
  );
}

export default App;*/
/*import React from "react";
import "./App.css"; // styles
 // example component
import Home from "./Homegym";

function App() {
  return (
    <div className="App">
      
      <Homegym />
    </div>
  );
}

export default App;*/
/*class counter extends component{
  state={
    count:0,
    tags=["tag1","tag2"]};
    rendertags(){
      if(this.state.tags.length===0)return<p>there is no tags</p>//consitional rendering

   return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>}//renderlist
    render(){
      return(
        <div>
          {this.state.tags.length===0 &&"please creat a new tag1"}
          {this.rendertags()}


        </div>
      );
    }

export default counter;
class counter extends component{
  state={
    count:0
  };
  handleincrement=()=>{
    this.setstate({count:this.state.count++});
  };//updating state
    console.log("increment clicked",this);//handle event binding by arrow
  };
render(){
  return(
    <button onClick={this.handleincrement}classname="btn">increment</button>
  );
}
export default counter;*/
/*import React from "react";
import Homegym from "./Homegym";
import Navgym from "./Navgym";
import Aboutgym from "./Aboutgym";
import Gallarygym from "./Gallarygym";
import Contactgym from "./Contactgym";


function App() {
  return (
    <div>
      <Homegym />
    <Aboutgym />
     <Gallarygym />
       <Contactgym />
          
        <Navgym />
            <section id="home" style={{ height: "100vh" }}></section>
      <section id="about" style={{ height: "100vh" }}></section>
      <section id="gallery" style={{ height: "100vh" }}></section>
      <section id="blog" style={{ height: "100vh" }}></section>
      <section id="contact" style={{ height: "100vh" }}></section>
        </div>
  );
    
}
export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>

      <Navbar />

   
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;