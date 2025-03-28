# Contact Agenda App

Este projeto é uma aplicação web completa que funciona como uma agenda de contatos. Ele foi desenvolvido para facilitar o gerenciamento de contatos pessoais ou profissionais, oferecendo uma interface intuitiva e funcionalidades robustas. Além disso, a aplicação integra-se com a API do ViaCEP para simplificar o preenchimento de endereços.

## Funcionalidades

- **Criação de Contatos**: Permite o cadastro de novos contatos com os seguintes campos obrigatórios:
   - **Nome**: Nome completo do contato.
   - **Telefone**: Número de telefone com validação de formato.
   - **E-mail**: Endereço de e-mail válido.
   - **Endereço Completo**: Inclui os campos:
      - CEP
      - Estado
      - Cidade
      - Bairro
      - Rua
      - Número
      - Complemento (opcional)
- **Validação de Dados**: Todos os campos são validados para garantir a consistência e a integridade das informações inseridas.
- **Preenchimento Automático de Endereço**: Integração com a API do ViaCEP para preencher automaticamente os campos de endereço ao informar o CEP.
- **Listagem de Contatos**: Exibe uma lista paginada de todos os contatos cadastrados.
- **Edição de Contatos**: Permite atualizar as informações de um contato existente.
- **Exclusão de Contatos**: Possibilita a remoção de contatos da agenda.
- **Busca de Contatos**: Ferramenta de busca para localizar contatos rapidamente.

## Tecnologias Utilizadas

### Frontend
- **Framework**: Next.js com suporte a TypeScript para desenvolvimento de interfaces modernas e performáticas.
- **Estilização**: Tailwind CSS para criação de layouts responsivos e estilizados.
- **Bibliotecas**:
   - Axios: Para realizar requisições HTTP.
   - React Hook Form: Para gerenciamento de formulários.
   - Yup: Para validação de dados.

### Backend
- **Ambiente**: Node.js com TypeScript para um backend escalável e tipado.
- **Framework**: Express para criação de APIs RESTful.
- **Banco de Dados**: MySQL como padrão, com suporte configurável para PostgreSQL.
- **ORM**: Sequelize para mapeamento objeto-relacional e manipulação do banco de dados.
- **Autenticação**: JWT (JSON Web Token) para autenticação segura.

## Estrutura do Projeto

```
contact-agenda-app
├── backend
│   ├── src
│   │   ├── controllers    # Lógica de controle das rotas
│   │   ├── models         # Definições dos modelos de dados
│   │   ├── routes         # Configuração das rotas da API
│   │   ├── services       # Serviços de negócio e integração
│   │   └── utils          # Funções utilitárias
│   ├── package.json       # Dependências do backend
│   ├── tsconfig.json      # Configuração do TypeScript
│   └── README.md          # Documentação do backend
├── frontend
│   ├── src
│   │   ├── components     # Componentes reutilizáveis
│   │   ├── pages          # Páginas da aplicação
│   │   ├── services       # Comunicação com o backend
│   │   ├── styles         # Estilos globais e específicos
│   │   └── utils          # Funções utilitárias
│   ├── package.json       # Dependências do frontend
│   ├── tsconfig.json      # Configuração do TypeScript
│   └── README.md          # Documentação do frontend
├── docker-compose.yml      # Configuração para execução com Docker
└── README.md               # Documentação geral do projeto
```

## Instalação

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/contact-agenda-app.git
    ```

2. Navegue até o diretório raiz do projeto:
    ```bash
    cd contact-agenda-app
    ```

3. Configure o banco de dados no arquivo `docker-compose.yml` ou diretamente no backend, ajustando as credenciais e o nome do banco.

4. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    ```

5. Instale as dependências do frontend:
    ```bash
    cd ../frontend
    npm install
    ```

6. (Opcional) Configure variáveis de ambiente no backend e frontend para personalizar a aplicação.

## Uso

1. Inicie o backend:
    ```bash
    cd backend
    npm start
    ```

2. Inicie o frontend:
    ```bash
    cd ../frontend
    npm run dev
    ```

3. Acesse a aplicação no navegador em `http://localhost:3000`.

## Testes

- **Backend**: Execute os testes unitários e de integração com:
   ```bash
   cd backend
   npm test
   ```

- **Frontend**: Execute os testes de interface com:
   ```bash
   cd frontend
   npm test
   ```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça suas alterações e commit:
    ```bash
    git commit -m "Descrição da alteração"
    ```
4. Envie suas alterações para o repositório remoto:
    ```bash
    git push origin minha-feature
    ```
5. Abra um pull request detalhando suas alterações.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.