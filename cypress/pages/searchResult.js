class ResultPage {
    get temp() {
        return cy.get('div[class="temp"]');
    }

    getCurrentTemp() {
        this.temp.eq(0).invoke('text').then(text => {
            text = Number(text.split("°")[0]);
            cy.writeFile("weatherDetailsFromUI.json", {temp: text})
        })
    }

    getMaxTemp() {
        this.temp.eq(1).invoke('text').then(text => {
            cy.readFile("weatherDetailsFromUI.json").then(value => {
                value.temp_max = Number(text.split("°")[0]);
                cy.writeFile("weatherDetailsFromUI.json", value)
            })
        })
    }

    getMinTemp() {
        this.temp.eq(2).invoke('text').then(text => {
            cy.readFile("weatherDetailsFromUI.json").then(value => {
                value.temp_min = Number(text.split("°")[0]);
                cy.writeFile("weatherDetailsFromUI.json", value)
            })
            cy.wait(5000);
        })
    }
}

export default new ResultPage