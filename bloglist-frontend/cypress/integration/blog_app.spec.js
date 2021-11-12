/* eslint-disable linebreak-style */
describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Adam',
      username: 'adam',
      password: 'sekret'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })
  // ex 5.17 application displays the login form by default
  it('Login form is shown', function() {
    cy.get('form')
    // cy.contains('Log in to application')
    // cy.contains('username')
    // cy.contains('password')
    // cy.contains('login')
  })


  // ex 5.18
  describe('Login', function() {
    it('succeeds with correct credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('adam')
      cy.get('#password').type('sekret')
      cy.get('#login-button').click()

      cy.contains('Adam logged in')
    })

    it('fails with wrong credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('adam')
      cy.get('#password').type('wrong')
      cy.get('#login-button').click()

      cy.get('#error')
        .should('contain', 'Wrong credentials')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border-style', 'solid')
    })
  })

  //   ex 5.19
  describe('When logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'adam', password: 'sekret' })
    })

    it('A blog can be created', function() {
      cy.contains('new blog').click()
      cy.get('#title').type('The cypress blog')
      cy.get('#author').type('Ola')
      cy.get('#url').type('www.blog.fi')
      cy.contains('create').click()
      cy.contains('The cypress blog')
    })

    describe('and a blog exists', function () {
      beforeEach(function () {
        cy.createBlog({
          title: 'The new cypress blog',
          author: 'Paul',
          url: 'www.blog.fi'
        })
      })
      // ex 5.20
      it('blog can get a like', function () {
        cy.contains('The new cypress blog')
          .contains('view')
          .click()
        cy.contains('add likes')
          .contains('like')
          .click()
      })
      // ex 5.21
      it('blog can be deleted', function () {
        cy.contains('The new cypress blog')
          .contains('view')
          .click()
        cy.contains('The new cypress blog')
        cy.get('#delete').click()

      })
    })

    describe('and more blogs exist', function () {
      beforeEach(function () {
        cy.createBlog({ title: 'The new cypress blog', author: 'Paul', url: 'www.blog.fi' })
        cy.createBlog({ title: 'First blog', author: 'User', url: 'www.first.fi' })
        cy.createBlog({ title: 'Another blog', author: 'Second', url: 'www.another.fi' })
        cy.createBlog({ title: 'New blog', author: 'New', url: 'www.new.fi' })
      })

      it('can be displayed', function () {
        cy.contains('The new cypress blog')
        cy.contains('First blog')
        cy.contains('Another blog')
        cy.contains('New blog')
      })
    })
  })

})