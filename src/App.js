import React, {Component} from 'react';
import {CardList} from './Components/Card-List/Card-list.component';
import {SearchBox} from './Components/Search box/SearchBox.component';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state={
     monsters:[ ],
     searchField:''
   
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then (array => this.setState({monsters:array}));

}

handleChange = (e) =>{
  this.setState({searchField:e.target.value})
}

  render(){
    const {monsters , searchField } = this.state ;
    const filteredMonsters =monsters.filter(monster => 
       monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
       
        <SearchBox placeholder='Search Monsters' 
        handleChange={this.handleChange}
          />

        <CardList monsters={filteredMonsters}/>
        
      </div>

    );

  }

}

export default App;

