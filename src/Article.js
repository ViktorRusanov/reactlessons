import React, { Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }
    render() {
        const { article } = this.props;
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        );
    }
    getBody() {
        if (!this.state.isOpen) return null;
        return (
            <div>
                <p>{this.props.article.text}</p>
                <CommentList comments={this.props.article.comments || []} />
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article;