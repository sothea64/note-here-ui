import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Note Here</h1>
        <form>
          <label htmlFor="#username">Username: </label>
          <br/>
          <input id="#username" type={"text"}></input>
          <br/>
          <label htmlFor="#password">Password: </label>
          <br/>
          <input id="#password" type={"password"}></input>
        </form>
      </header>
    </div>
  );
}

export default App;
