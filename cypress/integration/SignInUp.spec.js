/// <reference types="cypress" />
import Chance from 'chance';
const chance = new Chance();

describe('LoggingAndSigning', () => {
    const adminMail = 'dr@gmail.com'
const userMail = 'dr2@gmail.com'
const allPass ='abcdef'

    it('Sign up user with correct data', () => {
        const email = chance.email();
        const pass = 'ValidPassword23';
        cy.visit('http://localhost:4200/signup');   
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(pass);        
        cy.get('input[name=create]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Account was created`)
          })
    });
    it('Try to Sign up user with too short password', () => {
        const email = chance.email();
        const pass = '12';
        cy.visit('http://localhost:4200/signup');  
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(pass);        
        cy.get('input[name=create]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Password should be at least 6 characters`)
          })
    });

    it('Try to Sign up user with wrongly formated email', () => {
        const email = 'dr';
        const pass = 'ValidPassword23';
        cy.visit('http://localhost:4200/signup');  
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(pass);        
        cy.get('input[name=create]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.contain(`The email address is badly formatted`)
          })
    });

    it('Try To Sign up user with email that already has account', () => {
        const pass = 'ValidPassword23';
        cy.visit('http://localhost:4200/signup');  
        cy.get('input[name=email]').type(userMail);
        cy.get('input[name=password]').type(pass);        
        cy.get('input[name=create]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.contain(`The email address is already in use by another account.`)
          })
    });

    it('Sign in as Admin', () => {
        cy.visit('http://localhost:4200/signin');   
        cy.get('input[name=email]').type(adminMail);
        cy.get('input[name=password]').type(allPass);        
        cy.get('input[type=submit]').click();
        cy.url().should('include', 'trips');
        cy.contains('Add trip');
    });

    it('Sign in as User', () => {
        cy.visit('http://localhost:4200/signin');  
        cy.get('input[name=email]').type(userMail);
        cy.get('input[name=password]').type(allPass);        
        cy.get('input[type=submit]').click();
        cy.url().should('include', 'trips');
        cy.contains('Cart');
    });

    it('Try To Sign in with wrongly formated email', () => {
        const email = 'drm';
        const pass = 'ValidPassword23';
        cy.visit('http://localhost:4200/signin');
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(pass);        
        cy.get('input[type=submit]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.contain(`The email address is badly formatted`)
          })
    });

    it('Try To Sign in without giving password', () => {
        cy.visit('http://localhost:4200/signin');
        cy.get('input[name=email]').type(userMail);       
        cy.get('input[type=submit]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.contain(`The password is invalid or the user does not have a password.`)
          })
    });
    it('Try To Sign in wrong password', () => {
        cy.visit('http://localhost:4200/signin');
        cy.get('input[name=email]').type(userMail);
        cy.get('input[name=password]').type('wrong');        
        cy.get('input[type=submit]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.contain(`The password is invalid or the user does not have a password.`)
          })
    });
    it('Log out', () => {
        cy.visit('http://localhost:4200/signin');
        cy.get('input[name=email]').type(userMail);
        cy.get('input[name=password]').type(allPass);        
        cy.get('input[type=submit]').click();
        cy.url().should('include', 'trips');
        cy.contains('Sign Out').click();        
        cy.contains('Sign In');
    });
    
    

});