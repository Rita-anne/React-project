import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather city="Beijing" />
          <footer>
            this project was coded by <a href="#">Rita Anne GAKIZA</a> and this{" "}
            <a href="#">open-sourced on GitHub</a>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
