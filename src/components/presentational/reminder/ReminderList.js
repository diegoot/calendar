import React from 'react';
import PropTypes from 'prop-types';
import ReminderPopup from 'components/presentational/reminder/ReminderPopup';
import {VISIBLE_REMINDERS_BY_DAY} from 'utils/constants';
import './ReminderList.css';

class ReminderList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state= {isDetailsVisible: false};

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState(state => ({isDetailsVisible: !state.isDetailsVisible}));
  }

  render() {
    const {items, onRemoveItem, isEditable} = this.props;
    const {isDetailsVisible} = this.state;
    const itemsPartials = items.slice(0, VISIBLE_REMINDERS_BY_DAY);

    return (
      <React.Fragment>
        <ul className="reminderList">
          {
            itemsPartials.map(item =>
              <li key={item.id} style={{color: item.color}} className="reminderList_item">
                {item.text}
              </li>
            )
          }
          {items.length > 0 &&
            <li onClick={this.togglePopup} className="reminderList_more">More</li>}
        </ul>
        <ReminderPopup visible={isDetailsVisible} items={items}
          onClose={this.togglePopup} onRemoveItem={onRemoveItem}
          isEditable={isEditable}/>
      </React.Fragment>
    );
  }
};

ReminderList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired
};

export default ReminderList;