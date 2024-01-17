describe('HomePage Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });
  
    it('should render the home page with all components', () => {
        cy.get('[data-testid="HomePage"]').should('exist');
        cy.get('.homePage__searchInput').should('exist');
        cy.get('.homePage__submit').should('exist');
    });

    it('should allow typing in the search input', () => {
        const typedText = 'Hello, World!';
        cy.get('[data-testid="SimpleInput"] input').type(typedText).should('have.value', typedText);
    });

    it('should expand accordion item on click', () => {
        const typedText = 'test';
        cy.get('[data-testid="SimpleInput"] input').type(typedText).should('have.value', typedText);
        cy.get('[data-testid="SimpleButton"] button').click();
        cy.wait(2000);
        cy.get('[data-testid="accordion-item"]').first().as('firstAccordionItem');
        cy.get('@firstAccordionItem').should('not.have.class', 's-acco__item--expanded');
        cy.get('@firstAccordionItem').click();
        cy.get('@firstAccordionItem').should('have.class', 's-acco__item--expanded');
        cy.get('@firstAccordionItem').find('.s-acco__details').should('be.visible');
    });

    it('should close accordion item on click', () => {
        const typedText = 'test';
        cy.get('[data-testid="SimpleInput"] input').type(typedText).should('have.value', typedText);
        cy.get('[data-testid="SimpleButton"] button').click();
        cy.wait(2000);
        cy.get('[data-testid="accordion-item"]').first().as('firstAccordionItem');
        cy.get('@firstAccordionItem').should('not.have.class', 's-acco__item--expanded');
        cy.get('@firstAccordionItem').click();
        cy.get('@firstAccordionItem').should('have.class', 's-acco__item--expanded');
        cy.wait(2000)
        cy.get('[data-testid="accordion-itemheader"]').first().as('firstAccordionItemHeader');
        cy.get('@firstAccordionItemHeader').click();
        cy.get('@firstAccordionItem').should('not.have.class', 's-acco__item--expanded');
    });
});