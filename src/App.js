import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "boss", lastName: "" },
      company: "localhost",
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Johnny", lastName: "Bravo" },
                  };
                },
                // the second (next) callback is optional
                // if present, it will always run AFTER the state
                // has been updated
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
