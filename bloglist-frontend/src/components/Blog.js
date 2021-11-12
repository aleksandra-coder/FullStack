/* eslint-disable linebreak-style */
import React, { useState } from 'react'


// 5.10 delete button added for blogs created by user
const RemoveBtn = ( { user, blog, removeBlog }) => {
  return user.name !== blog.user.name
    ? null
    :
    <div>
      <button type='submit' id='delete' onClick={ () =>
        removeBlog(blog.id, blog.title)}>delete</button>
    </div>

}

const ViewBlog = ( { blog, handleLikes }) => {
  return (
    <>
      <div className='viewblog'>
        <li>
          {blog.url}
        </li>
        <li>
     add likes: {blog.likes} <button onClick={handleLikes}>like</button>
        </li>
        <li>
          {blog.author}
        </li>
      </div>
    </>
  )
}

const Blog = ({ blog, user, removeBlog, addLikes }) => {
  const [showBlog, setShowBlog] = useState(false)
  // const [blogObject, setBlogObject] = useState(blog)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  // ex 5.7 adding button to show/hide information about blogs
  const hideWhenVisible = { display: showBlog ? 'none' : '' }
  const showWhenVisible = { display: showBlog ? '' : 'none' }

  const handleShowBlog = () => {
    setShowBlog(!showBlog)
  }

  const handleLikes = () => {
    const blogLikes = { ...blog, likes: blog.likes + 1, id: blog.id }
    addLikes(blogLikes)
  }

  if (showBlog === true) {
    return (
      <>
        <div style={blogStyle}>
          <div>
            {blog.title} , {blog.author}
            <button style={hideWhenVisible} onClick={handleShowBlog}>view</button>
            <button style={showWhenVisible} onClick={handleShowBlog}>hide</button>
          </div >
          <div className='blog'>
            <ViewBlog blog={blog} user={user} handleLikes={handleLikes}/>
            <p>{user.name}</p>
            <RemoveBtn removeBlog={removeBlog} blog={blog} user={user}></RemoveBtn>
          </div>
        </div>

      </>
    )
  }


  return (
    <div style={blogStyle}>
      <div className='blog'>
        {blog.title} , {blog.author}
        <button style={hideWhenVisible} onClick={handleShowBlog}>view</button>
        <button style={showWhenVisible} onClick={handleShowBlog}>hide</button>
      </div>
    </div>
  )
}


export default Blog