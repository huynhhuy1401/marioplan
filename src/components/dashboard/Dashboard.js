import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

const Dashboard = () => {
  useFirestoreConnect([{ collection: 'projects' }])
  const projects = useSelector((state) => state.firestore.ordered.projects)

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
