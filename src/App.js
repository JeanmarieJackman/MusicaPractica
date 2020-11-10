import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';

import PracticeLog from './components/PracticeLog'

class App extends React.Component {
  render() {
    return (
      <main>
                  <Navigation />

          <Switch>
          <Route path='/' component={Home} />
          <Route path='/PracticeLog' component={PracticeLog} />

          </Switch>
      </main>
  )
  }
}

export default App;

{/* <div className="App">
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
    ); */}