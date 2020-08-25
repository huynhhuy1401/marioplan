export const signIn = (credentials) => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' })
      })
      .catch((err) => {
        dispatch({ tyoe: 'LOGIN_ERROR', error: err })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      })
  }
}
