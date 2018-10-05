# my-app-server
The server of [my-app-universal][my-app-universal]

[my-app-universal]: https://github.com/cesaraaron/my-app-universal

# Getting started
### Prerequisites
- Yarn

### Installing

```sh
# Clone the repo
$ git clone https://github.com/cesaraaron/my-app-server && cd my-app-server

# Install dependencies
$ yarn install
```

Now you need to deploy to an existing prisma server or setup one:

```sh
$ yarn deploy
```

When prompt:

1. If you don't have a prisma server use a demo server.

2. If you haven't registered with Prisma Cloud before, the CLI will now open a browser window asking you to sign up.

3. Follow the instructions in the browser to register with Prisma Cloud.

4. Select either demo-eu1 or demo-us1

5. Just confirm the suggested values by hitting Enter two times.

Now copy the `endpoint` value of [./database/prisma.yml](./database/prisma.yml) and paste it into `PRISMA_ENDPOINT` of the [.env](./.env) file.


Start the development server:

```sh
$ yarn dev
```

# Deployment
### Prerequisites
- [yarn](https://yarnpkg.com/lang/en/docs/install/)
- [docker](https://docs.docker.com/install/)
- [docker-compose](https://docs.docker.com/compose/install/#install-compose)
- [pm2](https://github.com/Unitech/pm2)


### Installing

```sh
# Clone the repo
$ git clone https://github.com/cesaraaron/my-app-server && cd my-app-server

# Install dependencies
$ yarn install

# Fetch the prisma & mysql docker images and run them in the background
$ docker-compose up -d

# Build the graphql-yoga server
$ yarn build

# Run the graphql-yoga server in the background
$ pm2 start dist/index.js --name my-app-server
```

# Built with
- [prisma](https://github.com/prisma/prisma)
- [graphql-yoga](https://github.com/prisma/graphql-yoga)
- [typescript](https://github.com/Microsoft/TypeScript)

# License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details


[1]: https://www.prisma.io/docs/tutorials/deploy-prisma-servers/digital-ocean-(manual)-texoo6aemu/
