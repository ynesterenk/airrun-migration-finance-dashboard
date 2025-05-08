describe('CrossAssetMonitor', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/assets', { fixture: 'assets.json' }).as('getAssets');
    cy.visit('/');
  });

  it('displays the Cross-Asset Monitor plugin', () => {
    cy.contains('Cross-Asset Monitor').should('be.visible');
  });

  it('shows asset data in the table', () => {
    cy.wait('@getAssets');
    cy.get('table').within(() => {
      cy.contains('th', 'Asset').should('be.visible');
      cy.contains('th', 'Price').should('be.visible');
      cy.contains('th', 'Change').should('be.visible');
      
      cy.contains('td', 'AAPL').should('be.visible');
      cy.contains('td', 'GOOGL').should('be.visible');
    });
  });

  it('handles loading state', () => {
    cy.intercept('GET', '/api/assets', (req) => {
      req.on('response', (res) => {
        res.setDelay(1000);
      });
    }).as('delayedAssets');

    cy.visit('/');
    cy.contains('Loading...').should('be.visible');
    cy.wait('@delayedAssets');
    cy.contains('Loading...').should('not.exist');
  });

  it('handles error state', () => {
    cy.intercept('GET', '/api/assets', { statusCode: 500, body: 'Server Error' }).as('errorAssets');
    cy.visit('/');
    cy.wait('@errorAssets');
    cy.contains('Error:').should('be.visible');
  });
});