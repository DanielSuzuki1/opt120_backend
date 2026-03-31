const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuários - OPT120",
      version: "1.0.0",
      description: "CRUD de usuários para a disciplina de Dispositivos Móveis",
    },
    paths: {
      "/usuarios": {
        get: {
          summary: "Listar todos os usuários",
          responses: {
            200: { description: "Sucesso" },
          },
        },
        post: {
          summary: "Criar um novo usuário",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    nome: { type: "string" },
                    email: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: { description: "Criado" },
          },
        },
      },
      "/usuarios/{id}": {
        put: {
          summary: "Atualizar usuário",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: { type: "integer" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    nome: { type: "string" },
                    email: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Atualizado" },
          },
        },
        delete: {
          summary: "Remover usuário",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: {
            204: { description: "Removido" },
          },
        },
      },
    },
  },
  apis: [],
};

module.exports = swaggerJsdoc(options);
