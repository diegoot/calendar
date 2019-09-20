import {INIT_CALENDAR, CHANGE_MONTH} from './types';

export const initCalendar = () => ({
  type: INIT_CALENDAR
});

export const changeMonth = (currentMonth, isForward) => ({
  type: CHANGE_MONTH,
  month: (isForward) ? currentMonth + 1 : currentMonth - 1
});