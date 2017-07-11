import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Greeting from './components/greeting/Greeting';
import Cards from './components/cards/Cards';
import Tablerow from './components/tableRow/Tablerow';

class App extends Component {
  render() {
    return (

      <div className="App">

        <div className="App-header">
          <Navigation />
          <Hero />
          <Greeting />


          <Cards country="Spain" flag="/assets/images/spain_flag.svg" site="http://www.spain.info/en_US/" id="spain" siteName="Spain Tourism Site" />

          <Cards country="Italy" site="http://www.italia.it/en/home.html" flag="/assets/images/italy_flag.svg" siteName="Italy Tourism Site" />

          <Cards country="Aruba" site="http://www.arubatourism.com/" flag="/assets/images/aruba_flag.svg" siteName="Aruba Tourism Site" />

          <Cards country="Chile" site="http://www.arubatourism.com/" flag="/assets/images/chile_flag.svg" siteName="Chile Tourism Site" />


          <h3 className="panel-heading">Some information about the places I would like to visit</h3>

          <table className="table table-bordered">
          <thead>
          <tr>
            <th>Destination</th>
            <th>Capital</th>
            <th>Official Language</th>
            <th>Population (aprox.)</th>
            <th>National Bird</th>
          </tr>
          </thead>

          <tbody>

          <Tablerow destination="Spain" capital="Madrid" language="Spanish" pop="46.77 million" bird="Eagle" />

          <Tablerow destination="Italy" capital="Rome" language="Italian" pop="59.83 million" bird="Bluebird" />

          <Tablerow destination="Aruba" capital="Oranjestad" language="Dutch" pop="102,911" bird="Aruban Burrowing Owl" />

          <Tablerow destination="Chile" capital="Santiago" language="Spanish" pop="17.62 million" bird="Andean Condor" />

          </tbody>

          </table>

        </div>

      </div>
    );
  }
}

export default App;
