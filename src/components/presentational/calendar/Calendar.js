import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import ReminderList from 'components/presentational/reminder/ReminderList';
import {DAY_NAMES, DAYS_PER_WEEK} from 'utils/constants';
import './Calendar.css';

const Calendar = ({month, reminders, onRemoveReminder, onChangeMonth, today}) => {
  const listItems = [];

  for(let i = 0; i < month.firstWeekDay; i++) {
    listItems.push(0);
  }
  for(let i = 1; i <= month.daysAmount; i++) {
    listItems.push(i);
  }

  const daysOfMonthInLastWeek = listItems.length % DAYS_PER_WEEK;

  if(daysOfMonthInLastWeek !== 0) {
    const missingDaysToWholeWeek = DAYS_PER_WEEK - daysOfMonthInLastWeek;

    for(let i = 0; i < missingDaysToWholeWeek; i++) {
      listItems.push(0);
    }
  }

  const calendarPrevClassNames = classnames(
    'calendar_prev',
    {'calendar_prev--hidden': month.number === 0}
  );
  const calendarNextClassNames = classnames(
    'calendar_next',
    {'calendar_next--hidden': month.number === 11}
  );

  return (
    <div className="calendar">
      <ul className="calendar_month">
        <li className={calendarPrevClassNames}
          onClick={() => onChangeMonth(month.number, false)}>
          &#10094;
        </li>
        <li className={calendarNextClassNames}
          onClick={() => onChangeMonth(month.number, true)}>
          &#10095;
        </li>
        <li>{month.name}</li>
      </ul>
      <ul className="calendar_dayNames">
        {DAY_NAMES.map((dayName, index) => <li key={index}>{dayName}</li>)}
      </ul>
      <ul className="calendar_dayNumbers">
        {listItems.map((dayNumber, index) => {
          const dayliReminders = (dayNumber !== 0)
            ? reminders.filter(reminder => reminder.date.date() === dayNumber)
            : [];

          return (
            <li className="calendar_day" key={index}>
              {dayNumber !== 0 && dayNumber}
              <ReminderList items={dayliReminders} onRemoveItem={onRemoveReminder}
                isEditable={month.number >= today.month()} />
            </li>
          );
        })}
      </ul>
      <div className="calendar_actions">
        {month.number >= today.month() &&
          <Link to="/addreminder">Add reminder</Link>}
      </div>
    </div>
  );
};

Calendar.propTypes = {
  month: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  reminders: PropTypes.array.isRequired,
  onRemoveReminder: PropTypes.func.isRequired,
  onChangeMonth: PropTypes.func.isRequired
};

export default Calendar;