import React from 'react';

const FeedbackLike =({username, feedback})=>{
    return (
        <div className="feedbackModalLike">
            <span>{username}</span>
            <div>{feedback}</div>
            <hr></hr>
        </div>
    );
}

export default FeedbackLike;