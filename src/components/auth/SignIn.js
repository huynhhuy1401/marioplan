import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const authErr = useSelector((state) => state.auth.authErr)
  const auth = useSelector((state) => state.firebase.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      signIn({
        email,
        password,
      })
    )
  }

  return (
    <>
      {auth.isEmpty ? (
        <div className="container">
          <form className="white" onSubmit={handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Login</button>
              <div className="red-text center">
                {authErr && <p>{authErr}</p>}
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}

export default SignIn
