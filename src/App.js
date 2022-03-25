import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
 
const App = () => {
  const [characters, setCharacters] = useState([]);
 
 
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res.data)
        setCharacters(res.data);
        res.data.map(fr => {
          return fr;
        })
      })
      .catch(err => console.error(err))
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      { characters.map(fr => {
        return <Character info={fr} key={fr.id}/>
      })
    }
    </div>
  );
}
 
export default App;
 
