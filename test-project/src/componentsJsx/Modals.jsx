import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Modal extends Component{
    render(){
      return (
        <div>
            <div className="modal fade z-index-1" id="registerModal" role="dialog" aria-labelledby="registerModalTitle">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerModalTitle">Enter the <i>Data</i> pls:</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Login</span>
                                </div>
                                <input id="registerLogin" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Password</span>
                                </div>
                                <input id="registerPassword" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Password ret</span>
                                </div>
                                <input id="registerPasswordRet" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Name</span>
                                </div>
                                <input id="registerName" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Surname</span>
                                </div>
                                <input id="registerSurname" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Email</span>
                                </div>
                                <input id="registerEmail" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={()=>this.props.clickRegister()} data-dismiss="modal">Register</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exitModal" role="dialog" aria-labelledby="exitModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exitModalLabel">Exit</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are u sure?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                            <button type="button" className="btn btn-danger" onClick={()=>this.props.exitClick()} data-dismiss="modal">Yes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="enterModal" role="dialog" aria-labelledby="enterModalTitle">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="enterModalTitle">Enter the <i>Data</i> pls:<br /><span id="warningEnter"></span></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Login</span>
                                </div>
                                <input id="loginEnter" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Password</span>
                                </div>
                                <input id="passwordEnter" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-danger" onClick={()=>this.props.enterClick()} data-dismiss="modal">Enter</button>
                            {/* <Link to="/admin">
                                <button className="btn btn-secondary">Enter</button>
                            </Link> */}
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#registerModal" data-dismiss="modal">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Modal;