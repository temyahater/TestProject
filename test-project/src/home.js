import React, { Component } from 'react';
import NavBar from './componentsJsx/NavBar';
import Phone from './componentsJsx/Phone';
import Footer from './componentsJsx/Footer';
import Carousel from './componentsJsx/Carousel';
import HeaderCarousel from './componentsJsx/HeaderCarousel';
import Companys from './componentsJsx/Companys';
import Modal from './componentsJsx/Modals';
import PhoneCart from './componentsJsx/PhoneCart';
import Feedback from './componentsJsx/Feedback';
import FeedbackLike from './componentsJsx/FeedbackLike';
import PhonePayment from './componentsJsx/PhonePayment';
import Order from './componentsJsx/Order';

function sortHighPrice(phones){
  for(let i=0;i<phones.length;i++)
    for(let j=0;j<phones.length-i-1;j++)
      if(phones[j].price<phones[j+1].price){
        let temp=phones[j];
        phones[j]=phones[j+1];
        phones[j+1]=temp;
      }
  return phones;
}

function sortLowPrice(phones){
  for(let i=0;i<phones.length;i++)
    for(let j=0;j<phones.length-i-1;j++)
      if(phones[j].price>phones[j+1].price){
        let temp=phones[j];
        phones[j]=phones[j+1];
        phones[j+1]=temp;
      }
  return phones;
}

let defPhones=[];

function test(){
  fetch('http://localhost:4000/phones').then(response=>{return response.json();}).then(data => defPhones=data);
  // console.log(defPhones);
}

async function postFetch(user){
  try {
    const response = await fetch('http://localhost:4000/userstoreg', {
      method: 'POST', 
      body: JSON.stringify({id:user.id,name:user.name,surname:user.surname,login:user.login,email:user.email,password:user.password,stack:[],orders:[]}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

async function postFetchFeedback(feedback,username,id,like){
  try {
    const response = await fetch('http://localhost:4000/feedbacks', {
      method: 'POST', 
      body: JSON.stringify({id,username,feedback,like}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

async function postFetchPass(login,email,password){
  try {
    const response = await fetch('http://localhost:4000/forgotpass', {
      method: 'POST', 
      body: JSON.stringify({login,email,password}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

async function putFetchCart(user,cart){
  try {
    const response = await fetch('http://localhost:4000/users/'+user._id, {
      method: 'PUT', 
      body: JSON.stringify({name: user.name, surname: user.surname, login: user.login, email: user.email, password: user.password, stack:cart, orders: user.orders}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

async function putFetchOrders(user,cart,order){
  try {
    const response = await fetch('http://localhost:4000/users/'+user._id, {
      method: 'PUT', 
      body: JSON.stringify({name: user.name, surname: user.surname, login: user.login, email: user.email, password: user.password, stack: cart, orders: order}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

async function postFetchOrders(id,username,order,adress){
  try {
    const response = await fetch('http://localhost:4000/orders', {
      method: 'POST', 
      body: JSON.stringify({id,username,order,processed: false,delivered: false,adress}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

class Home extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); 
    this.state = { phones: [], cart: [], user: false, feedbacks: [], users: [], order: [], orders: [], allOrders:[]};
  }

  handleClick(){
    this.setState((state,props)=>{
      return {phones: sortHighPrice(state.phones)};
    });
  }

  defPrice(){
    if(defPhones.length>0) this.setState({phones: defPhones});
    console.log(this.state)
  }
  
  highPrice(){
    this.setState({phones: sortHighPrice(this.state.phones)});
    console.log(this.state)
  }

  lowPrice(){
    this.setState({phones: sortLowPrice(this.state.phones)});
    console.log(this.state)
  }

  applyFiltres(){
    switch(document.getElementById('selectFiltres').options[document.getElementById('selectFiltres').selectedIndex].text){
      case 'Price':
        return this.setState({phones: this.state.phones.filter(el=>el.price>=document.getElementById('inputFiltres').value)}); 
      case 'Company':
        return this.setState({phones: this.state.phones.filter(el=>~el.description.indexOf(document.getElementById('inputFiltres').value))});
      case 'Model':
        return this.setState({phones: this.state.phones.filter(el=>~el.model.indexOf(document.getElementById('inputFiltres').value))});
      case 'Something else here':
        return 0;
      default:
        console.log('DEFAULT');
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/phones').then(response=>response.json()).then(data =>{this.setState({phones: data})});
    fetch('http://localhost:4000/feedbacks').then(response=>response.json()).then(data =>{this.setState({feedbacks: data})});
    fetch('http://localhost:4000/users').then(response=>response.json()).then(data =>{this.setState({users: data})});
    fetch('http://localhost:4000/orders').then(response=>response.json()).then(data =>{this.setState({allOrders: data})});
    console.log('phonesDidMount');
    // fetch('http://localhost:4000/users').then(response=>{return response.json();}).then(data =>{this.setState({phones: data})});
    // console.log('usersDidMount');
  }
  
  render(){
    return(
      <div className="App" onClick={()=>{test(); console.log(this.state)}}>
        <Modal enterClick={()=>fetch('http://localhost:4000/users').then(response=>response.json())
        .then(data =>{ if(document.getElementById('loginEnter').value==='admin'&&document.getElementById('passwordEnter').value==='admin') return document.location.href='http://localhost:3000/admin';
          if(data.filter(el=>el.login===document.getElementById('loginEnter').value&&el.password===document.getElementById('passwordEnter').value).length===1){
          document.getElementById('userInAccount').innerText=document.getElementById('loginEnter').value;
          document.getElementById('enterButton').hidden=1;
          document.getElementById('userInAccount').hidden=0;
          this.setState({user: data.find(el=>el.login===document.getElementById('loginEnter').value&&el.password===document.getElementById('passwordEnter').value).login, 
          cart:data.find(el=>el.login===document.getElementById('loginEnter').value&&el.password===document.getElementById('passwordEnter').value).stack,
          orders: data.find(el=>el.login===document.getElementById('loginEnter').value&&el.password===document.getElementById('passwordEnter').value).orders});
          return data;}
          document.getElementById('warningEnter').innerText='Warning: wrong login or password';
        })} exitClick={()=>{
          document.getElementById('userInAccount').innerText='';
          document.getElementById('enterButton').hidden=0;
          document.getElementById('userInAccount').hidden=1;
          this.setState({user: false, cart: []});
        }} 
        clickRegister={()=>this.state.users.find(el=>el.login===document.getElementById('registerLogin').value)?
        alert('This login is already taken'):fetch('http://localhost:4000/userstoreg').then(response=>response.json())
        .then(data=>data.find(el=>el.login===document.getElementById('registerLogin').value)?alert('This login is already taken'):postFetch({
          id:Math.max(data.reduce((prev,el)=>prev._id>el._id?prev:el)._id,this.state.users.reduce((prev,el)=>prev._id>el._id?prev:el)._id)+1,
          name:document.getElementById('registerName').value,
          surname:document.getElementById('registerSurname').value,
          login:document.getElementById('registerLogin').value,
          email:document.getElementById('registerEmail').value,
          password:document.getElementById('registerPassword').value
        }))} 
        
        // clickRegister={()=>
        //   fetch('http://localhost:4000/userstoreg').then(response=>response.json())
        //   .then(data=>data.length>0?postFetch({
        //     id: data.reduce((prev,el)=>prev._id>el._id?prev:el)._id+1,
        //     name:document.getElementById('registerName').value,
        //     surname:document.getElementById('registerSurname').value,
        //     login:document.getElementById('registerLogin').value,
        //     email:document.getElementById('registerEmail').value,
        //     password:document.getElementById('registerPassword').value,
        //     stack:[]
        //   }):fetch('http://localhost:4000/users').then(response=>response.json())
        //      .then(data=>data.length>0?postFetch({
        //       id: data.reduce((prev,el)=>prev._id>el._id?prev:el)._id+1,
        //       name:document.getElementById('registerName').value,
        //       surname:document.getElementById('registerSurname').value,
        //       login:document.getElementById('registerLogin').value,
        //       email:document.getElementById('registerEmail').value,
        //       password:document.getElementById('registerPassword').value,
        //       stack:[]
        //     }):postFetch({
        //         id: 1,
        //         name:document.getElementById('registerName').value,
        //         surname:document.getElementById('registerSurname').value,
        //         login:document.getElementById('registerLogin').value,
        //         email:document.getElementById('registerEmail').value,
        //         password:document.getElementById('registerPassword').value,
        //         stack:[]
        //     })))} 
            // cart={()=>fetch('http://localhost:4000/users').then(response=>response.json())
            // .then(data=>console.log(data.find(el=>el.id===this.state.user).stack))}
                // feedbacks={()=>this.state.feedbacks.map(el=><div key={el._id}>{el}</div>)}
              forgotPass={()=>this.state.users.find(el=>{
                if(el.login===document.getElementById('forgotPassEmail').value) postFetchPass(el.login,el.email,el.password);
                return el.login===document.getElementById('forgotPassEmail').value})!==undefined?alert('Complete'):alert('Undefined user')}/>

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

        <PhonePayment userProp={()=>this.state.orders.push(this.state.order)
        &&putFetchOrders(this.state.users.find(el=>el.login===this.state.user),this.state.cart.filter(el=>el._id!==this.state.order._id),this.state.orders)
        &&fetch('http://localhost:4000/orders').then(response=>response.json())
        .then(data=>postFetchOrders(data.reduce((prev,el)=>prev._id>el._id?prev:el)._id+1,this.state.user,this.state.order.model,document.getElementById('adressOrder').value)
        &&this.setState({cart:this.state.cart.filter(el=>el._id!==this.state.order._id), order: []}))} />  

        <div className="modal fade" id="stackModal" role="dialog" aria-labelledby="stackModalLabel" aria-hidden="true">
                <div className="modal-dialog cart" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="stackModalLabel">Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.state.cart.map(el=><PhoneCart removePhone={()=>fetch('http://localhost:4000/users').then(response=>response.json())
                            .then(data=>data.find(el=>el.login===this.state.user)).then(data=>putFetchCart(data,this.state.cart.filter(item=>el._id!==item._id)))&&this.setState({cart: this.state.cart.filter(item=>el._id!==item._id)})}
                            phoneProp={()=>this.setState({order: this.state.cart.find(item=>el._id===item._id)})}
                            key={el._id} {...el}/>)}
                        </div>
                    </div>
                </div>
        </div>

        <div className="modal fade" id="ordersModal" role="dialog" aria-labelledby="ordersModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ordersModalLabel">Orders</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.state.allOrders.filter(el=>this.state.user===el.username).map(el=><Order key={el._id} processed={el.processed} delivered={el.delivered} order={el.order} adress={el.adress} />)}
                        </div>
                    </div>
                </div>
        </div>

        <div className="modal fade" id="feedbackModalLong" tabIndex="-1" role="dialog" aria-labelledby="feedbackModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="feedbackModalLongTitle">Feedbacks</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {this.state.feedbacks.map(el=>el.like?<FeedbackLike key={el._id} {...el} />:<Feedback key={el._id} {...el} />)}
                    </div>
                </div>
            </div>
        </div>
        <NavBar />
        <span className="header-ayff">Changing the world for the better, start with your smartphone.</span>
        <HeaderCarousel />
        <span className="header-companys">All companies in our range of sales:</span>
        <Companys />
        <span className="header-filters">The entire range of our smartphones:</span>
        <div className="filters shadow-lg">
            <button className="btn btn-outline-light prettyButton1" onClick={()=>{this.defPrice()}}>Default</button>
            <button className="btn btn-outline-light prettyButton1" onClick={()=>{this.highPrice()}}>High</button>
            <button className="btn btn-outline-light prettyButton1" onClick={()=>{this.lowPrice()}}>Low</button>
            <select id="selectFiltres" className="form-control selectMain">
              <option>Price</option>
              <option>Company</option>
              <option>Model</option>
              <option>Something else here</option>
            </select>
            <input id="inputFiltres" className="form-control filterValueMain" placeholder="Value" onChange={()=>document.getElementById('inputFiltres').value!==''?this.applyFiltres():this.defPrice()} />
            {/* <button id="apply" className="btn btn-outline-light prettyButton1" >Apply</button> */}
        </div>
        <div className="phones">
          {this.state.phones.map(phone=><Phone key={phone._id} click={()=>this.state.user?this.state.cart.push(phone)&&fetch('http://localhost:4000/users').then(response=>response.json())
          .then(data=>data.find(el=>el.login===this.state.user)).then(data=>putFetchCart(data,this.state.cart)).then(this.setState({cart: this.state.cart})):alert('user undefined')} {...phone} />)}
        </div>
        <div className="feedbacks shadow-lg">
          <div className="form-group">
            <label>Do you like the site or organizational work of staff (or reverse)? Leave a review!</label>
            <textarea className="form-control" id="feedback" aria-describedby="feedbackHelp" rows="3" placeholder="Enter your feedback"></textarea>
            <small id="feedbackHelp" className="form-text text-muted">Be careful, reviews are NOT allowed to be edited.</small>
            <input type="checkbox" id="checkLike" />
            <label className="form-check-label">Like</label>
          </div>
          <button onClick={()=>window.confirm('Are u sure?')?this.state.user?postFetchFeedback(document.getElementById('feedback').value,this.state.user,this.state.feedbacks.length>0?this.state.feedbacks.reduce((prev,el)=>prev._id>el._id?prev:el)._id+1:1,document.getElementById('checkLike').checked):alert('user undefined'):0}>Send</button>
        </div>
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default Home;