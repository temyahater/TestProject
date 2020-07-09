import React from 'react';

const Order =({processed, delivered, order, adress})=>{
    return (
        <div className="orderModal">
            <span className="orderOrder">{order}</span>
            <div>{processed?<span style={{color: 'green'}}>Processed </span>:<span style={{color: 'rgb(201, 36, 36)'}}>Not processed </span>} 
            & {delivered?<span style={{color: 'green'}}>Delivered </span>:<span style={{color: 'rgb(201, 36, 36)'}}>Not delivered </span>}</div>
            <span>{adress}</span>
            <hr></hr>
        </div>
    );
}

export default Order;