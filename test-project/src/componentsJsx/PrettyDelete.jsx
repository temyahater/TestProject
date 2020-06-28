import React, { Component } from 'react';

class PrettyDelete extends Component{
    render(){
      return (
          <div>
                <div className="modal fade" id="prettyDeleteModal" role="dialog" aria-labelledby="prettyDeleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="prettyDeleteModalLabel">Delete</h5>
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

  export default PrettyDelete;