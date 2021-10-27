describe('Movie Cloud', () => {

  describe('Location? check.', () => {

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('cy.location() - get window.location', () => {
      // https://on.cypress.io/location
      cy.location().should((location) => {
        expect(location.hash).to.be.empty
        expect(location.href).to.eq('http://localhost:3000/search')
        expect(location.host).to.eq('localhost:3000')
        expect(location.hostname).to.eq('localhost')
        expect(location.origin).to.eq('http://localhost:3000')
        expect(location.pathname).to.eq('/search')
        expect(location.port).to.eq('3000')
        expect(location.protocol).to.eq('http:')
        expect(location.search).to.be.empty
      })
    })
  
    it('cy.url() - get the current URL', () => {
      cy.url().should('eq', 'http://localhost:3000/search')
    })
  })

  describe('Searching? check.', () => {
    const query = 'Jedi'
    let title;

    it('displays label & search field with empty value', () => {
      cy.get('#searchField').should('have.length', 1).first().should('have.value', '')
      cy.contains('Find your movie').should('have.length', 1).first().should('be.visible')
    })
  
    it('search results match the search query', () => {  
      cy.get('#searchField').type(`${query}{enter}`)
      cy.location().should((location) => {
        expect(location.pathname).to.eq(`/search/${query}`)
      })
      cy.get('[class^=serialTitle]').should(($span) => {
        title = $span.eq(0).text()
        expect($span.eq(0)).to.contain(query)
      })
    })

    it('correct movie page is displayed', () => {
      const link = cy.get('a[class^=itemLink]').eq(0);
      
      link.click().invoke('attr', 'href').then(href => {
        cy.location().should((location) => {
          expect(location.href).to.eq(`http://localhost:3000${href}`)
        })
      })
    })

    it('movie info is visible on the screen', () => {
      cy.get('[class^=movieDetails]').should('have.length', 1)
      cy.get('h1').should('have.length', 1).first().should('have.text', title)
    })
  })
})
