import React, { Component } from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

class ArticleList extends Component {

    render() {
        const { articles, openArticleId, toggleOpen, isOpen } = this.props;
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openArticleId && isOpen}
                    toggleOpen={toggleOpen(article.id)}
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
    article: PropTypes.array.isRequired,
    openArticleId: PropTypes.bool,
    toggleOpen: PropTypes.bool,
    isOpen: PropTypes.bool
};

export default accordion(ArticleList);