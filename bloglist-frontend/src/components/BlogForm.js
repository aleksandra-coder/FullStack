/* eslint-disable linebreak-style */
import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [blog, setBlog] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')


  const handleNewBlog = (event) => {
    setBlog(event.target.value)
  }

  const handleNewAuthor = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleNewUrl = (event) => {
    setNewUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()

    createBlog({
      title: blog,
      author: newAuthor,
      url: newUrl
    })
    setBlog('')
    setNewAuthor('')
    setNewUrl('')

  }



  return (
    <>
      <h2>Create new</h2>
      <div className='formDiv'>
        <form onSubmit={addBlog}>
          <div>
          title
            <input
              id='title'
              value={blog}
              name="blog"
              onChange={handleNewBlog}
            />
          </div>
          <div>
          author
            <input
              id='author'
              value={newAuthor}
              name="newAuthor"
              onChange={handleNewAuthor}
            />
          </div>
          <div>
          url
            <input
              id='url'
              value={newUrl}
              name="newUrl"
              onChange={handleNewUrl}
            />
          </div>
          <button type="submit">create</button>
        </form>
      </div>
    </>
  )

}

export default BlogForm
