import HelloWorld from './HelloWorld.vue'

describe('<HelloWorld>', () => {
  it('mounts', () => {
    cy.mount(HelloWorld)
  })
})