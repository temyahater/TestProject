import React, { Component } from 'react';

class Companys extends Component {
    // constructor(props){
    //   super(props);
    // }
  
    render(){
  
      return (
        <div className="companys shadow-lg">
            <div>
                <img src="images/samsung.png" alt="samsung" />
            </div>
            <div>
                <img src="images/apple.png" alt="apple" />
            </div>
            <div>
                <img src="images/huawei.png" alt="huawei" />
            </div>
            <div>
                <img src="images/honor.png" alt="honor" />
            </div>
            <div>
                <img src="images/xiaomi.png" alt="xiaomi" />
            </div>
            <div>
                <img src="images/pixel.png" alt="pixel" />
            </div>
            <div>
                <img src="images/plus.png" alt="plus" />
            </div>
        </div>
      );
    }
  }
  
  export default Companys;