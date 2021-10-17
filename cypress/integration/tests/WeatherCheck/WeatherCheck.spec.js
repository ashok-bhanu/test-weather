import homePage from '../../../pages/home.js';
import searchResult from '../../../pages/searchResult';
import api from '../../../api/endpoints'
import env from '../../../data/environment.js';
import utils from '../../../functions/utils'

describe('Weather comparison', () =>{

    let targetCity;

    before(() => {
        targetCity = Cypress.env('targetCity')
    });

    // ------> Accessing weather details from UI

    it('Navigate to Page', () => {
        homePage.navigateToPage(env.url);
    });

    it("Search a city", () => {
        homePage.searchCity(targetCity);
    });

    it("Get weather deatils", () => {
        searchResult.getCurrentTemp()
        searchResult.getMaxTemp()
        searchResult.getMinTemp()
    });

    // -------> Accessing weather details from API endpoint

    it('Get weather details of City from API', () => {
        api.getWeatherDetailsByCity(targetCity);
    })

    // -------> Compare the details

    it('Compare weather details from sources', () => {
        utils.weatherComparer();
        cy.wait(5000)
    })
})