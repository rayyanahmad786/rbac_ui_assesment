import { mockApi } from './mockApi';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
];

export const userApi = {
  getUsers: () => mockApi.get(mockUsers),
  createUser: (user) => mockApi.post(user),
  updateUser: (user) => mockApi.put(user),
  deleteUser: (id) => mockApi.delete(id),
};
