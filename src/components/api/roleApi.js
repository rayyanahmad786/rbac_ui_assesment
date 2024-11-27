import { mockApi } from './mockApi';

const mockRoles = [
  {
    id: 1,
    name: 'Admin',
    description: 'Administrator with full access',
    permissions: ['Read', 'Write', 'Delete', 'Manage'],
  },
  {
    id: 2,
    name: 'Editor',
    description: 'Editor with limited permissions',
    permissions: ['Read', 'Write'],
  },
];

export const roleApi = {
  getRoles: () => mockApi.get(mockRoles),
  createRole: (role) => mockApi.post(role),
  updateRole: (role) => mockApi.put(role),
  deleteRole: (id) => mockApi.delete(id),
};
