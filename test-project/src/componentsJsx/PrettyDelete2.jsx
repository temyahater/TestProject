import React, { Component } from 'react';

class PrettyDelete2 extends Component{
    render(){
      return (
          <div>
                <div className="modal fade" id="prettyDeleteModal2" role="dialog" aria-labelledby="prettyDeleteModalLabel2" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="prettyDeleteModalLabel2">Delete</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are u sure?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary" onClick={()=>this.props.click()} data-dismiss="modal">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      );
    }
  }

  export default PrettyDelete2;