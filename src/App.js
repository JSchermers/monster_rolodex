import './App.css';
import { Component } from "react";
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from "react"; 

// class App extends Component {
//   constructor () {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ""
//     }
//   }

//   async componentDidMount () {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
    
//     this.setState(() => {
//       return {monsters: data}
//     })
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase(); 

//     this.setState(() => {
//       return {searchField}
//     })
//   }

//   render() {
//     const {monsters, searchField} = this.state;
//     const { onSearchChange } = this;
//     const filtered = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })
//    return <div>
//    <div><SearchBox onSearchChangeHandler={onSearchChange} placeholder={"search monsters"} className={"search-box"} /></div>
//     <CardList monsters={filtered} />

//    </div>

//   };
// }

const App = () => {
  const [ searchField, setSearchField] = useState('');
  const [ monsters, setMonsters] = useState([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

  useEffect(() => {
  
  async function fetchData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());    
    setMonsters(data)
  }
  fetchData()

  }, []
  )

  useEffect(() => {
    const filtered = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(filtered)
  }, [monsters, searchField])



  console.log(searchField)


  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase(); 

    setSearchField(searchFieldString)
  }
  return  <div><SearchBox onSearchChangeHandler={onSearchChange} placeholder={"search monsters"} className={"search-box"} />
  <CardList monsters={filteredMonsters} /></div>
}

export default App;
