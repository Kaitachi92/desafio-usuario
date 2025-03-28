# Contact Agenda App - Frontend

Este projeto é a parte frontend da aplicação de agenda de contatos, construída com Next.js e TypeScript. Ele se comunica com o backend para gerenciar contatos, permitindo que os usuários cadastrem, visualizem, editem e excluam contatos.

## Funcionalidades

- **Interface de Usuário**: Uma interface intuitiva para gerenciar contatos.
- **Formulário de Contato**: Permite a criação de novos contatos com validação de campos.
- **Listagem de Contatos**: Exibe todos os contatos cadastrados com opções para editar e excluir.
- **Integração com API**: Comunicação com o backend para realizar operações CRUD nos contatos.

## Estrutura do Projeto

```
frontend
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── ContactForm.tsx
│   │   ├── ContactList.tsx
│   │   └── ContactItem.tsx
│   ├── pages
│   │   ├── api
│   │   │   └── contacts.ts
│   │   ├── index.tsx
│   │   └── _app.tsx
│   ├── services
│   │   └── apiService.ts
│   ├── styles
│   │   └── globals.css
│   └── utils
│       └── validation.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

1. Navegue até o diretório do frontend:
   ```
   cd frontend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:
```
npm run dev
```

A aplicação será iniciada em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie suas alterações através de um pull request.