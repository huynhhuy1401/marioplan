import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {
  useFirestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  ])
  const projects = useSelector((state) => state.firestore.ordered.projects)
  const auth = useSelector((state) => state.firebase.auth)
  const notifications = useSelector(
    (state) => state.firestore.ordered.notifications
  )
  return (
    <>
      {auth.uid ? (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications} />
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  )
}

export default Dashboard
