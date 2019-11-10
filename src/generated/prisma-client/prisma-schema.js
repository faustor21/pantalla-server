module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateRefreshToken {
  count: Int!
}

type AggregateResetPasswordToken {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWallpaper {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createRefreshToken(data: RefreshTokenCreateInput!): RefreshToken!
  updateRefreshToken(data: RefreshTokenUpdateInput!, where: RefreshTokenWhereUniqueInput!): RefreshToken
  updateManyRefreshTokens(data: RefreshTokenUpdateManyMutationInput!, where: RefreshTokenWhereInput): BatchPayload!
  upsertRefreshToken(where: RefreshTokenWhereUniqueInput!, create: RefreshTokenCreateInput!, update: RefreshTokenUpdateInput!): RefreshToken!
  deleteRefreshToken(where: RefreshTokenWhereUniqueInput!): RefreshToken
  deleteManyRefreshTokens(where: RefreshTokenWhereInput): BatchPayload!
  createResetPasswordToken(data: ResetPasswordTokenCreateInput!): ResetPasswordToken!
  updateResetPasswordToken(data: ResetPasswordTokenUpdateInput!, where: ResetPasswordTokenWhereUniqueInput!): ResetPasswordToken
  updateManyResetPasswordTokens(data: ResetPasswordTokenUpdateManyMutationInput!, where: ResetPasswordTokenWhereInput): BatchPayload!
  upsertResetPasswordToken(where: ResetPasswordTokenWhereUniqueInput!, create: ResetPasswordTokenCreateInput!, update: ResetPasswordTokenUpdateInput!): ResetPasswordToken!
  deleteResetPasswordToken(where: ResetPasswordTokenWhereUniqueInput!): ResetPasswordToken
  deleteManyResetPasswordTokens(where: ResetPasswordTokenWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWallpaper(data: WallpaperCreateInput!): Wallpaper!
  updateWallpaper(data: WallpaperUpdateInput!, where: WallpaperWhereUniqueInput!): Wallpaper
  updateManyWallpapers(data: WallpaperUpdateManyMutationInput!, where: WallpaperWhereInput): BatchPayload!
  upsertWallpaper(where: WallpaperWhereUniqueInput!, create: WallpaperCreateInput!, update: WallpaperUpdateInput!): Wallpaper!
  deleteWallpaper(where: WallpaperWhereUniqueInput!): Wallpaper
  deleteManyWallpapers(where: WallpaperWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  refreshToken(where: RefreshTokenWhereUniqueInput!): RefreshToken
  refreshTokens(where: RefreshTokenWhereInput, orderBy: RefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RefreshToken]!
  refreshTokensConnection(where: RefreshTokenWhereInput, orderBy: RefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RefreshTokenConnection!
  resetPasswordToken(where: ResetPasswordTokenWhereUniqueInput!): ResetPasswordToken
  resetPasswordTokens(where: ResetPasswordTokenWhereInput, orderBy: ResetPasswordTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ResetPasswordToken]!
  resetPasswordTokensConnection(where: ResetPasswordTokenWhereInput, orderBy: ResetPasswordTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResetPasswordTokenConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  wallpaper(where: WallpaperWhereUniqueInput!): Wallpaper
  wallpapers(where: WallpaperWhereInput, orderBy: WallpaperOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wallpaper]!
  wallpapersConnection(where: WallpaperWhereInput, orderBy: WallpaperOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WallpaperConnection!
  node(id: ID!): Node
}

type RefreshToken {
  id: ID!
  user: User!
  refreshToken: String!
  accessToken: String!
  expiresIn: String!
  revoke: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RefreshTokenConnection {
  pageInfo: PageInfo!
  edges: [RefreshTokenEdge]!
  aggregate: AggregateRefreshToken!
}

input RefreshTokenCreateInput {
  id: ID
  user: UserCreateOneWithoutRefreshTokensInput!
  refreshToken: String!
  accessToken: String!
  expiresIn: String!
  revoke: Boolean
}

input RefreshTokenCreateManyWithoutUserInput {
  create: [RefreshTokenCreateWithoutUserInput!]
  connect: [RefreshTokenWhereUniqueInput!]
}

input RefreshTokenCreateWithoutUserInput {
  id: ID
  refreshToken: String!
  accessToken: String!
  expiresIn: String!
  revoke: Boolean
}

type RefreshTokenEdge {
  node: RefreshToken!
  cursor: String!
}

enum RefreshTokenOrderByInput {
  id_ASC
  id_DESC
  refreshToken_ASC
  refreshToken_DESC
  accessToken_ASC
  accessToken_DESC
  expiresIn_ASC
  expiresIn_DESC
  revoke_ASC
  revoke_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RefreshTokenPreviousValues {
  id: ID!
  refreshToken: String!
  accessToken: String!
  expiresIn: String!
  revoke: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

input RefreshTokenScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  refreshToken: String
  refreshToken_not: String
  refreshToken_in: [String!]
  refreshToken_not_in: [String!]
  refreshToken_lt: String
  refreshToken_lte: String
  refreshToken_gt: String
  refreshToken_gte: String
  refreshToken_contains: String
  refreshToken_not_contains: String
  refreshToken_starts_with: String
  refreshToken_not_starts_with: String
  refreshToken_ends_with: String
  refreshToken_not_ends_with: String
  accessToken: String
  accessToken_not: String
  accessToken_in: [String!]
  accessToken_not_in: [String!]
  accessToken_lt: String
  accessToken_lte: String
  accessToken_gt: String
  accessToken_gte: String
  accessToken_contains: String
  accessToken_not_contains: String
  accessToken_starts_with: String
  accessToken_not_starts_with: String
  accessToken_ends_with: String
  accessToken_not_ends_with: String
  expiresIn: String
  expiresIn_not: String
  expiresIn_in: [String!]
  expiresIn_not_in: [String!]
  expiresIn_lt: String
  expiresIn_lte: String
  expiresIn_gt: String
  expiresIn_gte: String
  expiresIn_contains: String
  expiresIn_not_contains: String
  expiresIn_starts_with: String
  expiresIn_not_starts_with: String
  expiresIn_ends_with: String
  expiresIn_not_ends_with: String
  revoke: Boolean
  revoke_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RefreshTokenScalarWhereInput!]
  OR: [RefreshTokenScalarWhereInput!]
  NOT: [RefreshTokenScalarWhereInput!]
}

type RefreshTokenSubscriptionPayload {
  mutation: MutationType!
  node: RefreshToken
  updatedFields: [String!]
  previousValues: RefreshTokenPreviousValues
}

input RefreshTokenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RefreshTokenWhereInput
  AND: [RefreshTokenSubscriptionWhereInput!]
  OR: [RefreshTokenSubscriptionWhereInput!]
  NOT: [RefreshTokenSubscriptionWhereInput!]
}

input RefreshTokenUpdateInput {
  user: UserUpdateOneRequiredWithoutRefreshTokensInput
  refreshToken: String
  accessToken: String
  expiresIn: String
  revoke: Boolean
}

input RefreshTokenUpdateManyDataInput {
  refreshToken: String
  accessToken: String
  expiresIn: String
  revoke: Boolean
}

input RefreshTokenUpdateManyMutationInput {
  refreshToken: String
  accessToken: String
  expiresIn: String
  revoke: Boolean
}

input RefreshTokenUpdateManyWithoutUserInput {
  create: [RefreshTokenCreateWithoutUserInput!]
  delete: [RefreshTokenWhereUniqueInput!]
  connect: [RefreshTokenWhereUniqueInput!]
  set: [RefreshTokenWhereUniqueInput!]
  disconnect: [RefreshTokenWhereUniqueInput!]
  update: [RefreshTokenUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [RefreshTokenUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [RefreshTokenScalarWhereInput!]
  updateMany: [RefreshTokenUpdateManyWithWhereNestedInput!]
}

input RefreshTokenUpdateManyWithWhereNestedInput {
  where: RefreshTokenScalarWhereInput!
  data: RefreshTokenUpdateManyDataInput!
}

input RefreshTokenUpdateWithoutUserDataInput {
  refreshToken: String
  accessToken: String
  expiresIn: String
  revoke: Boolean
}

input RefreshTokenUpdateWithWhereUniqueWithoutUserInput {
  where: RefreshTokenWhereUniqueInput!
  data: RefreshTokenUpdateWithoutUserDataInput!
}

input RefreshTokenUpsertWithWhereUniqueWithoutUserInput {
  where: RefreshTokenWhereUniqueInput!
  update: RefreshTokenUpdateWithoutUserDataInput!
  create: RefreshTokenCreateWithoutUserInput!
}

input RefreshTokenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  refreshToken: String
  refreshToken_not: String
  refreshToken_in: [String!]
  refreshToken_not_in: [String!]
  refreshToken_lt: String
  refreshToken_lte: String
  refreshToken_gt: String
  refreshToken_gte: String
  refreshToken_contains: String
  refreshToken_not_contains: String
  refreshToken_starts_with: String
  refreshToken_not_starts_with: String
  refreshToken_ends_with: String
  refreshToken_not_ends_with: String
  accessToken: String
  accessToken_not: String
  accessToken_in: [String!]
  accessToken_not_in: [String!]
  accessToken_lt: String
  accessToken_lte: String
  accessToken_gt: String
  accessToken_gte: String
  accessToken_contains: String
  accessToken_not_contains: String
  accessToken_starts_with: String
  accessToken_not_starts_with: String
  accessToken_ends_with: String
  accessToken_not_ends_with: String
  expiresIn: String
  expiresIn_not: String
  expiresIn_in: [String!]
  expiresIn_not_in: [String!]
  expiresIn_lt: String
  expiresIn_lte: String
  expiresIn_gt: String
  expiresIn_gte: String
  expiresIn_contains: String
  expiresIn_not_contains: String
  expiresIn_starts_with: String
  expiresIn_not_starts_with: String
  expiresIn_ends_with: String
  expiresIn_not_ends_with: String
  revoke: Boolean
  revoke_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RefreshTokenWhereInput!]
  OR: [RefreshTokenWhereInput!]
  NOT: [RefreshTokenWhereInput!]
}

input RefreshTokenWhereUniqueInput {
  id: ID
  refreshToken: String
  accessToken: String
}

type ResetPasswordToken {
  id: ID!
  user: User!
  token: String!
  expiresIn: String!
  revoke: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ResetPasswordTokenConnection {
  pageInfo: PageInfo!
  edges: [ResetPasswordTokenEdge]!
  aggregate: AggregateResetPasswordToken!
}

input ResetPasswordTokenCreateInput {
  id: ID
  user: UserCreateOneWithoutResetPasswordTokensInput!
  token: String!
  expiresIn: String!
  revoke: Boolean
}

input ResetPasswordTokenCreateManyWithoutUserInput {
  create: [ResetPasswordTokenCreateWithoutUserInput!]
  connect: [ResetPasswordTokenWhereUniqueInput!]
}

input ResetPasswordTokenCreateWithoutUserInput {
  id: ID
  token: String!
  expiresIn: String!
  revoke: Boolean
}

type ResetPasswordTokenEdge {
  node: ResetPasswordToken!
  cursor: String!
}

enum ResetPasswordTokenOrderByInput {
  id_ASC
  id_DESC
  token_ASC
  token_DESC
  expiresIn_ASC
  expiresIn_DESC
  revoke_ASC
  revoke_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ResetPasswordTokenPreviousValues {
  id: ID!
  token: String!
  expiresIn: String!
  revoke: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ResetPasswordTokenScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  expiresIn: String
  expiresIn_not: String
  expiresIn_in: [String!]
  expiresIn_not_in: [String!]
  expiresIn_lt: String
  expiresIn_lte: String
  expiresIn_gt: String
  expiresIn_gte: String
  expiresIn_contains: String
  expiresIn_not_contains: String
  expiresIn_starts_with: String
  expiresIn_not_starts_with: String
  expiresIn_ends_with: String
  expiresIn_not_ends_with: String
  revoke: Boolean
  revoke_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ResetPasswordTokenScalarWhereInput!]
  OR: [ResetPasswordTokenScalarWhereInput!]
  NOT: [ResetPasswordTokenScalarWhereInput!]
}

type ResetPasswordTokenSubscriptionPayload {
  mutation: MutationType!
  node: ResetPasswordToken
  updatedFields: [String!]
  previousValues: ResetPasswordTokenPreviousValues
}

input ResetPasswordTokenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResetPasswordTokenWhereInput
  AND: [ResetPasswordTokenSubscriptionWhereInput!]
  OR: [ResetPasswordTokenSubscriptionWhereInput!]
  NOT: [ResetPasswordTokenSubscriptionWhereInput!]
}

input ResetPasswordTokenUpdateInput {
  user: UserUpdateOneRequiredWithoutResetPasswordTokensInput
  token: String
  expiresIn: String
  revoke: Boolean
}

input ResetPasswordTokenUpdateManyDataInput {
  token: String
  expiresIn: String
  revoke: Boolean
}

input ResetPasswordTokenUpdateManyMutationInput {
  token: String
  expiresIn: String
  revoke: Boolean
}

input ResetPasswordTokenUpdateManyWithoutUserInput {
  create: [ResetPasswordTokenCreateWithoutUserInput!]
  delete: [ResetPasswordTokenWhereUniqueInput!]
  connect: [ResetPasswordTokenWhereUniqueInput!]
  set: [ResetPasswordTokenWhereUniqueInput!]
  disconnect: [ResetPasswordTokenWhereUniqueInput!]
  update: [ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ResetPasswordTokenScalarWhereInput!]
  updateMany: [ResetPasswordTokenUpdateManyWithWhereNestedInput!]
}

input ResetPasswordTokenUpdateManyWithWhereNestedInput {
  where: ResetPasswordTokenScalarWhereInput!
  data: ResetPasswordTokenUpdateManyDataInput!
}

input ResetPasswordTokenUpdateWithoutUserDataInput {
  token: String
  expiresIn: String
  revoke: Boolean
}

input ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInput {
  where: ResetPasswordTokenWhereUniqueInput!
  data: ResetPasswordTokenUpdateWithoutUserDataInput!
}

input ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInput {
  where: ResetPasswordTokenWhereUniqueInput!
  update: ResetPasswordTokenUpdateWithoutUserDataInput!
  create: ResetPasswordTokenCreateWithoutUserInput!
}

input ResetPasswordTokenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  expiresIn: String
  expiresIn_not: String
  expiresIn_in: [String!]
  expiresIn_not_in: [String!]
  expiresIn_lt: String
  expiresIn_lte: String
  expiresIn_gt: String
  expiresIn_gte: String
  expiresIn_contains: String
  expiresIn_not_contains: String
  expiresIn_starts_with: String
  expiresIn_not_starts_with: String
  expiresIn_ends_with: String
  expiresIn_not_ends_with: String
  revoke: Boolean
  revoke_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ResetPasswordTokenWhereInput!]
  OR: [ResetPasswordTokenWhereInput!]
  NOT: [ResetPasswordTokenWhereInput!]
}

input ResetPasswordTokenWhereUniqueInput {
  id: ID
  token: String
}

enum Role {
  ADMIN
  USER
}

enum Source {
  PEXELS
  UNSPLASH
}

type Subscription {
  refreshToken(where: RefreshTokenSubscriptionWhereInput): RefreshTokenSubscriptionPayload
  resetPasswordToken(where: ResetPasswordTokenSubscriptionWhereInput): ResetPasswordTokenSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  wallpaper(where: WallpaperSubscriptionWhereInput): WallpaperSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  birthYear: Int!
  avatar: String
  verified: Boolean
  role: Role!
  wallpapers(where: WallpaperWhereInput, orderBy: WallpaperOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wallpaper!]
  refreshTokens(where: RefreshTokenWhereInput, orderBy: RefreshTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RefreshToken!]
  resetPasswordTokens(where: ResetPasswordTokenWhereInput, orderBy: ResetPasswordTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ResetPasswordToken!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  birthYear: Int!
  avatar: String
  verified: Boolean
  role: Role
  wallpapers: WallpaperCreateManyWithoutUserInput
  refreshTokens: RefreshTokenCreateManyWithoutUserInput
  resetPasswordTokens: ResetPasswordTokenCreateManyWithoutUserInput
}

input UserCreateOneWithoutRefreshTokensInput {
  create: UserCreateWithoutRefreshTokensInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutResetPasswordTokensInput {
  create: UserCreateWithoutResetPasswordTokensInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWallpapersInput {
  create: UserCreateWithoutWallpapersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRefreshTokensInput {
  id: ID
  name: String!
  email: String!
  password: String!
  birthYear: Int!
  avatar: String
  verified: Boolean
  role: Role
  wallpapers: WallpaperCreateManyWithoutUserInput
  resetPasswordTokens: ResetPasswordTokenCreateManyWithoutUserInput
}

input UserCreateWithoutResetPasswordTokensInput {
  id: ID
  name: String!
  email: String!
  password: String!
  birthYear: Int!
  avatar: String
  verified: Boolean
  role: Role
  wallpapers: WallpaperCreateManyWithoutUserInput
  refreshTokens: RefreshTokenCreateManyWithoutUserInput
}

input UserCreateWithoutWallpapersInput {
  id: ID
  name: String!
  email: String!
  password: String!
  birthYear: Int!
  avatar: String
  verified: Boolean
  role: Role
  refreshTokens: RefreshTokenCreateManyWithoutUserInput
  resetPasswordTokens: ResetPasswordTokenCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  birthYear_ASC
  birthYear_DESC
  avatar_ASC
  avatar_DESC
  verified_ASC
  verified_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  birthYear: Int!
  avatar: String
  verified: Boolean
  role: Role!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  birthYear: Int
  avatar: String
  verified: Boolean
  role: Role
  wallpapers: WallpaperUpdateManyWithoutUserInput
  refreshTokens: RefreshTokenUpdateManyWithoutUserInput
  resetPasswordTokens: ResetPasswordTokenUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  birthYear: Int
  avatar: String
  verified: Boolean
  role: Role
}

input UserUpdateOneRequiredWithoutRefreshTokensInput {
  create: UserCreateWithoutRefreshTokensInput
  update: UserUpdateWithoutRefreshTokensDataInput
  upsert: UserUpsertWithoutRefreshTokensInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutResetPasswordTokensInput {
  create: UserCreateWithoutResetPasswordTokensInput
  update: UserUpdateWithoutResetPasswordTokensDataInput
  upsert: UserUpsertWithoutResetPasswordTokensInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutWallpapersInput {
  create: UserCreateWithoutWallpapersInput
  update: UserUpdateWithoutWallpapersDataInput
  upsert: UserUpsertWithoutWallpapersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutRefreshTokensDataInput {
  name: String
  email: String
  password: String
  birthYear: Int
  avatar: String
  verified: Boolean
  role: Role
  wallpapers: WallpaperUpdateManyWithoutUserInput
  resetPasswordTokens: ResetPasswordTokenUpdateManyWithoutUserInput
}

input UserUpdateWithoutResetPasswordTokensDataInput {
  name: String
  email: String
  password: String
  birthYear: Int
  avatar: String
  verified: Boolean
  role: Role
  wallpapers: WallpaperUpdateManyWithoutUserInput
  refreshTokens: RefreshTokenUpdateManyWithoutUserInput
}

input UserUpdateWithoutWallpapersDataInput {
  name: String
  email: String
  password: String
  birthYear: Int
  avatar: String
  verified: Boolean
  role: Role
  refreshTokens: RefreshTokenUpdateManyWithoutUserInput
  resetPasswordTokens: ResetPasswordTokenUpdateManyWithoutUserInput
}

input UserUpsertWithoutRefreshTokensInput {
  update: UserUpdateWithoutRefreshTokensDataInput!
  create: UserCreateWithoutRefreshTokensInput!
}

input UserUpsertWithoutResetPasswordTokensInput {
  update: UserUpdateWithoutResetPasswordTokensDataInput!
  create: UserCreateWithoutResetPasswordTokensInput!
}

input UserUpsertWithoutWallpapersInput {
  update: UserUpdateWithoutWallpapersDataInput!
  create: UserCreateWithoutWallpapersInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  birthYear: Int
  birthYear_not: Int
  birthYear_in: [Int!]
  birthYear_not_in: [Int!]
  birthYear_lt: Int
  birthYear_lte: Int
  birthYear_gt: Int
  birthYear_gte: Int
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  verified: Boolean
  verified_not: Boolean
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  wallpapers_every: WallpaperWhereInput
  wallpapers_some: WallpaperWhereInput
  wallpapers_none: WallpaperWhereInput
  refreshTokens_every: RefreshTokenWhereInput
  refreshTokens_some: RefreshTokenWhereInput
  refreshTokens_none: RefreshTokenWhereInput
  resetPasswordTokens_every: ResetPasswordTokenWhereInput
  resetPasswordTokens_some: ResetPasswordTokenWhereInput
  resetPasswordTokens_none: ResetPasswordTokenWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Wallpaper {
  id: ID!
  wallpaperId: String!
  source: Source!
  user: User!
  rating: Float
  createdAt: DateTime!
  updatedAt: DateTime!
}

type WallpaperConnection {
  pageInfo: PageInfo!
  edges: [WallpaperEdge]!
  aggregate: AggregateWallpaper!
}

input WallpaperCreateInput {
  id: ID
  wallpaperId: String!
  source: Source!
  user: UserCreateOneWithoutWallpapersInput!
  rating: Float
}

input WallpaperCreateManyWithoutUserInput {
  create: [WallpaperCreateWithoutUserInput!]
  connect: [WallpaperWhereUniqueInput!]
}

input WallpaperCreateWithoutUserInput {
  id: ID
  wallpaperId: String!
  source: Source!
  rating: Float
}

type WallpaperEdge {
  node: Wallpaper!
  cursor: String!
}

enum WallpaperOrderByInput {
  id_ASC
  id_DESC
  wallpaperId_ASC
  wallpaperId_DESC
  source_ASC
  source_DESC
  rating_ASC
  rating_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WallpaperPreviousValues {
  id: ID!
  wallpaperId: String!
  source: Source!
  rating: Float
  createdAt: DateTime!
  updatedAt: DateTime!
}

input WallpaperScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  wallpaperId: String
  wallpaperId_not: String
  wallpaperId_in: [String!]
  wallpaperId_not_in: [String!]
  wallpaperId_lt: String
  wallpaperId_lte: String
  wallpaperId_gt: String
  wallpaperId_gte: String
  wallpaperId_contains: String
  wallpaperId_not_contains: String
  wallpaperId_starts_with: String
  wallpaperId_not_starts_with: String
  wallpaperId_ends_with: String
  wallpaperId_not_ends_with: String
  source: Source
  source_not: Source
  source_in: [Source!]
  source_not_in: [Source!]
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WallpaperScalarWhereInput!]
  OR: [WallpaperScalarWhereInput!]
  NOT: [WallpaperScalarWhereInput!]
}

type WallpaperSubscriptionPayload {
  mutation: MutationType!
  node: Wallpaper
  updatedFields: [String!]
  previousValues: WallpaperPreviousValues
}

input WallpaperSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WallpaperWhereInput
  AND: [WallpaperSubscriptionWhereInput!]
  OR: [WallpaperSubscriptionWhereInput!]
  NOT: [WallpaperSubscriptionWhereInput!]
}

input WallpaperUpdateInput {
  wallpaperId: String
  source: Source
  user: UserUpdateOneRequiredWithoutWallpapersInput
  rating: Float
}

input WallpaperUpdateManyDataInput {
  wallpaperId: String
  source: Source
  rating: Float
}

input WallpaperUpdateManyMutationInput {
  wallpaperId: String
  source: Source
  rating: Float
}

input WallpaperUpdateManyWithoutUserInput {
  create: [WallpaperCreateWithoutUserInput!]
  delete: [WallpaperWhereUniqueInput!]
  connect: [WallpaperWhereUniqueInput!]
  set: [WallpaperWhereUniqueInput!]
  disconnect: [WallpaperWhereUniqueInput!]
  update: [WallpaperUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [WallpaperUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [WallpaperScalarWhereInput!]
  updateMany: [WallpaperUpdateManyWithWhereNestedInput!]
}

input WallpaperUpdateManyWithWhereNestedInput {
  where: WallpaperScalarWhereInput!
  data: WallpaperUpdateManyDataInput!
}

input WallpaperUpdateWithoutUserDataInput {
  wallpaperId: String
  source: Source
  rating: Float
}

input WallpaperUpdateWithWhereUniqueWithoutUserInput {
  where: WallpaperWhereUniqueInput!
  data: WallpaperUpdateWithoutUserDataInput!
}

input WallpaperUpsertWithWhereUniqueWithoutUserInput {
  where: WallpaperWhereUniqueInput!
  update: WallpaperUpdateWithoutUserDataInput!
  create: WallpaperCreateWithoutUserInput!
}

input WallpaperWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  wallpaperId: String
  wallpaperId_not: String
  wallpaperId_in: [String!]
  wallpaperId_not_in: [String!]
  wallpaperId_lt: String
  wallpaperId_lte: String
  wallpaperId_gt: String
  wallpaperId_gte: String
  wallpaperId_contains: String
  wallpaperId_not_contains: String
  wallpaperId_starts_with: String
  wallpaperId_not_starts_with: String
  wallpaperId_ends_with: String
  wallpaperId_not_ends_with: String
  source: Source
  source_not: Source
  source_in: [Source!]
  source_not_in: [Source!]
  user: UserWhereInput
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WallpaperWhereInput!]
  OR: [WallpaperWhereInput!]
  NOT: [WallpaperWhereInput!]
}

input WallpaperWhereUniqueInput {
  id: ID
}
`
      }
    