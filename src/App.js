import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Persons from './Persons';
import Planets from './Planets';
import Home from './Home';

import './App.css';
import logo from './logo.png';


/**
 * Egzistuoja du būdai sukurti React komponentą -
 * galima rašyti klasę arba funkciją. Rašyti klasę būtina tik tada,
 * kai komponentas turi būti stateful, t.y. jam būtina naudoti state.
 * Kitu atveju galima rašyti stateless komponentą - funkciją.
 * 
 * Plačiau: https://facebook.github.io/react/docs/components-and-props.html
 */

/**
 * Šioje klasėje - React komponente yra naudojamas React Router.
 * Jis reikalingas įgyvendinti naviguojamą aplikaciją. Šiuo atveju,
 * jo panaudojimas yra gana paprastas, tačiau apskritai
 * jo galimybės yra labai plačios.
 * 
 * Plačiau: https://reacttraining.com/react-router/web/guides/quick-start
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h2>Star Wars</h2>
        </div>
        <div className="App-intro">
          <Router>
            <div>
              <ul className="App-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/planets">Planets</Link></li>
                <li><Link to="/persons">Persons</Link></li>
              </ul>
              <Route exact path="/" component={Home} />
              <Route path="/planets" component={Planets} />
              <Route path="/persons" component={Persons} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

/**
 * Taip pat kaip ES6 import - importuoja modulius, norint,
 * kad esamas modulis - failas galėtų būti importuotas kituose
 * komponentuose ar moduliuose, jį reikia eksportuoti naudojant export
 * 
 * Plačiau: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 */
export default App;
