import homePage from '../../../pages/home.js'
import detailFirstPage from '../../../pages/detailFirst'
import env from '../../../data/environment.js'

describe('Weather comparison', () =>{

    let targetCity

    before(() => {
        targetCity = Cypress.env('targetCity')
    })

    // ------> Accessing weather details from UI

    it('Navigate to Page', () => {
        homePage.navigateToPage(env.url);
    })

    it("Search a city", () => {
        homePage.searchCity(targetCity);
    })

    it("Get weather deatils", () => {
        detailFirstPage.getCurrentTemp()
        detailFirstPage.getMaxTemp()
        detailFirstPage.getMinTemp()
    })

    it("show saved values", () => {
        detailFirstPage.checkValue()
    })
})