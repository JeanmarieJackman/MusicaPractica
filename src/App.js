import React from "react";
import './App.css';

import { Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import PrLogContainer from './containers/PrLogContainer';
import Metronome from './components/Metronome';
import history from './history';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div >
          <Navigation  />
          </div>
        </header>
      <main className="App-main" >
        

      <Router history={history}>

          <Switch>
          <Route exact path='/'  component={Home}  />
          <Route path='/PrLogContainer'  component={PrLogContainer} />
          <Route path='/Metronome'  component={Metronome} />

          <Route component={Error} />

          </Switch>
          </Router>

      </main>
      <footer className="App-footer">
          <h4 className="app-name">contact:     jeanmarie.jackman@gmail.com</h4>
        </footer>
      </div>
  )
  }
}

export default App;

