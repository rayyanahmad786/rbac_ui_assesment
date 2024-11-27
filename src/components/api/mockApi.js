export const mockApi = {
    get: (data) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(data), 500);
      }),
    post: (newData) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(newData), 500);
      }),
    put: (updatedData) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(updatedData), 500);
      }),
    delete: (id) =>
      new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, id }), 500);
      }),
  };
  