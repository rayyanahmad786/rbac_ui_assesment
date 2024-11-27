import React from 'react';

const UserActions = ({ onAddUser, onRefresh }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={onAddUser} style={{ marginRight: '0.5rem' }}>
        Add User
      </button>
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
};

export default UserActions;
