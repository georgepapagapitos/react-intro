import logo from './logo.svg';
import './App.css';

// If this was node we would do:
// const HelloCullen = require('./HelloCullen')

// Client side (React) we do:
import HelloCullen from './HelloCullen';

// App is a Component
function App() {
  let name = 'George';
  let myH1 = <h1>Go home, {name}, you're drunk.</h1>;
  return (
    // 'HTML' is actually "JSX"
    // "Javascript eXtended"
    // as in App.jsx

    <div className="App">
      {myH1}
      <header className="App-header">
        <HelloCullen />
        <HelloCullen />
        <HelloCullen />
        <HelloCullen />
        <HelloCullen />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
