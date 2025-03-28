# Contact Agenda App - Backend

Este projeto é a parte backend da aplicação de agenda de contatos, desenvolvida com Node.js e TypeScript. Ele fornece uma API RESTful para gerenciar contatos, permitindo operações de criação, leitura, atualização e exclusão (CRUD).

## Estrutura do Projeto

```
backend
├── src
│   ├── controllers
│   │   └── contactController.ts
│   ├── models
│   │   └── contactModel.ts
│   ├── routes
│   │   └── contactRoutes.ts
│   ├── services
│   │   └── contactService.ts
│   ├── utils
│   │   └── db.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Funcionalidades

- **Gerenciamento de Contatos**: Permite criar, listar, atualizar e excluir contatos.
- **Estrutura de Dados**: Utiliza um modelo de contato que inclui propriedades como id, nome, telefone, e-mail e endereço.
- **Conexão com Banco de Dados**: Configura a conexão com um banco de dados relacional (MySQL ou PostgreSQL) utilizando um ORM.
- **Rotas**: Define rotas para as operações de contatos, utilizando um controlador para gerenciar a lógica de negócios.

## Instalação

1. Navegue até o diretório do backend:
   ```
   cd backend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:
```
npm start
```

A aplicação será iniciada em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie suas alterações através de um pull request.