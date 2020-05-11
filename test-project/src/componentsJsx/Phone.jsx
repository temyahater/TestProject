import React from 'react';

function test(test){
    console.log(test);
}

const Phone =({model, description, price, image})=>{
    return (
        <div className="phone shadow-lg card" style={{width: '250px',height:'80%', marginTop:'2%'}}>
            <img className="card-img-top" src={image} alt="Phone"/>
            <div className="card-body">
                <h5 className="card-title">{model}</h5>
                <p className="card-text">{description}</p>
                <input type="button" href="#" className="btn btn-outline-primary" value={price+'$'} onClick={()=>{test(price)}}/>
            </div>
        </div>
    );
}

export default Phone;