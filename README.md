# Sobre o projeto

Trata-se de uma automação de testes com intuito de verificar cada elemento ou dado exibido pelo sistema que já foi ou está sendo desenvolvido por você, sua equipe de desenvolvimento ou órgão e empresa a qual se encontra.

A aplicação consiste em uma ferramenta que verifica se cada elemento encontrado no HTML está funcionando corretamente, se as informações fornecidas pela API estão sendo exibidas corretamente e as verificações de tratamento de erros de formulários. Cada conjunto de teste realizado sobrepõem o seu antecessor, caso seja necessário o armazenamento do histórico dos testes será necessário renomear a pasta com o tempo específico de criação, ex: “Web.01.01.2022” ou se preferir você pode utilizar o Jenkins para gerenciar a automação e histórico de testes com o seu gerenciador de builds.

# Tecnologias utilizadas
## Front-End
- HTML
- CSS 
- JavaScript
## Back-End
- JavaScript (Cypress)
- Cucumber (Gherkin)

# 💻 Pré-Requisitos

* Gherkin Cucumber (Extensão Visual Studio Code)
* Node

# 🚀 Como executar o projeto


```bash
# Clonar repositório
git clone https://github.com/LeonRWorker/cucumber-bdd-cypress frontend

# Entrar na pasta do projeto
cd frontend

# Instalar dependências
npm install

# Executar o projeto de forma automática
npm test -- --runInBand


```

# Documentação da Aplicação

Para a documetação completa do Ghekin (Cucumber) acesse o site oficial da documentação : [Gherkin](https://cucumber.io/docs/gherkin/reference/).

Para a documetação dos comandos do Cypress acesse o site oficial da documentação : [Comandos Cypress](https://docs.cypress.io/api/table-of-contents).


# Funcionalidade 

Uma funcionalidade pode ser entendica como um conjunto de ações que precisam ser realizadas para ter um fim específico ou suprimir alguma necessidade do usuário. Pode ser coisas simples como um botão que limpa um filtro de formulário ou complexas como a geração de um relatório.

Para definir a sintax de uma funcionalidade será preciso utilizar dos métodos (Dado, Quando, Entao) para realizar as ações nas implementações dos testes. Para facilitar o gerenciamento da aplicação você também poderá adicionar uma "tag" antes da funcionalidade, facilitando o encontro de funcionalidades semelhantes. 

Geralmente uma aplicação de relatórios contem mais de um tipo de relatório ou partes diferentes de um sistema, a utilização das tags facilitaria a visualização dos testes realizados

Para utilizar uma "tag", verifique o exemplo abaixo :

```feature

#language: pt
@Autenticação

```

Você notou o comentário "#language: pt" ? Esse argumento serve para identificar a lingaguem que está sendo utilizada na feature. Aliás, não se esqueça de instalar o 
Gherkin Cucumber (Extensão Visual Studio Code).

Dado 
* Utilizado para informar a primeira condição, servindo para informar o que precisa ou será feito.

```feature

      Dado que o usuário precise realizar a autenticação em um sistema".

```

Quando
* Utilizado para informar uma ação em um determinado período, servindo para informar o que e quando está sendo realizada a ação.

```feature

      Quando o usuário clicar no botão "Sair".

```
Entao
* Utilizado para informar o resultado das ações realizadas, geralmente composto por uma sintaxa que contenha a mensagem do retorno da API.

```feature

      Entao será exibida a mensagem : "Dados incorretos! Por favor, verifique as informações e tente novamente.".

```
# Autenticação

Essa automação funciona em conjunto com uma aplicação de autenticação encontrada em : [Sistemas de Autenticação](https://github.com/LeonRWorker/system-auth). Caso não utilize uma das aplicações listadas acima, ignore a url (link de acesso) informada nos cenários da funcionalidade a seguir.

```feature

#language: pt

@Autenticação
Funcionalidade: Autenticação
      
     Procedimentos para realizar a autenticação no sistema.
     
     Cenario: Autenticação sem dados
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!".
          E será exibida a mensagem : "Por favor, preencha o campo 'Login'".
          E será exibida a mensagem : "Por favor, preencha o campo 'Senha'".
     
     Cenario: Autenticação com dados inválidos
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          E o usuário informa no campo "Login" o valor "inválido".
          E o usuário informa no campo "Senha" o valor "admin@2022".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!".
          E será exibida a mensagem : "Verifique suas credenciais, login ou senha inválidos!".
     
     Cenario: Limite mínimo de caracteres
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          E o usuário informa no campo "Login" o valor "i".
          E o usuário informa no campo "Senha" o valor "a".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!".
          E será exibida a mensagem : "O campo 'Login' não pode ter menos de 4 caracteres.".
          E será exibida a mensagem : "O campo 'Senha' não pode ter menos de 8 caracteres.".
     
     Cenario: Limite máximo de caracteres
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          E o usuário informa no campo "Login" o valor "a.d.m.i.n.i.s.t.r.a.d.o.r.@.0.1.0.1.2.0.2.2".
          E o usuário informa no campo "Senha" o valor "a.d.m.i.n.i.s.t.r.a.d.o.r".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!".
          E será exibida a mensagem : "O campo 'Login' não pode ter mais de 12 caracteres.".
          E será exibida a mensagem : "O campo 'Senha' não pode ter mais de 12 caracteres.".
     
     Cenario: Autenticação com dados válidos
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          E o usuário informa no campo "Login" o valor "administrador".
          E o usuário informa no campo "Senha" o valor "admin@2022".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Autenticação realizada com sucesso!".
     
     Cenario: Logout
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          E o usuário informa no campo "Login" o valor "administrador".
          E o usuário informa no campo "Senha" o valor "admin@2022".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Autenticação realizada com sucesso!".
          Quando o usupario cica no botão "Sair".
          Entao será exibida a mensagem : "Você foi desconectado com sucesso!".
          E o título da página atual é "Bem Vindo!".

```


# Autor

[Leonardo Marques](https://github.com/LeonRWorker/)
