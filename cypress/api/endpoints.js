import env from '../data/environment'

class endpoints {

    getWeatherDetailsByCity(targetCity) {
        cy.request({
            url: `data/${env.apiVersion}/weather`,
            qs: {
                q: targetCity,
                appid: env.apiToken,
                units: 'metric'
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            cy.readFile("weatherDetailsFromUI.json").then(value => {
                cy.log(response.body.main.temp, value.temp)
            })
        })
    }

}

export default new endpoints