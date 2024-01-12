describe('SimpleButton Component', () => {
    beforeEach(() => {
        cy.visit('/'); 
    });
  
    it('renders the button', () => {
        cy.get('[data-testid="SimpleButton"]').should('be.visible'); 
    });
  
    it.skip('clicks the button and triggers action', () => {
        cy.get('[data-testid="SimpleButton" > button').click();
        // After clicking, add assertions based on what is supposed to happen
        // For example, if clicking the button shows a modal, you should check for the modal's visibility
        // cy.get('.your-modal-class').should('be.visible');
    });
  });