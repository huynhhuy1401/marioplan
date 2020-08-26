export const createProject = (project) => {
  return (dispatch, getState, getFirebase) => {
    // make async call to database
    const firestore = getFirebase().firestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project })
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', error })
      })
  }
}
