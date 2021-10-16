import homePage from '../../../pages/home.js'

import env from '../../../data/environment.js'

describe('Weather comparison', () =>{

    let targetCity

    before(() => {
        targetCity = Cypress.env('targetCity')
    })

    it('Navigate to Page', () =>{
        homePage.navigateToPage(env.url);
    })

    it("Search a city", () => {
        homePage.searchCity(targetCity);
    })
})