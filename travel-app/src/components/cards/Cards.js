import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    return (

      <div id="cards" className="page-row">

        <div className="col-md-3 card" >
        <div id="flag" >
            <img className="image-cards" src={this.props.flag}></img>
            </div>
            <h3>{this.props.country}</h3>
            <a href={this.props.site} target="blank">{this.props.siteName} </a>
        </div>

      </div>

        );
      }
    }

    export default Cards;
