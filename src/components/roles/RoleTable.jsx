import React from 'react';
import Table from '../common/Table';

const RoleTable = ({ roles, onEdit, onDelete }) => {
  const headers = ['ID', 'Role Name', 'Permissions', 'Description'];

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

  const renderPermissions = (permissions) => permissions.join(', ');

  return (
    <div>
      <h2>Roles</h2>
      <Table
        headers={headers}
        data={roles.map((role) => ({
          ...role,
          permissions: renderPermissions(role.permissions),
        }))}
        actions={actions}
      />
    </div>
  );
};

export default RoleTable;
