import uuid from 'uuid';
import initialState from './initialState';
import {ADD_REMINDER, EDIT_REMINDER, REMOVE_REMINDER} from 'redux/actions/types';
import moment from 'moment';

const reminder = (state = initialState.reminders, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return [
        {
          id: uuid(),
          date: moment(action.date, 'YYYY-MM-DD'),
          color: action.color,
          text: action.text
        },
        ...state
      ];
    case EDIT_REMINDER:
      const remindersWithoutEditedItem = state.filter(reminder => reminder.id !== action.id);

      return [
        {
          id: action.id,
          date: moment(action.date, 'YYYY-MM-DD'),
          color: action.color,
          text: action.text
        },
        ...remindersWithoutEditedItem
      ];
    case REMOVE_REMINDER:
      return state.filter(reminder => reminder.id !== action.id);
    default:
      return state;
  }
}

export default reminder;