# Zustand Course

Esse projeto é um gerenciador de informações distintas para aprendizado do gerenciador de estados Zustand, utilizei integração com TypeScript, middlewares personalizados, persistência de estado e autenticação.

Sobre rotas, temos uma rota de login, criação de usuário, criação de eventos, gerenciador de tarefas, logout, persistencia de dados, todas as rotas são autenticadas por token.

## Tecnologias Utilizadas

- **React:** Uma biblioteca JavaScript declarativa e eficiente para construção de interfaces de usuário, baseada em componentes reutilizáveis e reatividade por meio de hooks.

- **TypeScript:** Um superset do JavaScript que adiciona tipagem estática ao código, proporcionando maior segurança, legibilidade e produtividade durante o desenvolvimento.

- **Tailwind CSS:** Um framework utilitário para construção de interfaces modernas e responsivas diretamente na marcação HTML, com alta produtividade e consistência visual.

- **Axios:** Uma biblioteca baseada em Promises para realizar requisições HTTP, com suporte a interceptadores, cancelamento de requisições e tratamento global de erros.

- **Zustand:** Um gerenciador de estado leve e escalável para aplicações React, com uma API minimalista e suporte a middlewares, persistência e devtools.

- **Immer:** Uma biblioteca que permite trabalhar com estruturas de dados imutáveis de forma intuitiva, utilizando mutações diretas para produzir novos estados sem efeitos colaterais.

- **Vite:** Uma ferramenta moderna de build e desenvolvimento que oferece tempos de inicialização ultrarrápidos e recarregamento instantâneo para aplicações front-end.

- **ESLint:** Uma ferramenta de análise estática de código JavaScript e TypeScript que ajuda a identificar e corrigir problemas de qualidade e estilo no código automaticamente.

- **Prettier:** Um formatador de código opinativo que assegura consistência de estilo, facilitando a leitura e manutenção do código por diferentes desenvolvedores.

- **Date-fns:** Uma biblioteca moderna para manipulação de datas em JavaScript, oferecendo funções utilitárias imutáveis e com tipagem completa para lidar com operações temporais.

- **Classnames:** Uma biblioteca utilitária que facilita a manipulação condicional de classes CSS de forma limpa e legível, principalmente em componentes React.

- **Uuid:** Uma biblioteca para geração de identificadores únicos universais (UUIDs), úteis para identificação segura e rastreável de entidades dentro da aplicação.

- **SweetAlert2:** Uma biblioteca para criação de alertas modais estilizados e personalizáveis, oferecendo melhor experiência do usuário em interações com mensagens e confirmações.

- **Docker:** Uma plataforma que permite empacotar, distribuir e executar aplicações em contêineres, garantindo ambientes consistentes para desenvolvimento, testes e produção.


### Criando o backend
Para logar na aplicação precisa configurar o servidor, precisará do `Docker Desktop`, dentro da pasta raiz execute o comando `yarn docker`, onde será instalado o container do backend, pelo `docker-compose.yaml`.

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

