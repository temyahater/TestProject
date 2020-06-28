import React from 'react';
// import PrettyAlert from './PrettyAlert';

const Phone =({model, description, price, image, click})=>{
    return (
        <div className="phone shadow-lg card">
            {/* <PrettyAlert /> */}
            <img className="card-img-top prettyButton" src={image} alt="Phone"/>
            <div className="card-body">
                <h5 className="card-title">{model}</h5>
                <p className="card-text">{description}</p>
                <input type="button" data-toggle="modal" data-target="#prettyAlertModal" href="#" className="btn btn-danger prettyButtonPrimary" value={price+'$'} onClick={click}/>
            </div>
        </div>
    );
}

export default Phone;