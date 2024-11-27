import React, { useContext, useState } from 'react';
import RoleTable from '../components/roles/RoleTable';
import RoleForm from '../components/roles/RoleForm';
import UserActions from '../components/users/UserActions';
import Modal from '../components/common/Modal';
import { AppContext } from '../components/context/AppContext';

const Roles = () => {
  const { state, dispatch } = useContext(AppContext); // Access global state and dispatch
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const handleAddRole = () => {
    setCurrentRole(null);
    setModalOpen(true);
  };

  const handleEditRole = (role) => {
    setCurrentRole(role);
    setModalOpen(true);
  };

  const handleDeleteRole = (role) => {
    dispatch({ type: 'REMOVE_ROLE', payload: role.id }); // Dispatch action to remove role
  };

  const handleSaveRole = (role) => {
    if (role.id) {
      // Edit existing role
      dispatch({ type: 'EDIT_ROLE', payload: role });
    } else {
      // Add new role
      const newRole = { ...role, id: state.roles.length + 1 };
      dispatch({ type: 'ADD_ROLE', payload: newRole });
    }
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleRefresh = () => {
    alert('Role list refreshed!');
  };

  return (
    <div>
      {/* Action buttons for adding and refreshing roles */}
      <UserActions onAddUser={handleAddRole} onRefresh={handleRefresh} />

      {/* Role table displaying roles from the global state */}
      <RoleTable
        roles={state.roles} // Use roles from the global store
        onEdit={handleEditRole}
        onDelete={handleDeleteRole}
      />

      {/* Modal for adding or editing a role */}
      <Modal isOpen={modalOpen} onClose={handleCancel}>
        <RoleForm
          initialData={currentRole}
          onSubmit={handleSaveRole}
          onCancel={handleCancel}
        />
      </Modal>
    </div>
  );
};

export default Roles;
