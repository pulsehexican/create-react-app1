import logo from './logo.svg';
import './App.css';
import AddNumbers from './AddNumbers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Enjoy !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React to be a professional fullstack dev.
        </a>
      <h2>Add Two Numbers</h2>
      <AddNumbers />
      </header>
    </div>
  );
}

export default App;
