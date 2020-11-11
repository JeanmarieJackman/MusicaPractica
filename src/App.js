import React from "react";
import './App.css';

import { Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import PrLogContainer from './containers/PrLogContainer';
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
          <Route component={Error} />

          </Switch>
          </Router>

      </main>
      <footer className="App-footer">
          <p className="app-name">jeanmarie.jackman@gmail.com</p>
        </footer>
      </div>
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