import React, { Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {

    render() {
        const { article, toggleOpen } = this.props;
        return (
            <div>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        );
    }
    getBody() {
        const { article, isOpen } = this.props;
        if (!isOpen) return null;
        return (
            <div>
                <p>{article.text}</p>
                <CommentList comments={article.comments || []} />
            </div>
        )
    }
}

export default Article;