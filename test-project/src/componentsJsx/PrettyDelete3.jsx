import React, { Component } from 'react';

class PrettyDelete3 extends Component{
    render(){
      return (
          <div>
                <div className="modal fade" id="prettyDeleteModal3" role="dialog" aria-labelledby="prettyDeleteModalLabel3" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="prettyDeleteModalLabel3">Delete</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are u sure?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary" onClick={()=>console.log(this.props.phoneid())} data-dismiss="modal">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      );
    }
  }

  export default PrettyDelete3;