import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList";
import UserForm from './UserForm';
import Filters from './Filters/index';

class App extends Component {
    static propTypes = {};

    render() {
        const { articles } = this.props;
        return (
            <div>
                <UserForm />
                <Filters articles={articles} />
                <ArticleList articles={this.props.articles} />
            </div>
        )
    }
}

export default App;