import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import './ReminderForm.css';

class ReminderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: props.date,
      color: props.color,
      text: props.text,
      isRedirected: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const {date, color, text} = this.state;

    if (!date || !color || !text) return;

    this.props.onSubmit(date, color, text);

    this.setState({isRedirected: true});
  }

  handleCancel() {
    this.setState({isRedirected: true})
  }

  render() {
    const {minDate, maxDate, title} = this.props;
    const {date, color, text, isRedirected} = this.state;

    if (isRedirected) {
      return <Redirect to="/"/>
    }

    return (
      <div className="reminderForm">
        <h1 className="reminderForm_title">{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="reminderForm_row">
            <label htmlFor="date">Date: </label>
            <input id="date" type="date" name="date" onChange={this.handleChange}
              min={minDate} max={maxDate} value={date}/>
          </div>

          <div className="reminderForm_row">
            <label htmlFor="color">Color: </label>
            <input id="color" type="color" name="color" onChange={this.handleChange}
              value={color}/>
          </div>

          <div className="reminderForm_row">
            <label htmlFor="text">Text: </label>
            <input id="text" type="text" name="text" onChange={this.handleChange}
              placeholder="Reminder's text here" value={text} maxLength="30"/>
          </div>

          <div className="reminderForm_row">
            <button type="submit">Confirm</button>
            <button type="button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
};

ReminderForm.defaultProps = {
  color: "#000000",
  text: "",
  title: "Add new reminder"
};

ReminderForm.propTypes = {
  title: PropTypes.string,
  minDate: PropTypes.string.isRequired,
  maxDate: PropTypes.string.isRequired,
  date: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default ReminderForm;