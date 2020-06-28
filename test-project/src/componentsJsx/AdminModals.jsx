import React, { Component } from 'react';

async function postFetch(phone){
    try {
      const response = await fetch('http://localhost:4000/phones', {
        method: 'POST',
        body: JSON.stringify({id:phone.id,model: phone.model, description: phone.description, price: phone.price, image: phone.image}), 
        headers: {'Content-Type': 'application/json'}});
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
}

async function putFetch(phone){
    try {
      const response = await fetch('http://localhost:4000/phones/'+phone.id, {
        method: 'PUT',
        body: JSON.stringify({model: phone.model, description: phone.description, price: phone.price, image: phone.image}), 
        headers: {'Content-Type': 'application/json'}});
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
}

class AdminModals extends Component{
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this); 
        this.state = { phones: []};
    }

    updateTables(){
        fetch('http://localhost:4000/phones').then(response=>{return response.json();}).then(data =>{this.setState({phones: data})});
        console.log('tablesUpdate');
    }

    componentDidMount(){
        fetch('http://localhost:4000/phones').then(response=>{return response.json();}).then(data =>{this.setState({phones: data})});
        console.log('tablesDidMount');
    }

    render(){
      return (
        <div>
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
                            <button type="button" className="btn btn-primary" onClick={()=>document.location.href='http://localhost:3000/'}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade z-index-1" id="addPhoneModal" role="dialog" aria-labelledby="addPhoneModalTitle">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addPhoneModalTitle">Enter the <i>Data</i> pls:</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">ID</span>
                                </div>
                                <input id="addPhoneId" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Model</span>
                                </div>
                                <input id="addPhoneModel" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Description</span>
                                </div>
                                <input id="addPhoneDesc" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Price</span>
                                </div>
                                <input id="addPhonePrice" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Image</span>
                                </div>
                                <input id="addPhoneImage" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>this.state.phones.filter(el=>el._id===Number(document.getElementById('addPhoneId').value)).length===0?postFetch(
                                {id: Number(document.getElementById('addPhoneId').value),model: document.getElementById('addPhoneModel').value, 
                                description: document.getElementById('addPhoneDesc').value,price: Number(document.getElementById('addPhonePrice').value),
                                image: document.getElementById('addPhoneImage').value})&&this.updateTables():alert('Uncorrect ID')}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade z-index-1" id="updatePhoneModal" role="dialog" aria-labelledby="updatePhoneModalTitle">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updatePhoneModalTitle">Enter the <i>Data</i> pls:</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">ID</span>
                                </div>
                                <input id="updatePhoneId" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Model</span>
                                </div>
                                <input id="updatePhoneModel" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Description</span>
                                </div>
                                <input id="updatePhoneDesc" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Price</span>
                                </div>
                                <input id="updatePhonePrice" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                        <span className="input-group-text">Image</span>
                                </div>
                                <input id="updatePhoneImage" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>this.state.phones.filter(el=>el._id===Number(document.getElementById('updatePhoneId').value)).length===1?putFetch(
                                {id: Number(document.getElementById('updatePhoneId').value),model: document.getElementById('updatePhoneModel').value, 
                                description: document.getElementById('updatePhoneDesc').value,price: Number(document.getElementById('updatePhonePrice').value),
                                image: document.getElementById('updatePhoneImage').value})&&this.updateTables():alert('Uncorrect ID')}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default AdminModals;