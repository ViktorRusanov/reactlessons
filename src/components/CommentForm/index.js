import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class CommentForm extends Component {
    static propTypes = {};
    state = {
        user: '',
        text: ''
    }

    render() {
        const { user, text } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                user: <input type="text" value={user}
                             onChange={this.handleChange('user')}
                             className={this.getClassName('user')} />
                comment: <input type="text" value={text}
                                onChange={this.handleChange('text')}
                                className={this.getClassName('text')} />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
    handleSubmit = ev => {
        this.setState({
            user: '',
            text: ''
        })
    }
    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min
    ? 'form-input__error' : '';

    handleChange = type => ev => {
        const { value } = ev.target;
        if(value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        max: 30,
        min: 10
    },
    text: {
        max: 150,
        min: 30
    }
}

export default CommentForm;