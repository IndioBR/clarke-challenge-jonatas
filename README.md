# Clarke Challenge

Nesta aplicação, está todo o sistema de Marketplace para a Clarke. 

Esta aplicação informa ao usuário logado as empresas que atemdem a demanda de energia baseada em quanto este gasta.

Abaixo, terão todos os endpoints e funcionalidades do Back-End.

Um schema para a criação do Banco de Dados está no projeto

A url base dessa API é "http://localhost:3000", para executar use o comando "npm run dev" na pasta "api" E o comando "npm start" na pasta "marketplace"

---


## O que o usuário pode fazer?

- Fazer Login;
- Fazer Cadastro;
- Fazer Logout;
- Informar o consumo de energia;

---

## Endpoints

### POST - /login

Este endpoit pega o body da requisição e compara com as informações na API.

    Status Code: 200 (SUCESSO) / 404 (FALHA)
    
### POST - /cadastro

Este endpoint insere na API um novo cadastro.

Requisitos: 

- Email deve ser ÚNICO;
- Nome Completo;
- Senha deve ter pelo menos uma letra maiúscula;

        Status Code: 200 (SUCESSO) / 400 (FALHA)

### GET - /inicio

Este endpoint é a página principal da aplicação. Nele estarão primeiramente um input do tipo numérico que, ao informado, mostrará as empresas que atendem o usuário de acordo com o seu consumo.

Requisitos:

- O input deve ser maior que 0;

        Status Code: 200 (SUCESSO) / 400 (FALHA);
    
---

                                Jonatas Ximenez Silva