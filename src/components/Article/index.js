import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

class Article extends Component {

    render() {
        const { article, toggleOpen } = this.props;
        return (
            <div>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                <button onClick={this.deleteArticle}>Delete article</button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        );
    }
    deleteArticle = () => {
        const { handleDelete, article } = this.props;
        handleDelete(article.id);
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
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    handleDelete: PropTypes.func.isRequired
};

export default Article;