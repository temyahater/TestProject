import React from 'react';

const FeedbackLikeAdmin =({username, feedback, deleteFeedback})=>{
    return (
        <div className="feedbackModalLike">
            <span>{username}</span>
            <div>{feedback}</div>
            <button className="btn btn-success feedbackDelete mt-2" onClick={deleteFeedback}>Delete</button>
            <hr></hr>
        </div>
    );
}

export default FeedbackLikeAdmin;