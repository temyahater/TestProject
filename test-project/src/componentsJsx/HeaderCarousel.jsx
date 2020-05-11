import React, { Component } from 'react';

class HeaderCarousel extends Component {
    // constructor(props){
    //   super(props);
    // }
  
    render(){
  
      return (
        <div id="carouselExampleSlidesOnly" className="headerCarousel carousel slide shadow-lg" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/11pro.jpg" className="d-block w-100" alt="11pro" />
                </div>
                <div className="carousel-item">
                    <img src="images/11.jpg" className="d-block w-100" alt="11" />
                </div>
                <div className="carousel-item">
                    <img src="images/xr.jpg" className="d-block w-100" alt="xr" />
                </div>
                <div className="carousel-item">
                    <img src="images/s10.jpg" className="d-block w-100" alt="s10" />
                </div>
                <div className="carousel-item">
                    <img src="images/note10.png" className="d-block w-100" alt="note10" />
                </div>
                <div className="carousel-item">
                    <img src="images/huaweiSlider2.png" className="d-block w-100" alt="huaweiSlider" />
                </div>
                <div className="carousel-item">
                    <img src="images/oneplusSlider.jpg" className="d-block w-100" alt="oneplusSlider" />
                </div>
                <div className="carousel-item">
                    <img src="images/ximiSlider.jpg" className="d-block w-100" alt="ximiSlider" />
                </div>
                <div className="carousel-item">
                    <img src="images/ximiSlider2.png" className="d-block w-100" alt="ximiSlider" />
                </div>
            </div>
        </div>
      );
    }
  }

export default HeaderCarousel;