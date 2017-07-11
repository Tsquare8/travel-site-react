import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (

      <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    <div id="image_carousel" className="carousel-inner">
        <div className="item active">
            <img src="../assets/images/plane.jpeg" alt="First Slide"></img>
        </div>
        <div className="item">
            <img src="../assets/images/travel_photog.jpg" alt="Second Slide"></img>
        </div>
        <div className="item">
            <img src="../assets/images/camping.jpg" alt="Third Slide"></img>
        </div>
        <div className="item">
            <img src="../assets/images/tropical.jpg" alt="Third Slide"></img>
        </div>
    </div>


    <a className="carousel-control left" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a className="carousel-control right" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>

        );
      }
    }

    export default Hero;
