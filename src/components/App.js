import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList";
import UserForm from './UserForm';
import DayPicker, { DateUtils } from 'react-day-picker'
import Select from 'react-select';
import moment from 'moment';
import 'react-select/dist/react-select.css';
import 'react-day-picker/lib/style.css';

class App extends Component {
    static propTypes = {};

    state = {
        selected: null,
        from: null,
        to: null
    }

    render() {
        const { from, to } = this.state;
        const { articles } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <UserForm />
                <Select options={options} onChange={this.handleSelect} value={this.state.selected} />
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
                <div onClick={this.handleResetClick}>Очистить дату</div>
                <div>Выбраны даты с {moment(from).format('L') || ''} по {moment(to).format('L') || ''}</div>
                <ArticleList articles={this.props.articles} />
            </div>
        )
    }
    handleSelect = selected => this.setState({ selected });
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range)
        console.log('range: ', range);
        console.log('from: ', this.state.from);
        console.log('to: ', this.state.to);
    }
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }
}

export default App;