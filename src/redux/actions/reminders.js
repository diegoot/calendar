import {ADD_REMINDER, EDIT_REMINDER, REMOVE_REMINDER} from './types';

export const addReminder = (date, color, text) => ({
  type: ADD_REMINDER,
  date,
  color,
  text
});

export const editReminder = (id, date, color, text) => ({
  type: EDIT_REMINDER,
  id,
  date,
  color,
  text
});

export const removeReminder = id => ({
  type: REMOVE_REMINDER,
  id
});