/* eslint-disable linebreak-style */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

// ex 5.16 test for the new blog form
test('<BlogForm /> calls the eventhandler when the blog is created', () => {
  const createBlog = jest.fn()

  const component = render(
    <BlogForm createBlog={createBlog} />
  )

  component.debug()

  const author = component.container.querySelector('#author')
  const content = component.container.querySelector('#content')
  const url = component.container.querySelector('#url')
  const form = component.container.querySelector('form')

  fireEvent.change(author, {
    target: { value: 'Aleksandra' }
  })
  fireEvent.submit(form)

  fireEvent.change(content, {
    target: { value: 'My first blog test' }
  })
  fireEvent.submit(form)

  fireEvent.change(url, {
    target: { value: 'www.myblog.com' }
  })
  fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(3)
  expect(createBlog.mock.calls[0][0].author).toBe('Aleksandra')
  expect(createBlog.mock.calls[1][0].title).toBe('My first blog test')
  expect(createBlog.mock.calls[2][0].url).toBe('www.myblog.com')
})