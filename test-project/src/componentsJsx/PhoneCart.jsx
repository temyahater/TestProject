import React from 'react';

const PhoneCart =({model, description, price, image, removePhone, phoneProp})=>{
    return (
        <div className="phone shadow-lg card">
            <img className="card-img-top" src={image} alt="Phone"/>
                <div className="card-body">
                    <h5 className="card-title">{model}</h5>
                    <p className="card-text">{description}</p>
                    <input type="button" href="#" className="btn btn-danger prettyButtonPrimary" value={price+'$'} onClick={phoneProp} data-toggle="modal" data-target="#paymentModal" data-dismiss="modal"/>
                    <button className="btn btn-outline-dark ml-5" onClick={removePhone}>Remove</button>
                </div>
        </div>
    );
}

export default PhoneCart;