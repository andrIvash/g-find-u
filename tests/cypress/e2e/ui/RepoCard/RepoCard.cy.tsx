describe('RepoCard Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });
  
    it('renders the RepoCard component', () => {
        cy.get('.repoCard').should('exist');
    });
  
    it('displays the title and links to the repository', () => {
        cy.get('.repoCard__link')
            .should('not.be.empty')
            .and('have.attr', 'href');
    });

    it('shows the number of stars', () => {
        cy.get('.repoCard__stars').contains(/^[0-9]*$/)
    });
  
    it('displays the language and time', () => {
        cy.get('.repoCard__lang').should('not.be.empty');
        cy.get('.repoCard__time').should('not.be.empty');
    });
});