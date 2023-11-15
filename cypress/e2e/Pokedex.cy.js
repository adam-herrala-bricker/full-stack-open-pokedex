describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo!')
  })

  it('can open chlorophyll', function() {
    cy.contains('metapod').click()
    cy.contains('Hidden ability')
    cy.contains('shed skin')
  })
})

