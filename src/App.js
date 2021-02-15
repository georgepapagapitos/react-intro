import logo from './logo.svg';
import './App.css';

// Object destructuring
// import React from 'react';
// const useState = React.useState;
// Same as:
import { useState } from 'react';

// If this was node we would do:
// const HelloCullen = require('./HelloCullen')

// Client side (React) we do:
import HelloCullen from './HelloCullen';

// App is a Component
function App() {
  // This won't render:
  // let drinkCount = 1;

  // Array destructuring
  // const returnValOfUseState = useState(1);
  // const drinkCount = returnValOfUseState[0];
  // const setDrinkCount = returnValOfUseState[1];

  // useState is a hook
  //
  // drinkCount is the current value of my state
  // setDrinkCount lets me change the value of my state
  const [drinkCount, setDrinkCount] = useState(1);

  let name = 'George';
  let myH1 = <h1>Go home, {name}, you're drunk.</h1>;

  return (
    // 'HTML' is actually "JSX"
    // "Javascript eXtended"
    // as in App.jsx

    <div>
      <h1>Cullen Happy Hour!</h1>
      <p>
        {name} has had {drinkCount} drink
      </p>
      <button onClick={() => setDrinkCount(drinkCount + 1)}>Drink Up</button>
      <button onClick={() => setDrinkCount(0)}>Sober Up</button>
    </div>
  );
}

export default App;
