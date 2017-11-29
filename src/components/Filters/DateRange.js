import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeDateRange } from '../../AC';
import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {};

    handleDayClick = (day) => {
        const { changeDateRange, range } = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range));
    }

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div>
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
                {selectedRange}
                <div onClick={this.handleResetClick}>Очистить дату</div>
            </div>
        );
    }
}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange })(DateRange);