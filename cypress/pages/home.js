class HomePage{

    get searchBox() {
        return cy.get('input[class="search-input"]');
    };

    get searchResult() {
        return cy.get('div[class="search-bar-result search-result"]');
    };

    navigateToPage(url) {
        cy.visit(url, {
            headers: {
              "Accept-Encoding": "gzip, deflate"
            }
        });
    };

    searchCity(city) {
        cy.log(Cypress.env('CITY'));
        this.searchBox
            .type(city)
            .should('have.value', city);
        
        this.searchResult.eq(0)
            .click();

        cy.wait(10000);
    }
}
export default new HomePage();