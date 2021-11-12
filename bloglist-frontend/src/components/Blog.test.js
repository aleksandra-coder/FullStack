/* eslint-disable linebreak-style */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

// describe('<Blog/>', () => {
//   let component
//   let mockHandler

//   beforeEach(() => {
//     const blog = {
//       title: 'My first blog test',
//       author: 'Aleksandra',
//       url: 'www.myblog.com',
//       likes: 10,
//       user: 'Adam'
//     }

//     const user = {
//       name: 'Adam'
//     }

//     const mockHandler = jest.fn()

//     const component = render(
//       <Blog blog={blog} handleShowBlog={mockHandler} user={user}/>
//     )

//     component.debug()
//   })

// ex 5.13 test checks that the component displaying a blog renders the blog's title and author
test('renders title and author', () => {
  const blog = {
    title: 'My first blog test',
    author: 'Aleksandra',
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'My first blog test', 'Aleksandra'
  )

  component.debug()
})
// ex 5.14 checks that the blog's url and number of likes are shown when the button is clicked
test('clicking the button shows blog url and number of likes', () => {
  const blog = {
    title: 'My first blog test',
    author: 'Aleksandra',
    url: 'www.myblog.com',
    likes: 10,
    user: 'Adam'
  }

  const user = {
    name: 'Adam'
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} handleShowBlog={mockHandler} user={user}/>
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  const element = component.getByText(
    'www.myblog.com',
    '10'
  )
  expect(element).toBeDefined()
  component.debug()

})
//ex5.15
test('by clicking the button twice, the event handler is called twice', () => {
  const blog = {
    title: 'My first blog test',
    author: 'Aleksandra',
    url: 'www.myblog.com',
    likes: 10,
    user: 'Adam'
  }

  const user = {
    name: 'Adam'
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} user={user} handleLikes={mockHandler} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  const addLikes = component.getByText('like')
  fireEvent.click(addLikes)
  fireEvent.click(addLikes)

  expect(mockHandler.mock.calls).toHaveLength(2)
  component.debug()
})






