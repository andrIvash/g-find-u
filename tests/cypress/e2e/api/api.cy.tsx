import { LOADER_MESSAGE, ERROR_LOADED_MESSAGE } from '../../../../src/resources/constants';

describe('Api Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should make a network request to fetch users', () => {
        cy.intercept('GET', '**/search/users*').as('fetchUsers');

        const typedText = 'test';
        cy.get('[data-testid="SimpleInput"] input').type(typedText).should('have.value', typedText);
        cy.get('[data-testid="SimpleButton"] button').click();
        
        cy.wait('@fetchUsers').its('response.statusCode').should('eq', 200);
    });

    it('should make a network request to fetch repositories', () => {
        cy.intercept('GET', '**/repos*').as('fetchRepos');

        const typedText = 'test';
        cy.get('[data-testid="SimpleInput"] input').type(typedText).should('have.value', typedText);
        cy.get('[data-testid="SimpleButton"] button').click();

        cy.wait(2000);
        cy.get('[data-testid="accordion-item"]').first().as('firstAccordionItem');
        cy.get('@firstAccordionItem').should('not.have.class', 's-acco__item--expanded');
        cy.get('@firstAccordionItem').click();

        cy.wait('@fetchRepos').its('response.statusCode').should('eq', 200);
    });

    it('should show loading message when fetching data', () => {
        cy.intercept('GET', '**/search/users*', { delay: 500 }).as('fetchUsersDelayed');

        const typedText = 'test';
        cy.get('[data-testid="SimpleInput"] input').type(typedText).should('have.value', typedText);
        cy.get('[data-testid="SimpleButton"] button').click();

        cy.get('[data-testid="homepage-content"]').should('contain', LOADER_MESSAGE);
    });

    it('should display an error message on a failed fetch', () => {
        cy.intercept('GET', '**/search/users*', { statusCode: 500 }).as('fetchUsersFail');

        const typedText = 'test';
        cy.get('[data-testid="SimpleInput"] input').type(typedText).should('have.value', typedText);
        cy.get('[data-testid="SimpleButton"] button').click();

        cy.get('[data-testid="homepage-content"]').should('contain', ERROR_LOADED_MESSAGE);
    });
});