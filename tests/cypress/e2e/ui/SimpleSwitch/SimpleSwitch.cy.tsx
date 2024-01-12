describe('SimpleSwitch Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });
  
    it('renders the switch', () => {
        cy.get('.simpleSwitch').should('exist');
    });
  
    it('toggles the switch state on click', () => {
        cy.get('.simpleSwitch .MuiSwitch-input').as('switchInput');
        cy.get('@switchInput').should('not.be.checked');
        cy.get('@switchInput').click().should('be.checked');
    });
});