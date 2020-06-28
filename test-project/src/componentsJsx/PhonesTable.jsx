import React, { Component } from 'react';
// import PrettyDelete3 from './PrettyDelete3';

async function deleteFetch(id){
      try {
        const response = await fetch('http://localhost:4000/phones/'+String(id), {
          method: 'DELETE'
        });
        const json = await response.json();
        console.log(JSON.stringify(json));
      } catch (error) {
        console.error(error);
      }
  }

class PhonesTable extends Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this); 
        this.state = { phones: []};
    }

    updatePhones(){
        fetch('http://localhost:4000/phones').then(response=>{return response.json();}).then(data =>{this.setState({phones: data})});
        console.log(this.state.phones);
    }

    componentDidMount(){
        fetch('http://localhost:4000/phones').then(response=>{return response.json();}).then(data =>{this.setState({phones: data})});
        console.log('phonesDidMount');
    }

    render(){
    
        return (
            <table className="table" onClick={()=>this.updatePhones()}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Model</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Delete phone</th>
                    </tr>
                </thead>
                <tbody id="phones">
                        {
                            this.state.phones.map(phone=>
                                <tr key={phone._id}>
                                    <th scope="row">{phone._id}</th>
                                    <td>{phone.model}</td>
                                    <td>{phone.description}</td>
                                    <td>{phone.price}</td>
                                    <td>{phone.image}</td>
                                    <td>
                                        {/* <PrettyDelete3 click={()=>deleteFetch(phone._id)&&this.setState({phones: this.state.phones.filter(el=>el._id!==phone._id)})}/>
                                        <button className="btn btn-danger" data-toggle="modal" data-target="#prettyDeleteModal3">
                                        Delete</button> */}
                                        <button className="btn btn-danger" onClick={()=>window.confirm('Are u sure?')?deleteFetch(phone._id)&&this.setState({phones: this.state.phones.filter(el=>el._id!==phone._id)}):0}>
                                        Delete</button>
                                        </td>
                                </tr>)
                        }
                </tbody>
            </table>
        );
  }
}

export default PhonesTable;