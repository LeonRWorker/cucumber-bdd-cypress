// Importação das expressões
import { expect } from "chai";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Prevenir possíveis erros
Cypress.on('uncaught:exception', (err, runnable) => {
   return false
})
// ----------------------------------------------------------
// TO-DO 01: Autenticação sem dados
// ----------------------------------------------------------
// Dado 
Given(/que o usuário acesse a página "([^"]+)"./, async () => {
    // Acessar página
    await cypress.visit('/')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Quando 
When(/o usuário clica no botão "Entrar"./, async () => {
    // Clicar no botão entrar
    await cy.xpath('//input[@type="submit"]').click()
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Entao 
Then(/será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', 'Não foi possível realizar a autenticação no sistema!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/para o campo "Login" será exibida a mensagem : "Por favor, preencha o campo 'Login'"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', "Por favor, preencha o campo 'Login'")
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/para o campo "Login" será exibida a mensagem : "Por favor, preencha o campo 'Senha'"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', "Por favor, preencha o campo 'Senha'")
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// ----------------------------------------------------------
// TO-DO 02: Autenticação com dados inválidos 
// ----------------------------------------------------------
// Dado 
Given(/que o usuário acesse a página "([^"]+)"./, async () => {
    // Acessar página
    await cypress.visit('/')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Login" o valor "inválido"./, async () => {
    // Informar valor "inválido" no campo login
    await cy.xpath('//input[@id="login"]').focus().clear().type('inválido')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Senha" o valor "123456789"./, async () => {
    // Informar valor "123456789" no campo senha
    await cy.xpath('//input[@id="senha"]').focus().clear().type('123456789')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Quando 
When(/o usuário clica no botão "Entrar"./, async () => {
    // Clicar no botão entrar
    await cy.xpath('//input[@type="submit"]').click()
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Entao 
Then(/será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', 'Não foi possível realizar a autenticação no sistema!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/também será exibida a mensagem : "Verifique suas credenciais, login ou senha inválidos!"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', 'Verifique suas credenciais, login ou senha inválidos!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// ----------------------------------------------------------
// TO-DO 03: Limite mínimo de caracteres
// ----------------------------------------------------------
// Dado 
Given(/que o usuário acesse a página "([^"]+)"./, async () => {
    // Acessar página
    await cypress.visit('/')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Login" o valor "i"./, async () => {
    // Informar valor "i" no campo login
    await cy.xpath('//input[@id="login"]').focus().clear().type('i')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
Then(/o usuário informa no campo "Senha" o valor "a"./, async () => {
    // Informar valor "a" no campo senha
    await cy.xpath('//input[@id="senha"]').focus().clear().type('a')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Quando 
When(/o usuário clica no botão "Entrar"./, async () => {
    // Clicar no botão entrar
    await cy.xpath('//input[@type="submit"]').click()
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Entao 
then(/será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', 'Não foi possível realizar a autenticação no sistema!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/para o campo "Login" será exibida a mensagem : "O campo 'Login' não pode ter menos de 4 caracteres."./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', "O campo 'Login' não pode ter menos de 4 caracteres.")
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/para o campo "Login" será exibida a mensagem : "O campo 'Senha' não pode ter menos de 8 caracteres."./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', "O campo 'Senha' não pode ter menos de 8 caracteres.")
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// ----------------------------------------------------------
// TO-DO 04: Limite máximo de caracteres
// ----------------------------------------------------------
// Dado 
Given(/que o usuário acesse a página "([^"]+)"./, async () => {
    // Acessar página
    await cypress.visit('/')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Login" o valor "a.d.m.i.n.i.s.t.r.a.d.o.r.@.0.1.0.1.2.0.2.2"./, async () => {
    // Informar valor no campo login
    await cy.xpath('//input[@id="login"]').focus().clear().type('a.d.m.i.n.i.s.t.r.a.d.o.r.@.0.1.0.1.2.0.2.2')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Senha" o valor "a.d.m.i.n.i.s.t.r.a.d.o.r"./, async () => {
    // Informar valor no campo senha
    await cy.xpath('//input[@id="senha"]').focus().clear().type('a.d.m.i.n.i.s.t.r.a.d.o.r')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Quando 
When(/o usuário clica no botão "Entrar"./, async () => {
    // Clicar no botão entrar
    await cy.xpath('//input[@type="submit"]').click()
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Entao 
then(/será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', 'Não foi possível realizar a autenticação no sistema!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/para o campo "Login" será exibida a mensagem : "O campo 'Login' não pode ter mais de 12 caracteres."./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', "O campo 'Login' não pode ter mais de 12 caracteres.")
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/para o campo "Login" será exibida a mensagem : "O campo 'Senha' não pode ter mais de 12 caracteres."./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', "O campo 'Senha' não pode ter mais de 12 caracteres.")
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// ----------------------------------------------------------
// TO-DO 05: Autenticação com dados válidos
// ----------------------------------------------------------
// Dado 
Given(/que o usuário acesse a página "([^"]+)"./, async () => {
    // Acessar página
    await cypress.visit('/')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Login" o valor "administrador"./, async () => {
    // Informar valor "administrador" no campo login
    await cy.xpath('//input[@id="login"]').focus().clear().type('administrador')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Senha" o valor "admin@2022"./, async () => {
    // Informar valor "admin@2022" no campo senha
    await cy.xpath('//input[@id="senha"]').focus().clear().type('admin@2022')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Quando 
When(/o usuário clica no botão "Entrar"./, async () => {
    // Clicar no botão entrar
    await cy.xpath('//input[@type="submit"]').click()
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Entao 
then(/será exibida a mensagem : "Autenticação realizada com sucesso!"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', 'Autenticação realizada com sucesso!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// ----------------------------------------------------------
// TO-DO 06: Logout
// ----------------------------------------------------------
// Dado 
Given(/que o usuário acesse a página "([^"]+)"./, async () => {
    // Acessar página
    await cypress.visit('/')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Login" o valor "administrador"./, async () => {
    // Informar valor "administrador" no campo login
    await cy.xpath('//input[@id="login"]').focus().clear().type('administrador')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// E 
When(/o usuário informa no campo "Senha" o valor "admin@2022"./, async () => {
    // Informar valor "admin@2022" no campo senha
    await cy.xpath('//input[@id="senha"]').focus().clear().type('admin@2022')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Quando 
When(/o usuário clica no botão "Entrar"./, async () => {
    // Clicar no botão entrar
    await cy.xpath('//input[@type="submit"]').click()
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Entao 
then(/será exibida a mensagem : "Autenticação realizada com sucesso!"./, async () => {
    // Mensagem de erro
    await cy.get('p').should('have.value', 'Autenticação realizada com sucesso!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Quando 
When(/o usuário cica no botão "Sair"./, async () => {
    // Clicar no botão sair
    await cy.get('button').should('have.value', 'Sair').click()
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Entao 
then(/será exibida a mensagem : "Você foi desconectado com sucesso!"./, async () => {
    // Mensagem de sucesso
    await cy.get('p').should('have.value', 'Você foi desconectado com sucesso!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})
// Entao 
then(/o título da página atual é : "Bem Vindo!"./, async () => {
    // Mensagem de título da página
    await cy.get('h1').should('have.value', 'Bem Vindo!')
    // Tempo de espera para outra ação
    await cy.wait(2000)
})