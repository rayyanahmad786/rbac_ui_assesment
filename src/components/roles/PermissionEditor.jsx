import React from 'react';

const PermissionEditor = ({ selectedPermissions, onChange }) => {
  const availablePermissions = ['Read', 'Write', 'Delete', 'Manage'];

  const handleToggle = (permission) => {
    const updatedPermissions = selectedPermissions.includes(permission)
      ? selectedPermissions.filter((p) => p !== permission)
      : [...selectedPermissions, permission];

    onChange(updatedPermissions);
  };

  return (
    <div>
      {availablePermissions.map((permission) => (
        <label key={permission} style={{ marginRight: '10px' }}>
          <input
            type="checkbox"
            checked={selectedPermissions.includes(permission)}
            onChange={() => handleToggle(permission)}
          />
          {permission}
        </label>
      ))}
    </div>
  );
};

export default PermissionEditor;
