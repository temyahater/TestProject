import React, { Component } from 'react';
import AdminNavBar from './componentsJsx/AdminNavBar';
import AdminTables from './componentsJsx/AdminTables';
import AdminModals from './componentsJsx/AdminModals';

class Admin extends Component{
    render(){
      return (
        <div className="App">
          <AdminModals />
          <AdminNavBar />
          <span className="header-ayff">Happiness of the client is the key to the success of the company.</span>
          <AdminTables />
          <div className="warningCards">
            <div className="card text-white bg-warning mb-3 warningCard">
              <div className="card-header">Users</div>
              <div className="card-body">
                <h5 className="card-title">Do not delete</h5>
                <p className="card-text">Do not delete users without a good reason.</p>
              </div>
            </div>
            <div className="card text-white bg-warning mb-3 warningCard">
              <div className="card-header">Users to register</div>
              <div className="card-body">
                <h5 className="card-title">Do not approve</h5>
                <p className="card-text">Do not add suspicious users, this can cause problems for all users.</p>
              </div>
            </div>
            <div className="card text-white bg-danger mb-3 errorCard">
              <div className="card-header">Phones</div>
              <div className="card-body">
                <h5 className="card-title">Check ID</h5>
                <p className="card-text">Check product id, DO NOT try to add products with the same id.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Admin;