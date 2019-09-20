import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import ReminderForm from 'components/presentational/reminder/ReminderForm';
import {addReminder} from 'redux/actions/reminders';

class AddReminderPage extends React.Component {
  constructor(props) {
    super(props);

    this.boundActionCreators = bindActionCreators({addReminder}, props.dispatch);
  }

  render() {
    const {calendar} = this.props;

    if(!calendar.today || !calendar.months) return null;

    let minDate;
    let maxDate;
  
    if(calendar.activeMonth > calendar.today.month()) {
      minDate = moment(new Date(calendar.today.year(), calendar.activeMonth, 1)).format('YYYY-MM-DD');
      maxDate = moment(minDate).endOf('month').format('YYYY-MM-DD');
    }
    else {
      minDate = calendar.today.format('YYYY-MM-DD');
      maxDate = moment(calendar.today).endOf('month').format('YYYY-MM-DD');
    }

    return (
      <ReminderForm date={minDate} minDate={minDate} maxDate={maxDate}
        onSubmit={this.boundActionCreators.addReminder} />
    );
  }
}

const mapStateToProps = state => ({
  calendar: state.calendar,
});

AddReminderPage.propTypes = {
  calendar: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(AddReminderPage);