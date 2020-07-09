import React, { Component } from 'react';
// import PrettyDelete from './PrettyDelete';

async function deleteFetch(id){
    try {
      const response = await fetch('http://localhost:4000/users/'+id, {
        method: 'DELETE'
      });
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
}

async function deleteFetchOrders(username){
    try {
      const response = await fetch('http://localhost:4000/orders/'+username, {
        method: 'DELETE'
      });
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
}

class UserTable extends Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this); 
        this.state = {users:[]};
    }

    updateUsers(){
        fetch('http://localhost:4000/users').then(response=>response.json()).then(data =>{this.setState({users: data})});
        console.log('usersUpdate');
    }

    componentDidMount(){
        fetch('http://localhost:4000/users').then(response=>response.json()).then(data =>{this.setState({users: data})});
        console.log('usersDidMount');
    }

    render(){
        
        return (
            <table className="table" onClick={()=>this.updateUsers()}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Login</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete user</th>
                    </tr>
                </thead>
                <tbody id="users">
                {this.state.users.map(user=>
                    <tr key={user._id}>
                        <th scope="row">{user._id}</th>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.login}</td>
                        <td>{user.email}</td>
                        <td>
                            {/* <PrettyDelete click={()=>deleteFetch(user._id)&&this.setState({users: this.state.users.filter(el=>el._id!==user._id)})}/>
                            <button className="btn btn-danger" data-toggle="modal" data-target="#prettyDeleteModal">
                            Delete</button> */}
                            <button className="btn btn-danger prettyButtonPrimary" onClick={()=>window.confirm('Are u sure?')?
                            deleteFetchOrders(user.login)&&deleteFetch(user._id)
                            &&this.setState({users: this.state.users.filter(el=>el._id!==user._id)}):0}>
                            Delete</button>
                        </td>
                        </tr>)
                }
                </tbody>
            </table>
        );
  }
}

export default UserTable;