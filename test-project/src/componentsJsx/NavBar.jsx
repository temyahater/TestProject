import React, { Component } from 'react';

class NavBar extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    
    return (
    <nav className="shadow-lg navbar navbar-expand-lg navbar-dark" style={{background:'black'}}>
        <a className="navbar-brand" href="#navik">Product-list</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div name="navik" className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav-ul navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#navik">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
    <button className="btn btn-outline-light ml-2 prettyButton" data-toggle="modal" data-target="#stackModal">Cart</button>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-light ml-2 prettyButton" hidden="1" id="userInAccount" data-toggle="modal" data-target="#exitModal"></button>
          <button id="enterButton" className="btn btn-outline-light ml-2 prettyButton" data-toggle="modal" data-target="#enterModal">Enter</button>
        </div>
      </div>
    </nav>
    );
  }
}

export default NavBar;