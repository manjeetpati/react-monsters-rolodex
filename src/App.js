import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          () => {
            return {
              monsters: res,
              filteredMonsters: res,
            };
          },
          () => {
            console.log("Monster loaded");
          }
        );
      });
  }

  onSearchChange = (event) => {
    this.setState((state) => {
      return {
        filteredMonsters: state.monsters.filter((monster) => {
          if (
            monster.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          ) {
            return true;
          }
          return false;
        }),
      };
    });
  };
  

  render() {
    const {filteredMonsters} = this.state
    const {onSearchChange} = this
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler= {onSearchChange} placeHolder='search monsters' className='search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
