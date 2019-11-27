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
APP_NAME=_NAME_OF_THE_APP_
COMPANY_NAME=_THE_COMPANY_NAME_

# Web server and Endpoint
APP_SERVER=http://localhost:4000
PRISMA_ENDPOINT=http://localhost:4466
PRISMA_SECRET=_YOUR_PRISMA_ENDPOINT_SECRET_
JWT_SECRET=_YOUR_JWT_SECRET_

# Wallpaper Services
PEXELS_API_KEY=_THE_PEXELS_API_KEY_
UNSPLASH_APP_ACCESS_KEY=_UNSPLASH_ACCESS_KEY_
UNSPLASH_APP_SECRET=_UNSPLASH_SECRET_

############################
### E-MAIL CONFIGURATION ###
############################
MAIL_JWT_SECRET=_E-MAIL_TOKEN_ENCRYPTION_JWT_SECRET_
MAIL_FROM_DEFAULT=sample@mail.com

###################################################
##------E-Mail Transports Configurations---------##
###################################################

##############
## Sendgrid ##
##############
SENDGRID_API_KEY=_THE_SENDGRID_API_KEY_
# Or
SENDGRID_USERNAME=__YOUR_SENDGRID_USERNAME__
SENDGRID_PASSWORD=__YOUR_SENDGRID_PASSWORD__

###########
## Gmail ##
###########
GMAIL_EMAIL=sample@mail.com
GMAIL_PASSWORD=_THE_PASSWORD_OF_THE_GMAIL_ACCOUNT_

##################
## Private SMTP ##
##################
MAIL_PRIVATE_HOST=__YOUR_MAIL_PROVIDER_HOST__
MAIL_PRIVATE_PORT=__YOUR_MAIL_PROVIDER_PORT__

# true for 465, false for other ports
MAIL_PRIVATE_SECURE=false
MAIL_PRIVATE_USER=__YOUR_MAIL_PROVIDER_USER__
MAIL_PRIVATE_PASSWORD=__YOUR_MAIL_PROVIDER_PASSWORD__
```
