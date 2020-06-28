import React from 'react';

const PhoneCart =({model, description, price, image, click})=>{
    return (
        <div className="phone shadow-lg card">
            <img className="card-img-top" src={image} alt="Phone"/>
            <div className="card-body">
                <h5 className="card-title">{model}</h5>
                <p className="card-text">{description}</p>
                <input type="button" href="#" className="btn btn-danger prettyButtonPrimary" value={price+'$'} onClick={click}/>
            </div>
        </div>
    );
}

export default PhoneCart;