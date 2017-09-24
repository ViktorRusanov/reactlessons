import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    state = {
        isOpen: false
    };

    static defaultProps = {
        comments: []
    };

    render() {
        const { isOpen } = this.state;
        return(<div>
            <button onClick={this.handleClick}>{isOpen ? 'show' : 'hide'}</button>
            {this.getBody()}
        </div>)
    }
    getBody() {
        if (!this.state.isOpen) {
            const { comments } = this.props;
            if(!comments.length) return <h3>No comments yet</h3>;
            return (
                <div>
                    {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
                </div>
            )
        }
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList;