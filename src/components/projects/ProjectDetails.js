import React from 'react'
import { useParams } from 'react-router-dom'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const ProjectDetails = (props) => {
  useFirestoreConnect([{ collection: 'projects' }])
  const { id } = useParams()
  const project = useSelector((state) => {
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return project
  })

  return (
    <>
      {project ? (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>2nd September, 2am</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="center container">
          <p>Loading...</p>
        </div>
      )}
    </>
  )
}

export default ProjectDetails
