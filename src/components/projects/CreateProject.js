import React, { useState } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

const CreateProject = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  let history = useHistory()

  const auth = useSelector((state) => state.firebase.auth)
  const dispatch = useDispatch()

  const createPrj = (project) => {
    dispatch(createProject(project))
    history.push('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProject = {
      title,
      content,
    }
    createPrj(newProject)
  }

  return (
    <>
      {auth.uid ? (
        <div className="container">
          <form className="white" onSubmit={handleSubmit}>
            <h5 className="grey-text text-darken-3">Create a New Project</h5>
            <div className="input-field">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="title">Project Title</label>
            </div>
            <div className="input-field">
              <textarea
                id="content"
                value={content}
                className="materialize-textarea"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <label htmlFor="content">Project Content</label>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1">Create</button>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  )
}

export default CreateProject
