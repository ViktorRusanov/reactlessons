import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm/index';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    render() {
        const { isOpen, toggleOpen } = this.props;
        return(<div>
            <button onClick={toggleOpen}>{isOpen ? 'show' : 'hide'}</button>
            {this.getBody()}
            <CommentForm />
        </div>)
    }
    getBody() {
        const { comments, isOpen } = this.props;
        if (!isOpen) {
            if(!comments.length) return <h3>No comments yet</h3>;
            return (
                <div>
                    {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
                </div>
            )
        }
    }
}

CommentList.PropTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    comments:PropTypes.array,
    defaultProps: PropTypes.shape({
        comments: PropTypes.array
    })
};

export default toggleOpen(CommentList);