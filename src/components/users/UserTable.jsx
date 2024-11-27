import React from 'react';
import Table from '../common/Table';

const UserTable = ({ users, onEdit, onDelete }) => {
  const headers = ['ID', 'Name', 'Email', 'Role', 'Status'];

  const actions = [
    {
      label: 'Edit',
      type: 'primary',
      onClick: onEdit,
    },
    {
      label: 'Delete',
      type: 'danger',
      onClick: onDelete,
    },
  ];

  return (
    <div>
      <h2>Users</h2>
      <Table headers={headers} data={users} actions={actions} />
    </div>
  );
};

export default UserTable;
    