import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name: string
    age: number
    url: string
    note ?: string
  }[]
}
function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Rohit Sharma",
      age: 33,
      url: "https://cricket.upcomingwiki.com/public/images/gallery/26551.png",
      note: "Hitman of team India"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to the party</h1>
      <List people = {people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
