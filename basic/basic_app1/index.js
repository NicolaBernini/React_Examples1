// NOTE: Import React
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

///////////// REACT APP LOGIC /////////////
// The goal is to associate the App Logic to a JSX App Tag which can be associated to an HTML Element as explained at the end of the page
/**
 * @brief This is a very straightforward way to define a JSX App Tag
 * @note The rendering logic is defined in the function return value
 */
function App() {
  return <h1>Test</h1>;
}

/**
 * @brief This is an OOP compliant way to define a React Component
 * @note The constructor() logic is related to the Object State Management
 * @note The rendering logic is defined in the render() method
 */
class Test1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nikola",
      description: "Test Description"
    };
    this.event1 = this.event1.bind(this);
  }

  // NOTE: The rendering logic which is state dependent 
  render() {
    return (
      <div>
        <h1>Hi from {this.state.name}</h1>
        <button onClick={this.event1}>Click me</button>
      </div>
    );
  }

  event1() {
    alert("Event1");
  }
}

/////// CONNECTING REACT APP TO HTML ////////////

// NOTE: It associated the React App Logic to an HTML Content
// ASSUMPTION: An html element with id="root" needs to exist
const rootElement = document.getElementById("root");

//ReactDOM.render(<App />, rootElement);
ReactDOM.render(<Test1 />, rootElement);



