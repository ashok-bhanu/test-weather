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
            var {temp, temp_max, temp_min} = response.body.main;
            cy.writeFile("weatherDetailsFromAPI.json", {temp, temp_max, temp_min})
        })
    }

}

export default new endpoints