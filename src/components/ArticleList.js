import React, { Component } from 'react';
import Article from './Article/index';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

class ArticleList extends Component {

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props;
        const articleElements = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleOpen={toggleOpenItem(article.id)}
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
    articles: PropTypes.array.isRequired,
    // from accordion decorator
    openItemId: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
};

export default accordion(ArticleList);