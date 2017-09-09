import React from 'react';

function CommentList({comments}) {
    const commentElement = comments.map(comment => <li key={comment.id}><h3>user: {comment.user}</h3>{comment.text}</li>);
    return(
        <ul>
            {commentElement}
        </ul>
    );
}

export default CommentList;