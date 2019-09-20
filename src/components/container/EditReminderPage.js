import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import ReminderForm from 'components/presentational/reminder/ReminderForm';
import {editReminder} from 'redux/actions/reminders';

class EditReminderPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditReminder = this.handleEditReminder.bind(this);
  }

  handleEditReminder(date, color, text) {
    const {dispatch, match} = this.props;

    dispatch(editReminder(match.params.id, date, color, text));
  }

  render() {
    const {calendar, reminders, match} = this.props;
    const reminder = reminders.find(reminder => reminder.id === match.params.id);

    if(!calendar.today || !reminder) return null;

    const reminderDate = reminder.date.format('YYYY-MM-DD');
    const minDate = calendar.today.format('YYYY-MM-DD');
    const maxDate = moment(reminder.date).endOf('month').format('YYYY-MM-DD');

    return (
      <ReminderForm date={reminderDate} minDate={minDate} maxDate={maxDate} color={reminder.color} text={reminder.text} onSubmit={this.handleEditReminder} cancel/>
    );
  }
}

const mapStateToProps = state => ({
  calendar: state.calendar,
  reminders: state.reminders
});

EditReminderPage.propTypes = {
  calendar: PropTypes.object.isRequired,
  reminders: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(EditReminderPage);