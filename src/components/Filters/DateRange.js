import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {};

    state = {
        from: null,
        to: null
    }
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range)
    }

    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }

    render() {
        const { from, to } = this.state;
        return (
            <div>
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
                <div>Выбраны даты с {moment(from).format('L')} по {moment(to).format('L')}</div>
                <div onClick={this.handleResetClick}>Очистить дату</div>
            </div>
        );
    }
}

export default DateRange;