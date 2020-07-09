import React, { Component } from 'react';
// import PrettyDelete2 from './PrettyDelete2';

async function deleteFetch(id){
    try {
      const response = await fetch('http://localhost:4000/userstoreg/'+String(id), {
        method: 'DELETE'
      });
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
}

async function postFetch(usertoreg){
      try {
        const response = await fetch('http://localhost:4000/users', {
          method: 'POST', 
          body: JSON.stringify({id:usertoreg._id,name: usertoreg.name, surname: usertoreg.surname, login: usertoreg.login, email: usertoreg.email, password: usertoreg.password, stack:[], orders:[]}), 
          headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();
        console.log(JSON.stringify(json));
      } catch (error) {
        console.error(error);
      }
  }

class UsersToReg extends Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this); 
        this.state = { userstoreg: []};
    }

    componentDidMount(){
        fetch('http://localhost:4000/userstoreg').then(response=>{return response.json();}).then(data =>{this.setState({userstoreg: data})});
        console.log('userstoregDidMount');
    }

    render(){
        
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Login</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete user</th>
                        <th scope="col">Confirm user</th>
                    </tr>
                </thead>
                <tbody id="userstoreg">
                {this.state.userstoreg.map(user=>
                    <tr key={user._id}>
                        <th scope="row">{user._id}</th>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.login}</td>
                        <td>{user.email}</td>
                        <td>
                          {/* <PrettyDelete2 click={()=>deleteFetch(user._id)&&this.setState({userstoreg: this.state.userstoreg.filter(el=>el._id!==user._id)})}/>
                            <button className="btn btn-danger" data-toggle="modal" data-target="#prettyDeleteModal2">
                            Delete</button> */}
                          <button className="btn btn-danger prettyButtonPrimary" onClick={()=>window.confirm('Are u sure?')?deleteFetch(user._id)&&this.setState({userstoreg: this.state.userstoreg.filter(el=>el._id!==user._id)}):0}>
                          Delete</button></td>
                        <td><button className="btn btn-secondary" onClick={()=>window.confirm('Are u sure?')?postFetch(user)&&deleteFetch(user._id)&&this.setState({userstoreg: this.state.userstoreg.filter(el=>el._id!==user._id)}):0}>Confirm</button></td>
                        </tr>)
                }
                </tbody>
            </table>
        );
  }
}

export default UsersToReg;