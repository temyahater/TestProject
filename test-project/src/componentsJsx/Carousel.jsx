import React, { Component } from 'react';

class Carousel extends Component {
    // constructor(props){
    //   super(props);
    // }
  
    render(){
  
      return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/apple.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Availability</h5>
                    <p>
                        Our company has a wide range of smartphones at relatively inexpensive prices.<br /> 
                        We have a huge customer base around the world.<br />
                        We cooperate with a large number of companies and stores.
                    </p>
                </div>
                </div>
                <div className="carousel-item">
                    <img src="images/docs.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Guarantee</h5>
                    <p>We have been on the market for many years, we have a large customer base with good reviews. 
                        <br />We provide guarantees for all points of sale, including delivery.
                        <br />A huge number of lawyers and a manager who is always ready to help you, answer your questions, etc.</p>
                </div>
                </div>
                <div className="carousel-item">
                    <img src="images/car.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Delivery</h5>
                    <p>Fast delivery by courier in large cities, or transportation by registered courier or by mail to smaller cities.
                    <br />Guaranteed quality delivery at a relatively low cost. 
                    <br />Responsible and experienced couriers will deliver your smartphone in integrity and safety.</p>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
      );
    }
  }
  
  export default Carousel;