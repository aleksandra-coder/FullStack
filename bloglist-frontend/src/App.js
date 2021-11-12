/* eslint-disable linebreak-style */
import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  // const [newBlog, setNewBlog] = useState('')
  // const [newAuthor, setNewAuthor] = useState('')
  // const [newUrl, setNewUrl] = useState('')

  const [ message, setMessage] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const blogFormRef = useRef()


  useEffect(() => {
    blogService
      .getAll()
      .then(blogs =>
        setBlogs( blogs )
      )
  }, [])


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  // adding a blog
  const addBlog = async (blogObject) => {

    try {
      blogFormRef.current.toggleVisibility()
      const newBlog = await blogService.create(blogObject)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      setBlogs(blogs.concat(newBlog))
      setMessage({
        title: `Blog '${newBlog.title}' was created`,
        type: 'success'
      })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } catch (exception) {
      setMessage({
        title: 'Blog not created',
        type: 'error'
      })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  // 5.8 adding likes to a blog
  const addLikes = async (blogObject) => {
    try {
      const newLike = await blogService.update(blogObject.id, blogObject)
      blogService.getAll()
      setBlogs(
        blogs.map(blog =>
          (blog.id !== newLike.id ? blog : newLike))
      )
      setMessage({
        title: 'New like was added',
        type: 'success'
      })
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    } catch (exception) {
      setMessage({
        title: 'Like not added',
        type: 'error'
      })
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
  }


  // 5.9 sorting by number of likes
  const sortLikes = () => {
    blogs.sort((a,b) => b.likes - a.likes)
    console.log(blogs)
  }

  // 5.10 delete blog
  const removeBlog = (id, title) => {

    if (window.confirm(`Do you want to delete the blog '${title}'?`) ) {
      blogService
        .remove(id)
        .then(deletedBlog => {
          setBlogs(blogs.filter(blog => blog.id !== id ? blog : !deletedBlog))
          console.log('blog deleted', title)
          setMessage({
            title: `Blog '${title}' was succesfully deleted`,
            type: 'success'
          })
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        })
        .catch (error => {
          setMessage({
            title: 'Blog was already deleted',
            type: 'error'
          })
          console.log(error)
          setTimeout(() => {
            setMessage(null)
          }, 3000)
          setBlogs(blogs.filter(b => b.id !== id))
        })
    }
  }


  //  The method for handling the login:
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      // saving the login details to local storage:
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      setMessage({
        title: 'Login succesful',
        type: 'success'
      }
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } catch (exception) {
      setMessage({
        title: 'Wrong credentials',
        type: 'error'
      })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  // handling logout:
  const handleLogout = async (event) => {
    event.preventDefault()

    try {
      window.localStorage.clear()
      window.localStorage.removeItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      setUser(null)
      setMessage({
        title: 'Succesfully logged out',
        type: 'success'
      })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } catch (exception) {
      setMessage({
        title: 'cannot logout',
        type: 'error'
      })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }


  const blogForm = () => (
    <Togglable buttonLabel='new blog' ref={blogFormRef}>
      <BlogForm createBlog={addBlog} />
    </Togglable>
  )

  return (
    <>
      <div>
        {user === null ?
          <div>
            <Notification message={message}/>
            <LoginForm
              handleLogin={handleLogin}
              handleUsernameChange={({ target }) => setUsername(target.value)}
              handlePasswordChange={({ target }) => setPassword(target.value)}
              password={password}
              username={username}
            />
          </div> :
          <div>
            <h2>Blogs</h2>
            <Notification message={message} />
            <p>{user.name} logged in <button type="submit" onClick={handleLogout}>logout</button></p>
            {blogForm()}
            {sortLikes()}
            {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} addLikes={addLikes} user={user} removeBlog={removeBlog}/>
            )}
          </div>
        }
      </div>
    </>
  )

}

export default App
