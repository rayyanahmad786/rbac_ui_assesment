const appReducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
  
      case 'SET_USERS':
        return { ...state, users: action.payload };
  
      case 'ADD_USER':  
        return { ...state, users: [...state.users, action.payload] };
  
      case 'UPDATE_USER':
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        };
  
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
  
      case 'SET_ROLES':
        return { ...state, roles: action.payload };
  
      case 'ADD_ROLE':
        return { ...state, roles: [...state.roles, action.payload] };
  
      case 'UPDATE_ROLE':
        return {
          ...state,
          roles: state.roles.map((role) =>
            role.id === action.payload.id ? action.payload : role
          ),
        };
  
      case 'DELETE_ROLE':
        return {
          ...state,
          roles: state.roles.filter((role) => role.id !== action.payload),
        };
  
      case 'SET_ERROR':
        return { ...state, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default appReducer;
  