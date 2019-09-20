import {combineReducers} from 'redux';
import calendarReducer from './calendar';
import reminderReducer from './reminder';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  reminders: reminderReducer
});

export default rootReducer;