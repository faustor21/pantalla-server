# Pantalla Server (Server Side or Back-End)

## A background chooser application for Linux

### This backend mainly uses the following technologies

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- **GraphQL** (With [graphql-yoga](https://github.com/prisma-labs/graphql-yoga) and [Prisma](https://www.prisma.io 'Prisma replaces traditional ORMs') for the DB access layer)

### Installation

..._Instructions go here_

#### Environment Variables

Place your environment variables files in `env/`. In this folder create the fallowing files: _dev.env_, _prod.env_ and _test.env_

```bash
# Inside your server's directory
# Create the env/ folder and then the files
$ mkdir env && touch env/dev.env env/prod.env env/test.env
```

And the add these variables in the files you just created

```env
PRISMA_ENDPOINT=__YOUR_HOST_ENDPOINT__
PRISMA_SECRET=__YOUR_PRISMA_SECRET__
JWT_SECRET=__YOUR_JWT_SECRET__
PEXELS_API_KEY=__YOUR_PEXELS_API_KEY__
UNSPLASH_APP_ACCESS_KEY=__YOUR_UNSPLASH_APP_ACCESS_KEY__
UNSPLASH_APP_SECRET=__YOUR_UNSPLASH_APP_SECRET__
```
