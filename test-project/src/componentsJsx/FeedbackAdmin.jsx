import React from 'react';

const FeedbackAdmin =({username, feedback, deleteFeedback})=>{
    return (
        <div className="feedbackModal">
            <span>{username}</span>
            <div>{feedback}</div>
            <button className="btn btn-danger feedbackDelete mt-2" onClick={deleteFeedback}>Delete</button>
            <hr></hr>
        </div>
    );
}

export default FeedbackAdmin;