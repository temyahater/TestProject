import React, { Component } from 'react';

class PhonePayment extends Component {

    render(){
        return (
            <div>
                <div className="modal fade" id="creditCardModal" role="dialog" aria-labelledby="creditCardModalTitle">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="creditCardModalTitle">Enter the <i>Data</i> pls:<br /><span id="warningEnter"></span></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                            <span className="input-group-text">Credit card code:</span>
                                    </div>
                                    <input id="cardCode" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                            <span className="input-group-text">CVV code:</span>
                                    </div>
                                    <input id="cardBackCode" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" /><br/>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                            <span className="input-group-text">Validity:</span>
                                    </div>
                                    <input id="cardValidity" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" /><br/>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                            <span className="input-group-text">Adress:</span>
                                    </div>
                                    <input id="adressOrder" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" /><br/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger prettyButtonPrimary" onClick={()=>this.props.userProp()} data-dismiss="modal">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="modal fade" id="paymentModal" role="dialog" aria-labelledby="paymentModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="paymentModalLabel">Payment</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#creditCardModal" data-dismiss="modal">Credit card</button>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#creditCardModal" data-dismiss="modal">Cash(on delivery)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhonePayment;