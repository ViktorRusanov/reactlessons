import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Article.PropTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }).isRequired,
};

export default Article;