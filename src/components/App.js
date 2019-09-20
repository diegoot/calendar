import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import store from 'redux/configureStore';
import CalendarPage from 'components/container/CalendarPage';
import AddReminderPage from 'components/container/AddReminderPage';
import EditReminderPage from 'components/container/EditReminderPage';
import {initCalendar} from 'redux/actions/calendar';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(initCalendar());
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" render={() => <Redirect to="/calendar" />} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/addreminder" component={AddReminderPage} />
          <Route path="/editreminder/:id" component={EditReminderPage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;