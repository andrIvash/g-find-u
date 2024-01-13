describe('SimpleInput Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('renders the input field', () => {
      cy.get('[data-testid="SimpleInput"]').should('exist');
    });
  
    it('accepts input', () => {
      const typedText = 'Hello, World!';
      cy.get('[data-testid="SimpleInput"] input').type(typedText).should('have.value', typedText);
    });
  
    it('handles props correctly', () => {
      cy.get('[data-testid="SimpleInput"] label').should('contain', 'Enter username');
    });
  
    it.skip('triggers onChange event on input', () => {
      cy.get('[data-testid="SimpleInput"] input').type('New Value');
      cy.url().should('contain', 'New Value');
    });
  });