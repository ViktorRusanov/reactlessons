import React, { Component } from 'react';
import Article from './Article/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import accordion from '../decorators/accordion';
import { deleteArticle } from '../AC';
import { filteredArticlesSelector } from '../selectors';

class ArticleList extends Component {

    render() {
        const { articles, openItemId, toggleOpenItem, deleteArticle } = this.props;
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
                    handleDelete={deleteArticle}
                />
            </li>));
        return(
            <ul>
                {articleElements}
            </ul>
        );
    }
}

ArticleList.PropTypes = {
    // from connect
    deleteArticle: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired,
    // from accordion decorator
    openItemId: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
};

export default connect(
    (state) => ({
        articles: filteredArticlesSelector(state)
    }),
    { deleteArticle })
(accordion(ArticleList));