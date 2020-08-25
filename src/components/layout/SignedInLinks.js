/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a
            onClick={() => {
              dispatch(signOut())
            }}
          >
            Log Out
          </a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SignedInLinks
