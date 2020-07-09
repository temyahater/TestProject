import React from 'react';

const Feedback =({username, feedback})=>{
    return (
        <div className="feedbackModal">
            <span>{username}</span>
            <div>{feedback}</div>
            <hr></hr>
        </div>
    );
}

export default Feedback;