import env from '../data/environment'

class Utils {

    varienceEvaluator(element1, element2) {
        var varience = Math.abs(element1 - element2)
        return varience > env.varienceThreshold ? true : false; 
    }

    comparer(file1, file2) {
        for (const property in file1) {
            if (file2[property]){
                if (file2[property] === file1[property]) {
                    cy.log(`${property} is identical`)
                } else {
                    var varience = this.varienceEvaluator(file2[property], file1[property])
                    varience && cy.log(`${property} crossed the threshold`)
                }
            } else {
                throw new Error(`${property} is missing`)
            }
        }
    }
    
    weatherComparer() {
        cy.readFile("weatherDetailsFromUI.json").then(value => {
            const UIFile = value;
            cy.readFile("weatherDetailsFromAPI.json").then(text => {
                const APIFile = text;
                this.comparer(UIFile, APIFile)
            })
        })
    }
}

export default new Utils