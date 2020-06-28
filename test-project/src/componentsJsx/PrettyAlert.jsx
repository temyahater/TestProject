import React, { Component } from 'react';

class PrettyAlert extends Component{
    render(){
      return (
            <div className="modal fade" id="prettyAlertModal" role="dialog" aria-labelledby="prettyAlertModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="prettyAlertModalLabel">Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Added phone to cart
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  }

  export default PrettyAlert;