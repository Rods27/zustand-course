# Zustand Course

This project is a manager of distinct pieces of information built for learning the Zustand state management library. It features integration with TypeScript, custom middlewares, state persistence, and authentication.

### Routes

We have routes for login, user creation, event creation, task management, logout, and data persistence, all of which are secured with token-based authentication.

## Technologies used

- **React:** A declarative and efficient JavaScript library for building user interfaces, based on reusable components and reactivity through hooks.

- **TypeScript:** A superset of JavaScript that adds static typing to the code, providing greater safety, readability, and productivity during development.

- **Tailwind CSS:** A utility-first framework for building modern and responsive user interfaces directly in the HTML markup, with high productivity and visual consistency.

- **Axios:** A Promise-based library for making HTTP requests, with support for interceptors, request cancellation, and global error handling.

- **Zustand:** A lightweight and scalable state manager for React applications, featuring a minimalist API with support for middlewares, persistence, and devtools.

- **Immer:** A library that allows working with immutable data structures intuitively, using direct mutations to produce new states without side effects.

- **Vite:** A modern build and development tool offering ultra-fast startup times and instant hot module replacement for front-end applications.

- **ESLint:** A static code analysis tool for JavaScript and TypeScript that helps identify and fix code quality and style issues automatically.

- **Prettier:** An opinionated code formatter that ensures consistent style, making the code easier to read and maintain across different developers.

- **Date-fns:** A modern JavaScript library for date manipulation, providing immutable utility functions with full TypeScript support.

- **Classnames:** A utility library that simplifies the conditional handling of CSS class names in a clean and readable way, especially in React components.

- **Uuid:** A library for generating universally unique identifiers (UUIDs), useful for securely and reliably identifying entities within the application.

- **SweetAlert2:** A library for creating stylish and customizable modal alerts, offering a better user experience for interactions with messages and confirmations.

- **Docker:** A platform that allows packaging, distributing, and running applications in containers, ensuring consistent environments for development, testing, and production.

## Setting Up the Backend

To login into the application, you need to configure the server. You'll need `Docker Desktop` installed. From the root folder, run the command `yarn docker`, which will set up the backend container using the `docker-compose.yaml` file.

After running the command and with the container up and running, access the GET endpoint: `localhost:3000/api/seed` to populate the database with the seed data.


### Seed users
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

## Front end
After setting up the backend, all you need to do is in root folder type `yarn`, and after that `yarn start` to initiate the vite server, in your browser visit `http://localhost:5173`

