# Zustand Course

Esse projeto é um gerenciador de informações distintas para aprendizado do gerenciador de estados Zustand, utilizei integração com TypeScript, middlewares personalizados, persistência de estado e autenticação.

Sobre rotas, temos uma rota de login, criação de usuário, criação de eventos, gerenciador de tarefas, logout, persistencia de dados, todas as rotas são autenticadas por token.

### Criando o backend
Para logar na aplicação precisa configurar o servidor, precisará do `Docker Desktop`, dentro da pasta raiz execute o comando `yarn docker`, onde será instalado o container do backend.

Após o comando, com o container rodando, acesse o endpoint GET: `localhost:3000/api/seed` para criar a seed no banco de dados.

### Usuários da seed 
````
  {
    "email": "test1@google.com", // Admin
    "password": "Abc123"
  }
````

```
  {
    "email": "test2@google.com", // User
    "password": "Abc123"
  }
```
