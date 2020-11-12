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
          <div>
          <Navigation className="app-name" />
          </div>
        </header>
      <main className="App-main" >
        

      <Router history={history}>

          <Switch>
          <Route path='/' exact component={Home}  />
          <Route path='/PrLogContainer' exact component={PrLogContainer} />
          <Route path='/Metronome' exact component={Metronome} />

          <Route component={Error} />

          </Switch>
          </Router>

      </main>
      <footer className="App-footer">
          <h4 className="app-name">contact:   <a href={'jeanmarie.jackman@gmail.com'}>  jeanmarie.jackman@gmail.com</a></h4>
        </footer>
      </div>
  )
  }
}

export default App;

