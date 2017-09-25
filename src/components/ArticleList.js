import React, { Component } from 'react';
import Article from './Article';
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

export default accordion(ArticleList);