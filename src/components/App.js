import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList";
import UserForm from './UserForm';
import Counter from './Counter';
import Filters from './Filters/index';

class App extends Component {
    static propTypes = {};

    render() {
        const { articles } = this.props;
        return (
            <div>
                <Counter />
                <UserForm />
                <Filters />
                <ArticleList />
            </div>
        )
    }
}

export default App;