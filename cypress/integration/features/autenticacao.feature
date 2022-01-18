#language: pt

@Autenticação
Funcionalidade: Autenticação
      
     Procedimentos para realizar a autenticação no sistema.
     
     Cenario: Autenticação sem dados
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!".
          E para o campo "Login" será exibida a mensagem : "Por favor, preencha o campo 'Login'".
          E para o campo "Senha" será exibida a mensagem : "Por favor, preencha o campo 'Senha'".
     
     Cenario: Autenticação com dados inválidos
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          E o usuário informa no campo "Login" o valor "inválido".
          E o usuário informa no campo "Senha" o valor "admin@2022".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!".
          E também será exibida a mensagem : "Verifique suas credenciais, login ou senha inválidos!".
     
     Cenario: Limite mínimo de caracteres
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          E o usuário informa no campo "Login" o valor "i".
          E o usuário informa no campo "Senha" o valor "a".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!".
          E para o campo "Login" será exibida a mensagem : "O campo 'Login' não pode ter menos de 4 caracteres.".
          E para o campo "Senha" será exibida a mensagem : "O campo 'Senha' não pode ter menos de 8 caracteres.".
     
     Cenario: Limite máximo de caracteres
          Dado que o usuário acesse a página "http://localhost:8080/frontend/".
          E o usuário informa no campo "Login" o valor "a.d.m.i.n.i.s.t.r.a.d.o.r.@.0.1.0.1.2.0.2.2".
          E o usuário informa no campo "Senha" o valor "a.d.m.i.n.i.s.t.r.a.d.o.r".
          Quando o usuário clica no botão "Entrar".
          Entao será exibida a mensagem : "Não foi possível realizar a autenticação no sistema!".
          E para o campo "Login" será exibida a mensagem : "O campo 'Login' não pode ter mais de 12 caracteres.".
          E para o campo "Senha" será exibida a mensagem : "O campo 'Senha' não pode ter mais de 12 caracteres.".
     
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
          Quando o usuário cica no botão "Sair".
          Entao será exibida a mensagem : "Você foi desconectado com sucesso!".
          E o título da página atual é : "Bem Vindo!".