import React, { Component } from 'react';

class Footer extends Component {
    // constructor(props){
    //   super(props);
    // }
  
    render(){
  
      return (
        <div className="footer shadow-lg" style={{display: 'flex'}}>
            <div className="shadow">
                <ul>
                    <li>Some contact</li>
                    <li>Some contact</li>
                    <li>Some contact</li>
                    <li>Some contact</li>
                    <li>Some contact</li>
                    <li>Some contact</li>
                </ul>
            </div>
            <div className="shadow">
                <ul>
                    <li>Some information</li>
                    <li>Some information</li>
                    <li>Some information</li>
                    <li>Some information</li>
                    <li>Some information</li>
                    <li>Some information</li>
                </ul>
            </div>
            <div className="shadow">
                <ul>
                    <li>Some links</li>
                    <li>Some links</li>
                    <li>Some links</li>
                    <li>Some links</li>
                    <li>Some links</li>
                    <li>Some links</li>
                </ul>
                {/* <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                    <h5 className="card-title">Dark card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}
            </div>
        </div>
      );
    }
  }
  
  export default Footer;