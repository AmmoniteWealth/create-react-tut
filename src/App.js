import React, { useState, useEffect } from 'react';
import Button from './components/button'
import Count from './components/count'
import './App.css';

function App() {
  const [ count, setCount ] = useState(0)
  const [ countPlusOne, setCountPlusOne ] = useState(0)
  const [ currentThing, setCurrentThing ] = useState('')
  const [ things, setThings ] = useState([])

  const increaseCount = () => {
    setCount(count + 1)
  }

  const changeCurrentThing = (item) => {
    setCurrentThing(item)
  }

  const addToThings = () => {
    let _things = things
    _things.push(currentThing)
    setThings([..._things]) // if you don't use the spread operator it won't rerender the map
  }

  const upOne = () => {
    setCountPlusOne(count + 1) // set useState function moved out of useEffect
  }

  useEffect(() => {
    document.title = `${count}`;
    upOne()
  }, [count]) // without count in the dependencies, the title won't change and setCountPlusOne won't happen

  return (
    <div className="App">
      <h2>{count}</h2>
      <div>{count % 2 === 0 ? "EVEN" : "ODD"}</div>
      <Button
        title="Increase"
        buttonFunction={increaseCount}
      />
      <Button
        title="Add to Array"
        buttonFunction={addToThings}
      />
      <input
        type="text"
        onChange={(event) => {changeCurrentThing(event.target.value)}}
      ></input>
      {things.map((value) => {
        return (
        <div
          key={value}
        >
          {value}
        </div>)
      })}
      <Count
        count={countPlusOne}
      />
    </div>
  );
}

export default App;
