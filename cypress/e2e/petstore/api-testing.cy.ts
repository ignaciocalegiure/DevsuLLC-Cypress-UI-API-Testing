import { postUser, getUser, updateUser, deleteUser } from "../model";

describe('Pet store - Api Testing - User crud', () => {
    it('Create User', () => {
        cy.fixture("postUserBody").then((body: postUser)=>{
            const options = {
                method: "POST",
                url: `${Cypress.env("petStore")}/user`,
                headers: {
                    api_key: `${Cypress.env("api_key")}`
                },
                body 
            };
            cy.request(options).then((response)=> {
                cy.log('response',response);
                cy.log('status code validation').then(()=> {
                    expect(response.status).to.be.equal(200)
                    expect(response.statusText).to.be.equal('OK')
                });
            }) 
        })
    });

    it('Get User created', () => {
        cy.fixture("getUserResponseBody").then((responseBody: getUser)=>{
            const options = {
                method: "GET",
                url: `${Cypress.env("petStore")}/user/${responseBody.username}`,
                headers: {
                    api_key: `${Cypress.env("api_key")}`
                },
            };
            cy.request(options).then((response)=> {
                cy.log('response',response);
                cy.log('status code validation').then(()=> {
                    expect(response.status).to.be.equal(200)
                    expect(response.statusText).to.be.equal('OK')
                    expect(response.body.username).to.be.equal(responseBody.username)
                    expect(response.body.firstName).to.be.equal(responseBody.firstName)
                    expect(response.body.lastName).to.be.equal(responseBody.lastName)
                    expect(response.body.email).to.be.equal(responseBody.email)
                    expect(response.body.password).to.be.equal(responseBody.password)
                    expect(response.body.phone).to.be.equal(responseBody.phone)
                    expect(response.body.userStatus).to.be.equal(responseBody.userStatus)
                    cy.wrap(response.body.id).as("userId")
                });
            })    
        });
    });

    it('Update User',function () {
        cy.fixture("updateUserBody").then((update: updateUser)=>{
            update.body.id = this.userId;
            const options = {
                method: "PUT",
                url: `${Cypress.env("petStore")}/user/${update.username}`,
                headers: {
                    api_key: `${Cypress.env("api_key")}`
                },
                body: update.body 
            };
            cy.request(options).then((response)=> {
                cy.log('response',response);
                cy.log('status code validation').then(()=> {
                    expect(response.status).to.be.equal(200)
                    expect(response.statusText).to.be.equal('OK')
                });
            }) 
        })
    });

    // quitar el skip para tener una corrida exitosa, 
    // elimina el usuario duplicado original y deja el modificado en el put anterior.
    it.skip('Delete User', () => {
        cy.fixture("deleteUser").then((user: deleteUser)=>{
            const options = {
                method: "DELETE",
                url: `${Cypress.env("petStore")}/user/${user.username}`,
                headers: {
                    api_key: `${Cypress.env("api_key")}`
                },
            };
            cy.request(options).then((response)=> {
                cy.log('response',response);
                cy.log('status code validation').then(()=> {
                    expect(response.status).to.be.equal(200)
                    expect(response.statusText).to.be.equal('OK')
                });
            })    
        }); 
    });

    it('Get User updated', () => {
        cy.fixture("getUserUpdatedResponseBody").then((responseBody: getUser)=>{
            const options = {
                method: "GET",
                url: `${Cypress.env("petStore")}/user/${responseBody.username}`,
                headers: {
                    api_key: `${Cypress.env("api_key")}`
                },
            };
            cy.request(options).then((response)=> {
                cy.log('response',response);
                cy.log('status code validation').then(()=> {
                    expect(response.status).to.be.equal(200)
                    expect(response.statusText).to.be.equal('OK')
                    expect(response.body.username).to.be.equal(responseBody.username)
                    expect(response.body.firstName).to.be.equal(responseBody.firstName)
                    expect(response.body.lastName).to.be.equal(responseBody.lastName)
                    expect(response.body.email).to.be.equal(responseBody.email)
                    expect(response.body.password).to.be.equal(responseBody.password)
                    expect(response.body.phone).to.be.equal(responseBody.phone)
                    expect(response.body.userStatus).to.be.equal(responseBody.userStatus)
                });
            })    
        }); 
    });

    it('Delete User', () => {
        cy.fixture("deleteUser").then((user: deleteUser)=>{
            const options = {
                method: "DELETE",
                url: `${Cypress.env("petStore")}/user/${user.username}`,
                headers: {
                    api_key: `${Cypress.env("api_key")}`
                },
            };
            cy.request(options).then((response)=> {
                cy.log('response',response);
                cy.log('status code validation').then(()=> {
                    expect(response.status).to.be.equal(200)
                    expect(response.statusText).to.be.equal('OK')
                });
            })    
        }); 
    });
});