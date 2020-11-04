import React from "react";
import './App.css';
import PrLogContainer from './containers/PrLogContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
          <div >
          <h1 className="app-name">Musica<b>Practica</b></h1>
          </div>
        </header>
        <main>
          <PrLogContainer />
          <footer className="App-footer">
          <p className="app-name">jeanmarie.jackman@gmail.com</p>
          </footer>
        </main>

      </div>
    );
  }
}

export default App;
