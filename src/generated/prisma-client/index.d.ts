// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  favoriteWallpaper: (where?: FavoriteWallpaperWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  favoriteWallpaper: (
    where: FavoriteWallpaperWhereUniqueInput
  ) => FavoriteWallpaperNullablePromise;
  favoriteWallpapers: (args?: {
    where?: FavoriteWallpaperWhereInput;
    orderBy?: FavoriteWallpaperOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<FavoriteWallpaper>;
  favoriteWallpapersConnection: (args?: {
    where?: FavoriteWallpaperWhereInput;
    orderBy?: FavoriteWallpaperOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FavoriteWallpaperConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createFavoriteWallpaper: (
    data: FavoriteWallpaperCreateInput
  ) => FavoriteWallpaperPromise;
  updateFavoriteWallpaper: (args: {
    data: FavoriteWallpaperUpdateInput;
    where: FavoriteWallpaperWhereUniqueInput;
  }) => FavoriteWallpaperPromise;
  updateManyFavoriteWallpapers: (args: {
    data: FavoriteWallpaperUpdateManyMutationInput;
    where?: FavoriteWallpaperWhereInput;
  }) => BatchPayloadPromise;
  upsertFavoriteWallpaper: (args: {
    where: FavoriteWallpaperWhereUniqueInput;
    create: FavoriteWallpaperCreateInput;
    update: FavoriteWallpaperUpdateInput;
  }) => FavoriteWallpaperPromise;
  deleteFavoriteWallpaper: (
    where: FavoriteWallpaperWhereUniqueInput
  ) => FavoriteWallpaperPromise;
  deleteManyFavoriteWallpapers: (
    where?: FavoriteWallpaperWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  favoriteWallpaper: (
    where?: FavoriteWallpaperSubscriptionWhereInput
  ) => FavoriteWallpaperSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Source = "PEXELS" | "UNSPLASH";

export type FavoriteWallpaperOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "wallpaperId_ASC"
  | "wallpaperId_DESC"
  | "source_ASC"
  | "source_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "avatar_ASC"
  | "avatar_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type FavoriteWallpaperWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface FavoriteWallpaperWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  wallpaperId?: Maybe<String>;
  wallpaperId_not?: Maybe<String>;
  wallpaperId_in?: Maybe<String[] | String>;
  wallpaperId_not_in?: Maybe<String[] | String>;
  wallpaperId_lt?: Maybe<String>;
  wallpaperId_lte?: Maybe<String>;
  wallpaperId_gt?: Maybe<String>;
  wallpaperId_gte?: Maybe<String>;
  wallpaperId_contains?: Maybe<String>;
  wallpaperId_not_contains?: Maybe<String>;
  wallpaperId_starts_with?: Maybe<String>;
  wallpaperId_not_starts_with?: Maybe<String>;
  wallpaperId_ends_with?: Maybe<String>;
  wallpaperId_not_ends_with?: Maybe<String>;
  source?: Maybe<Source>;
  source_not?: Maybe<Source>;
  source_in?: Maybe<Source[] | Source>;
  source_not_in?: Maybe<Source[] | Source>;
  user?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<FavoriteWallpaperWhereInput[] | FavoriteWallpaperWhereInput>;
  OR?: Maybe<FavoriteWallpaperWhereInput[] | FavoriteWallpaperWhereInput>;
  NOT?: Maybe<FavoriteWallpaperWhereInput[] | FavoriteWallpaperWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  avatar?: Maybe<String>;
  avatar_not?: Maybe<String>;
  avatar_in?: Maybe<String[] | String>;
  avatar_not_in?: Maybe<String[] | String>;
  avatar_lt?: Maybe<String>;
  avatar_lte?: Maybe<String>;
  avatar_gt?: Maybe<String>;
  avatar_gte?: Maybe<String>;
  avatar_contains?: Maybe<String>;
  avatar_not_contains?: Maybe<String>;
  avatar_starts_with?: Maybe<String>;
  avatar_not_starts_with?: Maybe<String>;
  avatar_ends_with?: Maybe<String>;
  avatar_not_ends_with?: Maybe<String>;
  favoritesWallpapers_every?: Maybe<FavoriteWallpaperWhereInput>;
  favoritesWallpapers_some?: Maybe<FavoriteWallpaperWhereInput>;
  favoritesWallpapers_none?: Maybe<FavoriteWallpaperWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface FavoriteWallpaperCreateInput {
  id?: Maybe<ID_Input>;
  wallpaperId: String;
  source: Source;
  user: UserCreateOneWithoutFavoritesWallpapersInput;
}

export interface UserCreateOneWithoutFavoritesWallpapersInput {
  create?: Maybe<UserCreateWithoutFavoritesWallpapersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutFavoritesWallpapersInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  avatar?: Maybe<String>;
}

export interface FavoriteWallpaperUpdateInput {
  wallpaperId?: Maybe<String>;
  source?: Maybe<Source>;
  user?: Maybe<UserUpdateOneRequiredWithoutFavoritesWallpapersInput>;
}

export interface UserUpdateOneRequiredWithoutFavoritesWallpapersInput {
  create?: Maybe<UserCreateWithoutFavoritesWallpapersInput>;
  update?: Maybe<UserUpdateWithoutFavoritesWallpapersDataInput>;
  upsert?: Maybe<UserUpsertWithoutFavoritesWallpapersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutFavoritesWallpapersDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  avatar?: Maybe<String>;
}

export interface UserUpsertWithoutFavoritesWallpapersInput {
  update: UserUpdateWithoutFavoritesWallpapersDataInput;
  create: UserCreateWithoutFavoritesWallpapersInput;
}

export interface FavoriteWallpaperUpdateManyMutationInput {
  wallpaperId?: Maybe<String>;
  source?: Maybe<Source>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  avatar?: Maybe<String>;
  favoritesWallpapers?: Maybe<FavoriteWallpaperCreateManyWithoutUserInput>;
}

export interface FavoriteWallpaperCreateManyWithoutUserInput {
  create?: Maybe<
    | FavoriteWallpaperCreateWithoutUserInput[]
    | FavoriteWallpaperCreateWithoutUserInput
  >;
  connect?: Maybe<
    FavoriteWallpaperWhereUniqueInput[] | FavoriteWallpaperWhereUniqueInput
  >;
}

export interface FavoriteWallpaperCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  wallpaperId: String;
  source: Source;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  avatar?: Maybe<String>;
  favoritesWallpapers?: Maybe<FavoriteWallpaperUpdateManyWithoutUserInput>;
}

export interface FavoriteWallpaperUpdateManyWithoutUserInput {
  create?: Maybe<
    | FavoriteWallpaperCreateWithoutUserInput[]
    | FavoriteWallpaperCreateWithoutUserInput
  >;
  delete?: Maybe<
    FavoriteWallpaperWhereUniqueInput[] | FavoriteWallpaperWhereUniqueInput
  >;
  connect?: Maybe<
    FavoriteWallpaperWhereUniqueInput[] | FavoriteWallpaperWhereUniqueInput
  >;
  set?: Maybe<
    FavoriteWallpaperWhereUniqueInput[] | FavoriteWallpaperWhereUniqueInput
  >;
  disconnect?: Maybe<
    FavoriteWallpaperWhereUniqueInput[] | FavoriteWallpaperWhereUniqueInput
  >;
  update?: Maybe<
    | FavoriteWallpaperUpdateWithWhereUniqueWithoutUserInput[]
    | FavoriteWallpaperUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | FavoriteWallpaperUpsertWithWhereUniqueWithoutUserInput[]
    | FavoriteWallpaperUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<
    FavoriteWallpaperScalarWhereInput[] | FavoriteWallpaperScalarWhereInput
  >;
  updateMany?: Maybe<
    | FavoriteWallpaperUpdateManyWithWhereNestedInput[]
    | FavoriteWallpaperUpdateManyWithWhereNestedInput
  >;
}

export interface FavoriteWallpaperUpdateWithWhereUniqueWithoutUserInput {
  where: FavoriteWallpaperWhereUniqueInput;
  data: FavoriteWallpaperUpdateWithoutUserDataInput;
}

export interface FavoriteWallpaperUpdateWithoutUserDataInput {
  wallpaperId?: Maybe<String>;
  source?: Maybe<Source>;
}

export interface FavoriteWallpaperUpsertWithWhereUniqueWithoutUserInput {
  where: FavoriteWallpaperWhereUniqueInput;
  update: FavoriteWallpaperUpdateWithoutUserDataInput;
  create: FavoriteWallpaperCreateWithoutUserInput;
}

export interface FavoriteWallpaperScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  wallpaperId?: Maybe<String>;
  wallpaperId_not?: Maybe<String>;
  wallpaperId_in?: Maybe<String[] | String>;
  wallpaperId_not_in?: Maybe<String[] | String>;
  wallpaperId_lt?: Maybe<String>;
  wallpaperId_lte?: Maybe<String>;
  wallpaperId_gt?: Maybe<String>;
  wallpaperId_gte?: Maybe<String>;
  wallpaperId_contains?: Maybe<String>;
  wallpaperId_not_contains?: Maybe<String>;
  wallpaperId_starts_with?: Maybe<String>;
  wallpaperId_not_starts_with?: Maybe<String>;
  wallpaperId_ends_with?: Maybe<String>;
  wallpaperId_not_ends_with?: Maybe<String>;
  source?: Maybe<Source>;
  source_not?: Maybe<Source>;
  source_in?: Maybe<Source[] | Source>;
  source_not_in?: Maybe<Source[] | Source>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<
    FavoriteWallpaperScalarWhereInput[] | FavoriteWallpaperScalarWhereInput
  >;
  OR?: Maybe<
    FavoriteWallpaperScalarWhereInput[] | FavoriteWallpaperScalarWhereInput
  >;
  NOT?: Maybe<
    FavoriteWallpaperScalarWhereInput[] | FavoriteWallpaperScalarWhereInput
  >;
}

export interface FavoriteWallpaperUpdateManyWithWhereNestedInput {
  where: FavoriteWallpaperScalarWhereInput;
  data: FavoriteWallpaperUpdateManyDataInput;
}

export interface FavoriteWallpaperUpdateManyDataInput {
  wallpaperId?: Maybe<String>;
  source?: Maybe<Source>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  avatar?: Maybe<String>;
}

export interface FavoriteWallpaperSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<FavoriteWallpaperWhereInput>;
  AND?: Maybe<
    | FavoriteWallpaperSubscriptionWhereInput[]
    | FavoriteWallpaperSubscriptionWhereInput
  >;
  OR?: Maybe<
    | FavoriteWallpaperSubscriptionWhereInput[]
    | FavoriteWallpaperSubscriptionWhereInput
  >;
  NOT?: Maybe<
    | FavoriteWallpaperSubscriptionWhereInput[]
    | FavoriteWallpaperSubscriptionWhereInput
  >;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface FavoriteWallpaper {
  id: ID_Output;
  wallpaperId: String;
  source: Source;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface FavoriteWallpaperPromise
  extends Promise<FavoriteWallpaper>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  wallpaperId: () => Promise<String>;
  source: () => Promise<Source>;
  user: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface FavoriteWallpaperSubscription
  extends Promise<AsyncIterator<FavoriteWallpaper>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  wallpaperId: () => Promise<AsyncIterator<String>>;
  source: () => Promise<AsyncIterator<Source>>;
  user: <T = UserSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface FavoriteWallpaperNullablePromise
  extends Promise<FavoriteWallpaper | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  wallpaperId: () => Promise<String>;
  source: () => Promise<Source>;
  user: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  avatar?: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  avatar: () => Promise<String>;
  favoritesWallpapers: <T = FragmentableArray<FavoriteWallpaper>>(args?: {
    where?: FavoriteWallpaperWhereInput;
    orderBy?: FavoriteWallpaperOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
  favoritesWallpapers: <
    T = Promise<AsyncIterator<FavoriteWallpaperSubscription>>
  >(args?: {
    where?: FavoriteWallpaperWhereInput;
    orderBy?: FavoriteWallpaperOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  avatar: () => Promise<String>;
  favoritesWallpapers: <T = FragmentableArray<FavoriteWallpaper>>(args?: {
    where?: FavoriteWallpaperWhereInput;
    orderBy?: FavoriteWallpaperOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface FavoriteWallpaperConnection {
  pageInfo: PageInfo;
  edges: FavoriteWallpaperEdge[];
}

export interface FavoriteWallpaperConnectionPromise
  extends Promise<FavoriteWallpaperConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<FavoriteWallpaperEdge>>() => T;
  aggregate: <T = AggregateFavoriteWallpaperPromise>() => T;
}

export interface FavoriteWallpaperConnectionSubscription
  extends Promise<AsyncIterator<FavoriteWallpaperConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<FavoriteWallpaperEdgeSubscription>>>() => T;
  aggregate: <T = AggregateFavoriteWallpaperSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface FavoriteWallpaperEdge {
  node: FavoriteWallpaper;
  cursor: String;
}

export interface FavoriteWallpaperEdgePromise
  extends Promise<FavoriteWallpaperEdge>,
    Fragmentable {
  node: <T = FavoriteWallpaperPromise>() => T;
  cursor: () => Promise<String>;
}

export interface FavoriteWallpaperEdgeSubscription
  extends Promise<AsyncIterator<FavoriteWallpaperEdge>>,
    Fragmentable {
  node: <T = FavoriteWallpaperSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateFavoriteWallpaper {
  count: Int;
}

export interface AggregateFavoriteWallpaperPromise
  extends Promise<AggregateFavoriteWallpaper>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateFavoriteWallpaperSubscription
  extends Promise<AsyncIterator<AggregateFavoriteWallpaper>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface FavoriteWallpaperSubscriptionPayload {
  mutation: MutationType;
  node: FavoriteWallpaper;
  updatedFields: String[];
  previousValues: FavoriteWallpaperPreviousValues;
}

export interface FavoriteWallpaperSubscriptionPayloadPromise
  extends Promise<FavoriteWallpaperSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = FavoriteWallpaperPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = FavoriteWallpaperPreviousValuesPromise>() => T;
}

export interface FavoriteWallpaperSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<FavoriteWallpaperSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = FavoriteWallpaperSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = FavoriteWallpaperPreviousValuesSubscription>() => T;
}

export interface FavoriteWallpaperPreviousValues {
  id: ID_Output;
  wallpaperId: String;
  source: Source;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface FavoriteWallpaperPreviousValuesPromise
  extends Promise<FavoriteWallpaperPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  wallpaperId: () => Promise<String>;
  source: () => Promise<Source>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface FavoriteWallpaperPreviousValuesSubscription
  extends Promise<AsyncIterator<FavoriteWallpaperPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  wallpaperId: () => Promise<AsyncIterator<String>>;
  source: () => Promise<AsyncIterator<Source>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  avatar?: String;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  avatar: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  avatar: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "FavoriteWallpaper",
    embedded: false
  },
  {
    name: "Source",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;