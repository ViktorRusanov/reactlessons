import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class CommentForm extends Component {
    static propTypes = {};
    state = {
        username: '',
        usernameClass: '',
        comment: '',
        commentClass: ''
    }

    render() {
        const { username, usernameClass, comment, commentClass } = this.state;
        return (
            <div>
                username: <input type="text" value={username} onChange={this.handleChangeUsername} className={usernameClass} />
                comment: <input type="text" value={comment} onChange={this.handleChangeComment} className={commentClass} />
                <button onClick={this.handleSendComment}>Send comment</button>
            </div>
        );
    }
    handleChangeUsername = ev => {
        if (ev.target.value.length < 10) {
            this.setState({
                usernameClass: 'invalid'
            })
        } else if (ev.target.value.length >= 10) {
            this.setState({
                usernameClass: ''
            })
        }
        if (ev.target.value.length > 30) return;
        this.setState({
            username: ev.target.value
        })
    }
    handleChangeComment = ev => {
        if (ev.target.value.length < 30) {
            this.setState({
                commentClass: 'invalid'
            })
        } else if (ev.target.value.length >= 10) {
            this.setState({
                commentClass: ''
            })
        }
        if (ev.target.value.length > 150) return;
        this.setState({
            comment: ev.target.value
        })
    }
    handleSendComment = () => {
        const { username, comment } = this.state;
        console.log(`username: ${username}`);
        console.log(`comment: ${comment}`);
    }
}

export default CommentForm;