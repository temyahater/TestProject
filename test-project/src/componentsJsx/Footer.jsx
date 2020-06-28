import React, { Component } from 'react';

class Footer extends Component {
    // constructor(props){
    //   super(props);
    // }
  
    render(){
  
      return (
        <div className="footer shadow-lg">
            <div className="footerLinks">
                <img src="images/inst.png" alt="inst logo"/>
                <a href="https://www.instagram.com/temyahater">temyahater</a>
                <img src="images/vk-1.svg" alt="vk logo"/>
                <a href="https://vk.com/temyahater">Temya Kyharenok</a>
                <img src="images/facebook.webp" alt="facebook logo"/>
                <a href="https://www.facebook.com/">Temya Hater</a>
                <img src="images/gmail.png" alt="gmail logo"/>
                <a href="mailto:howkiwe@gmail.com">howkiwe@gmail.com</a>
                <img src="images/phone.png" alt="whatsup logo"/>
                <span>+375 (29) 215-79-28</span>
            </div>
            <div className="footerInfo">
                <span>Privacy Policy</span>
                <span>|</span>
                <span>Terms of Use</span>
                <span>|</span>
                <span>Sales and Refunds</span>
                <span>|</span>
                <span>Legal</span>
                <span>|</span>
                <div>Site Map: Republic of Belarus</div>
                <img src="images/belarus.png" alt="map logo"/>
            </div>
            <span className="copyraight">Copyright © 2020 Temyahater Inc. All rights reserved.</span>
        </div>
      );
    }
  }
  
  export default Footer;