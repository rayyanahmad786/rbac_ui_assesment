import React, { useState, useEffect } from 'react';
import PermissionEditor from './PermissionEditor';

const RoleForm = ({ initialData, onSubmit, onCancel }) => {
  const [role, setRole] = useState({
    id: '',
    name: '',
    description: '',
    permissions: [],
  });

  useEffect(() => {
    if (initialData) {
      setRole(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRole((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionsChange = (permissions) => {
    setRole((prev) => ({ ...prev, permissions }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(role);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Role Name:</label>
        <input
          type="text"
          name="name"
          value={role.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={role.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Permissions:</label>
        <PermissionEditor
          selectedPermissions={role.permissions}
          onChange={handlePermissionsChange}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default RoleForm;
