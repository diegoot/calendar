import initialState from './initialState';
import moment from 'moment';
import {INIT_CALENDAR, CHANGE_MONTH} from 'redux/actions/types';

const calendar = (state = initialState.calendar, action) => {
  switch (action.type) {
    case INIT_CALENDAR:
      const today = moment();
      const months = [];

      for(let i = 0; i < 12; i++) {
        const firstDayGivenMonth = moment(new Date(today.year(), i, 1));

        months.push({
          name: firstDayGivenMonth.format('MMMM'),
          number: i, //Months in JS are 0-based
          daysAmount: firstDayGivenMonth.daysInMonth(),
          firstWeekDay: firstDayGivenMonth.day()
        });
      }

      return Object.assign(
        {},
        state,
        {
          months,
          today,
          activeMonth: today.month()
        }
        );
    case CHANGE_MONTH:
      return Object.assign(
        {},
        state,
        {
          activeMonth: action.month
        }
      );
    default:
      return state;
  }
}

export default calendar;