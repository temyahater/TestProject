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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#navik">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#navik">All price:</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#navik">Stack:</a>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary my-2 my-sm-0">Search</button>
          <button className="btn btn-outline-light ml-2">Def</button>
          <button className="btn btn-outline-light ml-2">Cheap</button>
          <button className="btn btn-outline-light ml-2">Expensive</button>
        </div>
      </div>
    </nav>
    );
  }
}

export default NavBar;