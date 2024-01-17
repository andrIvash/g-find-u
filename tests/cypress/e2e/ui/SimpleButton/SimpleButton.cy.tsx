describe('SimpleButton Component', () => {
    beforeEach(() => {
        cy.visit('/'); 
    });
  
    it('renders the button', () => {
        cy.get('[data-testid="SimpleButton"]').should('be.visible'); 
    });
  });