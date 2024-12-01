import React, { useState } from 'react';
import './action.css';  // Importing the CSS file

function ActionLauncher () {
  const [actions, setActions] = useState([
    'Fee Reversal',
    'Retail Onboarding',
    'Address Update',
  ]);
  const [newAction, setNewAction] = useState('');

  const handleAddAction = () => {
    if (newAction) {
      setActions([...actions, newAction]);
      setNewAction('');
    }
  };

  return (
    <div className="app-container">
      <h1 className='action-head'>Action Launcher</h1>

      <hr class="custom-line"></hr>
      <div className="search-container">
        <input
          type="text"
          value={newAction}
          onChange={(e) => setNewAction(e.target.value)}
          placeholder="Search actions..."
          className="search-input"
        />
       
      </div>
      <div className="action-buttons">
         <button className="add-action-btn" onClick={handleAddAction}>
          <span>+ Add Action</span>
        </button>
        {actions.map((action, index) => (
          <button key={index} className="action-btn">
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionLauncher;