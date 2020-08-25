import React, { useState } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { useDispatch } from 'react-redux'

const CreateProject = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const createPrj = (project) => {
    dispatch(createProject(project))
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
  )
}

export default CreateProject
