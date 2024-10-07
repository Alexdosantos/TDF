# Documentação da API do teste técnico de desenvolvedor fullstack

Esta API fornece endpoints para gerenciar usuários e documentos. Abaixo estão as instruções para rodar o projeto localmente e a documentação das rotas disponíveis.

## Como rodar o projeto localmente

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone o repositório do projeto.
3. Navegue até a pasta do projeto no terminal.
4. Execute `npm install` para instalar as dependências.
5. Execute `npm start` para iniciar o servidor.
6. A API estará disponível em `http://localhost:3000` (ou a porta que você configurou).

## Rotas de Usuários

### Criar um novo usuário

- **Endpoint:** POST /users/create
- **Parâmetros do corpo:**
  ```json
  {
    "name": "João Silva",
    "email": "joao@example.com"
  }
  ```
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com"
  }
  ```

### Listar todos os usuários

- **Endpoint:** GET /users/findAll
- **Resposta de sucesso:**
  ```json
  [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao@example.com",
      "documents": [
        {
          "id": 1,
          "name": "Documento 1",
          "status": "ativo"
        }
      ]
    },
    {
      "id": 2,
      "name": "Maria Santos",
      "email": "maria@example.com",
      "documents": []
    }
  ]
  ```

### Buscar um usuário específico

- **Endpoint:** GET /users/findOne/:id
- **Parâmetros de rota:** id (número)
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "documents": [
      {
        "id": 1,
        "name": "Documento 1",
        "status": "ativo"
      }
    ]
  }
  ```

### Atualizar um usuário

- **Endpoint:** PATCH /users/update/:id
- **Parâmetros de rota:** id (número)
- **Parâmetros do corpo:**
  ```json
  {
    "name": "João Silva Atualizado"
  }
  ```
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "name": "João Silva Atualizado",
    "email": "joao@example.com",
    "documents": [
      {
        "id": 1,
        "name": "Documento 1",
        "status": "ativo"
      }
    ]
  }
  ```

### Deletar um usuário

- **Endpoint:** DELETE /users/delete/:id
- **Parâmetros de rota:** id (número)
- **Resposta de sucesso:**
  ```json
  {
    "message": "Usuário deletado com sucesso",
    "status": 200
  }
  ```

## Rotas de Documentos

### Criar um novo documento

- **Endpoint:** POST /documents/create/:id
- **Parâmetros de rota:** id (número do usuário)
- **Parâmetros do corpo:**
  ```json
  {
    "name": "Documento 1",
    "status": "ativo"
  }
  ```
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "name": "Documento 1",
    "status": "ativo",
    "user": {
        "id": 1,
        "name": "João Silva",
        "email": "joao@example.com"
    }
  }
  ```

### Listar todos os documentos

- **Endpoint:** GET /documents/findAll
- **Resposta de sucesso:**
  ```json
  [
    {
      "id": 1,
      "name": "Documento 1",
      "status": "ativo",
      "user": {
        "id": 1,
        "name": "João Silva",
        "email": "joao@example.com"
      }
    },
    {
      "id": 2,
      "name": "Documento 2",
      "status": "inativo",
      "user": {
        "id": 2,
        "name": "Maria Santos",
        "email": "maria@example.com"
      }
    }
  ]
  ```

### Buscar um documento específico

- **Endpoint:** GET /documents/findOne/:id
- **Parâmetros de rota:** id (número)
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "name": "Documento 1",
    "status": "ativo",
    "user": {
        "id": 1,
        "name": "João Silva",
        "email": "joao@example.com"
    }
  }
  ```

### Atualizar um documento

- **Endpoint:** PATCH /documents/update/:id
- **Parâmetros de rota:** id (número)
- **Parâmetros do corpo:**
  ```json
  {
    "name": "Documento 1 Atualizado",
    "status": "inativo"
  }
  ```
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "name": "Documento 1 Atualizado",
    "status": "inativo",
    "user": {
        "id": 1,
        "name": "João Silva",
        "email": "joao@example.com"
    }
  }
  ```

### Deletar um documento

- **Endpoint:** DELETE /documents/delete/:id
- **Parâmetros de rota:** id (número)
- **Resposta de sucesso:**
  ```json
  {
    "message": "Documento deletado com sucesso",
    "status": 200
  }
  ```

## Observações

- Em um ambiente de produção com um banco de dados real, as operações seriam persistentes e os dados seriam armazenados de forma permanente.
- As respostas de erro incluiriam informações mais detalhadas sobre o problema ocorrido.
- Implementações adicionais de segurança, como autenticação e autorização, seriam necessárias em um ambiente de produção.
- A validação de dados de entrada seria mais robusta em um cenário real.
- O tratamento de erros e as respostas seriam mais consistentes e padronizados em toda a API.



# 💻Documentação do Frontend

Para rodar o projeto localmente, você precisará seguir os seguintes passos:

## Como rodar o projeto localmente

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone o repositório do projeto.
3. Navegue até a pasta do frontend  `cd FrontEnd` e depois `cd app`.
4. Execute `npm install` para instalar as dependências.
5. Execute `npm run dev` para iniciar o servidor.
6. A API estará disponível em `http://localhost:5173` (ou na porta que aparecer no terminal).

✅ Assim que conseguir rodar o frontend, você poderá acessar a página de login e criar um usuário para testar a aplicação.




