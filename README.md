# Clarke Challenge

Nesta aplicação, está todo o sistema de Marketplace para a Clarke. Sinto muito não ter terminado, mas eu me diverti muito fazendo. Eu aprendi bastante coisa sobre front e pretendo aprender mais. (Mas o Back ainda é melhor!).

Eu agradeço de verdade a chance de provar pra mim mesmo que eu consigo.

Esta aplicação informa ao usuário logado as empresas que atendem a demanda de energia baseada em quanto este gasta. Ou deveria. Infelizmente, não consegui utilizar a parte das rotas, pelo menos não as autenticadas. Mas ainda assim, o back está funcionando bem.

Abaixo, terão todos os endpoints e funcionalidades(Que eu pretendia implementar) do Back-End.

Um schema para a criação do Banco de Dados está no projeto(Serve mais para os fornecedores do que para os clientes)

A url base dessa API é "http://localhost:6661", para executar use o comando "npm run dev" na pasta "api" E o comando "npm start" na pasta "clarke-frontend"

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

                                Jonatas Ximenez Silva - 'Por Frodo.'