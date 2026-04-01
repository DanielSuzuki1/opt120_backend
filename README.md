# 🚀 API de Gerenciamento de Usuários - OPT120

Este projeto consiste em um Backend robusto desenvolvido para a disciplina de Dispositivos Móveis (Bacharelado em Ciência da Computação - UTFPR-CM). A API gerencia um cadastro de usuários e está preparada para ser consumida por um aplicativo Flutter.

## 📋 Sobre o Projeto

O objetivo principal é fornecer um CRUD (Create, Read, Update, Delete) completo, utilizando persistência em banco de dados relacional e documentação automatizada via Swagger.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para criação de rotas.
- **PostgreSQL**: Banco de dados relacional (rodando via Docker).
- **Docker**: Containerização para isolamento do banco de dados e porta 5433.
- **Swagger**: Documentação interativa para testes da API.

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e em execução.
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

### Passo a Passo

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/DanielSuzuki1/opt120_backend.git
   cd opt120_backend
   ```

2. **Subir o banco de dados(Docker)**

   ```bash
   docker-compose up -d

   ```

3. **Instalar as dependências do Node**

   ```bash
   npm install

   ```

4. **Iniciar o servidor**

   ```bash
   node src/index.js

   ```

## 🧪 Como Testar a API (Swagger)

Como o Backend foca na lógica e nos dados, utilizamos o **Swagger** para criar uma interface de testes interativa.

1. Certifique-se de que o servidor está rodando (`node src/index.js`).
2. Abra o seu navegador e acesse: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### 🟢 Para Cadastrar um Usuário (POST):

- Clique na rota verde **POST /usuarios**.
- Clique no botão **"Try it out"**.
- Altere os valores de `"nome"` e `"email"` no campo de texto JSON (ex: "Daniel", "daniel@email.com").
- Clique em **"Execute"**.
- Role para baixo e verifique se o _Server response_ retornou o código **201** (Created).

### 🔵 Para Listar os Usuários (GET):

- Clique na rota azul **GET /usuarios**.
- Clique no botão **"Try it out"** e depois em **"Execute"**.
- Você verá a lista de usuários salvos vindo diretamente do banco de dados PostgreSQL!

### 🟠 Para Editar/Excluir (PUT e DELETE):

- Use o **ID** que apareceu na listagem do GET.
- Clique na rota desejada, insira o ID no campo `id` e clique em **"Execute"**.
