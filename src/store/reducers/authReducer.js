const initState = {
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: 'login failed' }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_SUCCESS':
      return state
    default:
      return state
  }
}

export default authReducer
