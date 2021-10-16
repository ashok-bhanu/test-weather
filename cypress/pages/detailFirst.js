class DetailFirst {
    get temp() {
        return cy.get('div[class="temp"]');
    }

    getCurrentTemp() {
        this.temp.eq(0).invoke('text').then(text => {
            text = text.split("°")[0];
            cy.writeFile("weatherDetailsFromUI.json", {temp: text})
        })
    }

    getMaxTemp() {
        this.temp.eq(1).invoke('text').then(text => {
            cy.readFile("weatherDetailsFromUI.json").then(value => {
                value.temp_max = text.split("°")[0];
                cy.writeFile("weatherDetailsFromUI.json", value)
            })
        })
    }

    getMinTemp() {
        this.temp.eq(2).invoke('text').then(text => {
            cy.readFile("weatherDetailsFromUI.json").then(value => {
                value.temp_min = text.split("°")[0];
                cy.writeFile("weatherDetailsFromUI.json", value)
            })
            cy.wait(5000);
        })
    }
}

export default new DetailFirst