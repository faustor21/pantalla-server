# Tasks todos

- [ ] Add the servers installation and configurations instructions in the README.md
- [x] Fix relations between resolvers
- [x] Add user's profile query (User just have to query for `user(userId)`)
- [ ] Add wallpapers "unified" query for PEXELS and UNSPLASH
  - [ ] Add queries habilites for PEXELS
  - [ ] Add queries habilites for UNSPLASH
- [ ] Security
  - [x] Implement user's email validation/confirmation upon account creation
  - [x] Implement reset password  functionality
  - [ ] Implement application wide logging
  - [x] Validate users inputs (Ex: createUser, login, etc)
  - [x] Authentication
    - [x] Install necessary libraries: `bcryptjs`, `jsonwebtoken`
    - [x] Add utility function for password encryption
    - [x] Configure and prepare jsonwebtoken to be use
    - [x] Implement refresh token strategy
    - [x] Forbid the password field to be return when a user is returned. This is achieve by no adding the password field of the user's type in the schema.graphql
    - [x] Check that all the resolvers go through the authentication middleware, except for `login` and `createUser`
    - [x] Make sure everything is glue together and every query goes through after the user is authenticated
    - Sign up
      - [x] Return JWT token on user's Sign Up request
      - [x] Respond in a proper way when the email is already taken in the DB
      - [x] Encrypt user's password with bcryptjs
    - Login
      - [x] Add user login abilities
      - [x] Return JWT token on login requests
      - [x] Encrypt user's password with bcryptjs
  - [x] Authorization
    - [x] Install necessary library: `graphql-shield`
    - [x] Create permissions middleware
    - [x] Add rules for all the resources that need it
- [ ] Tests
