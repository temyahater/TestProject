import React, { Component } from 'react';
import NavBar from './componentsJsx/NavBar';
import Phone from './componentsJsx/Phone';
import Footer from './componentsJsx/Footer';
import Carousel from './componentsJsx/Carousel';
import HeaderCarousel from './componentsJsx/HeaderCarousel';
import Companys from './componentsJsx/Companys';

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

let a=[];

function test(){
  fetch('phones.json').then(response=>{return response.json();}).then(data => a=data);
  console.log(a);
}

class App extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); 
    this.state = { phones: [], sort: false};
  }

  handleClick(){
    this.setState((state,props)=>{
      return {phones: sortHighPrice(state.phones)};
    });
  }

  defPrice(){
    this.setState({phones: a});
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

  componentDidMount(){
    fetch('phones.json').then(response=>{return response.json();}).then(data =>{this.setState({phones: data})});
    console.log('phonesDidMount');
  }
  
  render(){
    return(
      <div className="App" onClick={()=>{console.log(this.state); test();}}>
        <NavBar />
        <span className="header-ayff">Changing the world for the better, start with your smartphone.</span>
        <HeaderCarousel />
        <span className="header-companys">All companies in our range of sales:</span>
        <Companys />
        <span className="header-filters">The entire range of our smartphones:</span>
        <div className="filters shadow-lg">
            <button className="btn btn-light" onClick={()=>{this.defPrice()}}>testDef</button>
            <button className="btn btn-light" onClick={()=>{this.highPrice()}}>testHigh</button>
            <button className="btn btn-light" onClick={()=>{this.lowPrice()}}>testLow</button>
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filters
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item">Price</button>
                <button className="dropdown-item">Company</button>
                <button className="dropdown-item">Something else here</button>
              </div>
            </div>
            <input className="form-control" placeholder="value" />
            <button id="apply" className="btn btn-outline-light">Apply</button>
        </div>
        <div className="phones">
          {
            this.state.phones.map((phone,i)=>{
              return <Phone key={i} {...phone} />
            })
          }
        </div>
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default App;
