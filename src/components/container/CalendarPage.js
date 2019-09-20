import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Calendar from 'components/presentational/calendar/Calendar';
import {removeReminder} from 'redux/actions/reminders';
import {changeMonth} from 'redux/actions/calendar';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);

    this.boundActionCreators = bindActionCreators(
      {removeReminder, changeMonth},
      props.dispatch
    );
  }

  render() {
    const {calendar:{months, today, activeMonth}, reminders} = this.props;

    //The default months array is null
    if(!months) return null;

    const month = months[activeMonth];
    const monthlyReminders = reminders.filter(reminder =>
      reminder.date.month() === activeMonth);

    return (
      <Calendar month={month} reminders={monthlyReminders}
        onRemoveReminder={this.boundActionCreators.removeReminder}
        onChangeMonth={this.boundActionCreators.changeMonth} today={today}/>
    );
  }
}

const mapStateToProps = state => ({
  calendar: state.calendar,
  reminders: state.reminders
});

CalendarPage.propTypes = {
  calendar: PropTypes.object.isRequired,
  reminders: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(CalendarPage);