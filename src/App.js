import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "dsflgj9",
        },
        {
          name: "Frank",
          id: "r29hr923r",
        },
        {
          name: "Jacky",
          id: "fwek9th",
        },
        {
          name: "John",
          id: "fmnw4gh39h",
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
