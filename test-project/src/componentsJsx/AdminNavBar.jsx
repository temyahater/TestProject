import React, { Component } from 'react';

class AdminNavBar extends Component {

  render(){
    
    return (
    <nav className="shadow-lg navbar navbar-expand-lg navbar-dark" style={{background:'black'}}>
        <a className="navbar-brand" href="#navik">Product-list</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div name="navik" className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#navik">Admin tables<span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <button type="button" className="btn btn-outline-light ml-2 prettyButton" data-toggle="modal" data-target="#exitModal">Exit</button>
      </div>
    </nav>
    );
  }
}

export default AdminNavBar;