# Contact Agenda App

Este projeto é uma aplicação web de agenda de contatos, desenvolvida com Next.js e TypeScript no frontend e Node.js com TypeScript no backend. A aplicação permite que os usuários cadastrem, visualizem, editem e excluam contatos, além de integrar-se com um banco de dados relacional como MySQL ou PostgreSQL.

## Estrutura do Projeto

```
contact-agenda-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── contactController.ts
│   │   ├── models
│   │   │   └── contactModel.ts
│   │   ├── routes
│   │   │   └── contactRoutes.ts
│   │   ├── services
│   │   │   └── contactService.ts
│   │   ├── utils
│   │   │   └── db.ts
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactList.tsx
│   │   │   └── ContactItem.tsx
│   │   ├── pages
│   │   │   ├── api
│   │   │   │   └── contacts.ts
│   │   │   ├── index.tsx
│   │   │   └── _app.tsx
│   │   ├── services
│   │   │   └── apiService.ts
│   │   ├── styles
│   │   │   └── globals.css
│   │   └── utils
│   │       └── validation.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Funcionalidades

- **Criação de Contatos**: Cadastro de novos contatos com os seguintes campos:
  - Nome
  - Telefone
  - E-mail
  - Endereço Completo (CEP, Estado, Cidade, Bairro, Rua, Número e Complemento)

- **Validação dos Campos**: Todos os campos são validados para garantir que as informações sejam inseridas corretamente.

- **Integração com API**: Utiliza a API do backend para completar automaticamente os campos de endereço ao informar o CEP.

- **Listagem, Edição e Exclusão**: Permite visualizar a lista de contatos cadastrados, com opções para editar e excluir cada contato.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd contact-agenda-app
   ```

3. Instale as dependências do backend:
   ```
   cd backend
   npm install
   ```

4. Instale as dependências do frontend:
   ```
   cd ../frontend
   npm install
   ```

## Uso

Para iniciar a aplicação, siga os passos abaixo:

1. Inicie o backend:
   ```
   cd backend
   npm start
   ```

2. Em outro terminal, inicie o frontend:
   ```
   cd frontend
   npm start
   ```

A aplicação será iniciada em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie suas alterações através de um pull request.