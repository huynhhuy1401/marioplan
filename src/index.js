import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './configs/fbConfig'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(getFirebase))
)

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
