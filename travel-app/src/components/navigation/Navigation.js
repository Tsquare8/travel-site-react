import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (

      <nav className="navbar navbar-default" id="nav">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand text-center" href="#">My Travel Site</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Stuff</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

          </div>

        </div>
      </nav>

        );
      }
    }

    export default Navigation;
