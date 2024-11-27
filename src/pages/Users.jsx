import React, { useContext, useState } from 'react';
import { AppContext } from '../components/context/AppContext';
import UserTable from '../components/users/UserTable';
import UserActions from '../components/users/UserActions';
import Modal from '../components/common/Modal';
import UserForm from '../components/users/UserForm';

const Users = () => {
  const { state, dispatch } = useContext(AppContext); // Access global state and dispatch
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Open the modal to add a new user
  const handleAddUser = () => {
    setCurrentUser(null);
    setModalOpen(true);
  };

  // Open the modal to edit an existing user
  const handleEditUser = (user) => {
    setCurrentUser(user);
    setModalOpen(true);
  };

  // Remove a user
  const handleDeleteUser = (id) => {
    dispatch({ type: 'REMOVE_USER', payload: id });
  };

  // Save a user (add or update)
  const handleSaveUser = (user) => {
    if (user.id) {
      // Update existing user
      dispatch({ type: 'UPDATE_USER', payload: user });
    } else {
      // Add new user
      const newUser = { ...user, id: Date.now() };
      dispatch({ type: 'ADD_USER', payload: newUser });
    }
    setModalOpen(false);
  };

  // Close the modal without saving
  const handleCancel = () => {
    setModalOpen(false);
  };

  // Refresh the user list (dummy action)
  const handleRefresh = () => {
    alert('User list refreshed!');
  };

  return (
    <div>
      <UserActions onAddUser={handleAddUser} onRefresh={handleRefresh} />
      <UserTable users={state.users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      <Modal isOpen={modalOpen} onClose={handleCancel}>
        <UserForm initialData={currentUser} onSubmit={handleSaveUser} onCancel={handleCancel} />
      </Modal>
    </div>
  );
};

export default Users;
    