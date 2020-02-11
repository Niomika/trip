/// <reference types="cypress" />
import Chance from 'chance';
const chance = new Chance();

describe('Managing trips by klient', () => {
    const userMail = 'dr2@gmail.com'
    const allPass ='abcdef'

    it('See trips', () => {
        cy.login(userMail,allPass);
        cy.get('div[id=trip]');
    });

    it('See detailed trip', () => {
        cy.login(userMail,allPass);
        cy.get('img').first().click();        
        cy.url().should('include', 'trip');
        cy.get('div[id=detailed-trip');
    });

    it('Reserve Trip Twice', () => {
        cy.login(userMail,allPass);
        cy.get('button[name="+"]').first().click();        
        cy.get('button[name="+"]').first().click();         
        cy.contains('Cart').click();          
        cy.url().should('include', 'cart'); 
        cy.get('app-shooping-cart-item');        
        //cy.get('input[title=Qty]').contains('2');
    });

    it('Reserve Trip Twice than change to one reservation', () => {
        cy.login(userMail,allPass);
        cy.get('button[name="+"]').first().click();        
        cy.get('button[name="+"]').first().click();
        cy.get('button[name="-"]').first().click();         
        cy.contains('Cart').click();          
        cy.url().should('include', 'cart');  
        cy.get('app-shooping-cart-item');       
        //cy.get('input[title=Qty]').contains('1');
    });

    it('Delete reservation', () => {
        cy.login(userMail,allPass);
        cy.get('button[name="+"]').first().click();        
        cy.contains('Cart').click();          
        cy.url().should('include', 'cart');                   
        cy.get('button[name=delete]').click();        
        cy.get('app-shooping-cart-item').should('not.exist');  
    });

    it('Buy trips', () => {
        cy.login(userMail,allPass);
        cy.get('button[name="+"]').first().click();       
        cy.contains('Cart').click();          
        cy.url().should('include', 'cart');
        cy.get('button[name=buy]').click();        
        cy.get('app-shooping-cart-item').should('not.exist');     
    });

    it('Comment on trip client bought', () => {
        const txt= chance.string();
        cy.login(userMail,allPass);
        cy.get('img').first().click();
        cy.get('textarea[name=comment]').type(txt);        
        cy.get('textarea[name=nick]').type(userMail);               
        cy.get('button[name=add]').click();
        cy.get('div[name=commenttext]').contains(txt);
    });

    it('Try to comment on trip client havent bought', () => {
        const txt= chance.string();
        cy.login(userMail,allPass);
        cy.get('img').last().click();
        cy.get('textarea[name=comment]').should('not.exist');        
        cy.get('textarea[name=nick]').should('not.exist');
    });  

    it('Try to comment with empty nick', () => {
        const txt= chance.string();
        cy.login(userMail,allPass);
        cy.get('img').first().click();
        cy.get('textarea[name=comment]').type(txt);              
        cy.get('button[name=add]').click();
        cy.get('div[name=commenttext]').contains(txt).should('not.exist');
    });

    it('Try to comment with empty comment text', () => {
        const txt= chance.string();
        cy.login(userMail,allPass);
        cy.get('img').first().click();
        cy.get('textarea[name=nick]').type(txt);              
        cy.get('button[name=add]').click();
        cy.get('strong[name=commentnick]').contains(txt).should('not.exist');
    });
    
    it('View comments', () => {
        const txt= chance.string();
        cy.login(userMail,allPass);
        cy.get('img').first().click();
        cy.get('ul[class=media-list]');
    });
    

});