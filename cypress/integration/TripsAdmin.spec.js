/// <reference types="cypress" />
import Chance from 'chance';
const chance = new Chance();

describe('Managing trips by admin', () => {
    const adminMail = 'dr@gmail.com'
    const allPass ='abcdef'


    it('Add Trip', () => {
        const name = chance.string()
        cy.login(adminMail,allPass);
        cy.contains('Add trip').click();
        cy.get('input[formControlName=name]').type(name);
        cy.get('input[formControlName=destination]').type(chance.string());        
        cy.get('input[formControlName=description]').type(chance.string());
        cy.get('input[formControlName=photo]').type(chance.url());        
        cy.get('input[formControlName=startDate]').type('2020-10-10');        
        cy.get('input[formControlName=endDate]').type('2020-12-10');
        cy.get('input[formControlName=price]').type(Math.abs(chance.integer()));        
        cy.get('input[formControlName=limit]').type(Math.abs(chance.integer()));     
        //cy.get('button[type=submit]').click();
        cy.contains('Our offer').click();      
    });

    it('Delete Trip', () => {
        cy.login(adminMail,allPass);
        //cy.get('button[name=delete]').first().click();
    });

    it('See trips', () => {
        cy.login(adminMail,allPass);
        cy.get('div[id=trip]');
    });

    it('See detailed trip', () => {
        cy.login(adminMail,allPass);
        cy.get('img').first().click();        
        cy.url().should('include', 'trip');
        cy.get('div[id=detailed-trip');
    });

    it('View comments', () => {
        const txt= chance.string();
        cy.login(adminMail,allPass);
        cy.get('img').first().click();
        cy.get('ul[class=media-list]');
    });

    
    

});