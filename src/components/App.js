import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList";
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {
    static propTypes = {};

    state = {
        selected: null
    }

    render() {
        const { articles } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <UserForm />
                <Select options={options} onChange={this.handleSelect} value={this.state.selected} />
                <ArticleList articles={this.props.articles} />
            </div>
        )
    }
    handleSelect = selected => this.setState({ selected });
}

export default App;