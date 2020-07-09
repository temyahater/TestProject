import React, { Component } from 'react';

async function putFetchProcessed(order){
    try {
      const response = await fetch('http://localhost:4000/orders/'+order._id, {
        method: 'PUT', 
        body: JSON.stringify({username:order.username,order:order.order,processed:!order.processed,delivered:order.delivered,adress:order.adress}), 
        headers: {'Content-Type': 'application/json'}
      });
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
  }

async function putFetchDelivired(order){
    try {
      const response = await fetch('http://localhost:4000/orders/'+order._id, {
        method: 'PUT', 
        body: JSON.stringify({username:order.username,order:order.order,processed:!order.delivered,delivered:!order.delivered,adress:order.adress}), 
        headers: {'Content-Type': 'application/json'}
      });
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
  }

class OrdersTable extends Component {
    constructor(props){
        super(props);
        this.state = { orders: []};
    }

    updateOrders(){
        fetch('http://localhost:4000/orders').then(response=>{return response.json();}).then(data =>{this.setState({orders: data})});
        console.log('usersUpdate');
    }

    componentDidMount(){
        fetch('http://localhost:4000/orders').then(response=>{return response.json();}).then(data =>{this.setState({orders: data})});
        console.log('ordersDidMount');
    }

    render(){
        
        return (
            <table className="table" onClick={()=>this.updateOrders()}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Order</th>
                        <th scope="col">Processed</th>
                        <th scope="col">Delivered</th>
                        <th scope="col">Adress</th>
                    </tr>
                </thead>
                <tbody id="orders">
                {this.state.orders.map(order=>
                    <tr key={order._id}>
                        <th scope="row">{order._id}</th>
                        <td>{order.username}</td>
                        <td>{order.order}</td>
                        <td>{order.processed?<button className="btn btn-success prettyButtonSuccess" onClick={()=>putFetchProcessed(order)}>Processed</button>
                        :<button className="btn btn-danger prettyButtonPrimary" onClick={()=>putFetchProcessed(order)}>No processed</button>}</td>
                        <td>{order.delivered?<button className="btn btn-success prettyButtonSuccess" onClick={()=>putFetchDelivired(order)}>Delivered</button>
                        :<button className="btn btn-danger prettyButtonPrimary" onClick={()=>putFetchDelivired(order)}>No delivered</button>}</td>
                        <td>{order.adress}</td>
                        </tr>)
                }
                </tbody>
            </table>
        );
  }
}

export default OrdersTable;