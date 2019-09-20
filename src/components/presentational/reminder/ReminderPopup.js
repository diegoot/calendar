import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import './ReminderPopup.css';

const ReminderPopup = ({visible, items, onClose, onRemoveItem, isEditable}) => {
    const popupClassNames = classnames(
      'reminderPopup',
      {
        'reminderPopup--hidden': !visible
      }
    );

    return (
      <div className={popupClassNames}>
        {
          <div className="reminderPopup_details">
            <div onClick={onClose}>X</div>
            <h1>Reminders</h1>
            <ul>
              {
                items.map(item => {
                  const reminder = (isEditable)
                    ? (
                      <li key={item.id}>
                        <button onClick={() => onRemoveItem(item.id)}>x</button> <Link to={`/editreminder/${item.id}`} style={{color: item.color}}>{item.text}</Link>
                      </li>
                    )
                    : <li key={item.id} style={{color: item.color}}>{item.text}</li>

                  return reminder;
                })
              }
              {items.length === 0 && 'There are no reminders'}
            </ul>
          </div>
        }
      </div>
    );
};

ReminderPopup.propTypes = {
  visible: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired
};

export default ReminderPopup;