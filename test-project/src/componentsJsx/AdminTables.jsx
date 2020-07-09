import React, { Component } from 'react';
import UserTable from './UserTable';
import PhonesTable from './PhonesTable';
import UsersToReg from './UsersToReg';
import OrdersTable from './OrdersTable';

class AdminTables extends Component {

  render(){
    
    return (
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Users
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body card-body-admin"><UserTable/></div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Users to reg
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body card-body-admin"><UsersToReg /></div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Phones
                        </button>
                        <button className="btn btn-link collapsed" data-toggle="modal" data-target="#addPhoneModal">Add phone</button>
                        <button className="btn btn-link collapsed" data-toggle="modal" data-target="#updatePhoneModal">Update phone</button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body card-body-admin"><PhonesTable /></div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Orders
                        </button>
                    </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body card-body-admin"><OrdersTable /></div>
                </div>
            </div>
        </div>
    );
  }
}

export default AdminTables;