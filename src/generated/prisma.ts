import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateCartProduct {
  count: Int!
}

type AggregateClient {
  count: Int!
}

type AggregateLog {
  count: Int!
}

type AggregateNotifications {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateSale {
  count: Int!
}

type AggregateService {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

type CartProduct {
  productId: ID!
  name: String!
  price: Float!
  quantitySold: Int!
}

"""
A connection to a list of items.
"""
type CartProductConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CartProductEdge]!
  aggregate: AggregateCartProduct!
}

input CartProductCreateInput {
  productId: ID!
  name: String!
  price: Float!
  quantitySold: Int!
}

input CartProductCreateManyInput {
  create: [CartProductCreateInput!]
}

"""
An edge in a connection.
"""
type CartProductEdge {
  """
  The item at the end of the edge.
  """
  node: CartProduct!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CartProductOrderByInput {
  productId_ASC
  productId_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  quantitySold_ASC
  quantitySold_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CartProductPreviousValues {
  productId: ID!
  name: String!
  price: Float!
  quantitySold: Int!
}

type CartProductSubscriptionPayload {
  mutation: MutationType!
  node: CartProduct
  updatedFields: [String!]
  previousValues: CartProductPreviousValues
}

input CartProductSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartProductSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartProductSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CartProductSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartProductWhereInput
}

input CartProductUpdateInput {
  productId: ID
  name: String
  price: Float
  quantitySold: Int
}

input CartProductUpdateManyInput {
  create: [CartProductCreateInput!]
}

input CartProductWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartProductWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartProductWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CartProductWhereInput!]
  productId: ID
  """
  All values that are not equal to given value.
  """
  productId_not: ID
  """
  All values that are contained in given list.
  """
  productId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  productId_not_in: [ID!]
  """
  All values less than the given value.
  """
  productId_lt: ID
  """
  All values less than or equal the given value.
  """
  productId_lte: ID
  """
  All values greater than the given value.
  """
  productId_gt: ID
  """
  All values greater than or equal the given value.
  """
  productId_gte: ID
  """
  All values containing the given string.
  """
  productId_contains: ID
  """
  All values not containing the given string.
  """
  productId_not_contains: ID
  """
  All values starting with the given string.
  """
  productId_starts_with: ID
  """
  All values not starting with the given string.
  """
  productId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  productId_ends_with: ID
  """
  All values not ending with the given string.
  """
  productId_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  price: Float
  """
  All values that are not equal to given value.
  """
  price_not: Float
  """
  All values that are contained in given list.
  """
  price_in: [Float!]
  """
  All values that are not contained in given list.
  """
  price_not_in: [Float!]
  """
  All values less than the given value.
  """
  price_lt: Float
  """
  All values less than or equal the given value.
  """
  price_lte: Float
  """
  All values greater than the given value.
  """
  price_gt: Float
  """
  All values greater than or equal the given value.
  """
  price_gte: Float
  quantitySold: Int
  """
  All values that are not equal to given value.
  """
  quantitySold_not: Int
  """
  All values that are contained in given list.
  """
  quantitySold_in: [Int!]
  """
  All values that are not contained in given list.
  """
  quantitySold_not_in: [Int!]
  """
  All values less than the given value.
  """
  quantitySold_lt: Int
  """
  All values less than or equal the given value.
  """
  quantitySold_lte: Int
  """
  All values greater than the given value.
  """
  quantitySold_gt: Int
  """
  All values greater than or equal the given value.
  """
  quantitySold_gte: Int
  _MagicalBackRelation_CartProductToSale_every: SaleWhereInput
  _MagicalBackRelation_CartProductToSale_some: SaleWhereInput
  _MagicalBackRelation_CartProductToSale_none: SaleWhereInput
}

type Client implements Node {
  id: ID!
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale!]
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log!]
}

"""
A connection to a list of items.
"""
type ClientConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ClientEdge]!
  aggregate: AggregateClient!
}

input ClientCreateInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  products: ProductCreateManyInput
  sales: SaleCreateManyInput
  logs: LogCreateManyInput
}

input ClientCreateOneWithoutUsersInput {
  create: ClientCreateWithoutUsersInput
  connect: ClientWhereUniqueInput
}

input ClientCreateWithoutUsersInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  products: ProductCreateManyInput
  sales: SaleCreateManyInput
  logs: LogCreateManyInput
}

"""
An edge in a connection.
"""
type ClientEdge {
  """
  The item at the end of the edge.
  """
  node: Client!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ClientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ClientPreviousValues {
  id: ID!
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
}

type ClientSubscriptionPayload {
  mutation: MutationType!
  node: Client
  updatedFields: [String!]
  previousValues: ClientPreviousValues
}

input ClientSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ClientSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ClientSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ClientSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ClientWhereInput
}

input ClientUpdateInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyInput
  sales: SaleUpdateManyInput
  logs: LogUpdateManyInput
}

input ClientUpdateOneWithoutUsersInput {
  create: ClientCreateWithoutUsersInput
  connect: ClientWhereUniqueInput
  delete: Boolean
  update: ClientUpdateWithoutUsersDataInput
  upsert: ClientUpsertWithoutUsersInput
}

input ClientUpdateWithoutUsersDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  products: ProductUpdateManyInput
  sales: SaleUpdateManyInput
  logs: LogUpdateManyInput
}

input ClientUpsertWithoutUsersInput {
  update: ClientUpdateWithoutUsersDataInput!
  create: ClientCreateWithoutUsersInput!
}

input ClientWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ClientWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ClientWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ClientWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  lastName: String
  """
  All values that are not equal to given value.
  """
  lastName_not: String
  """
  All values that are contained in given list.
  """
  lastName_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastName_not_in: [String!]
  """
  All values less than the given value.
  """
  lastName_lt: String
  """
  All values less than or equal the given value.
  """
  lastName_lte: String
  """
  All values greater than the given value.
  """
  lastName_gt: String
  """
  All values greater than or equal the given value.
  """
  lastName_gte: String
  """
  All values containing the given string.
  """
  lastName_contains: String
  """
  All values not containing the given string.
  """
  lastName_not_contains: String
  """
  All values starting with the given string.
  """
  lastName_starts_with: String
  """
  All values not starting with the given string.
  """
  lastName_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastName_ends_with: String
  """
  All values not ending with the given string.
  """
  lastName_not_ends_with: String
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  phoneNumber: String
  """
  All values that are not equal to given value.
  """
  phoneNumber_not: String
  """
  All values that are contained in given list.
  """
  phoneNumber_in: [String!]
  """
  All values that are not contained in given list.
  """
  phoneNumber_not_in: [String!]
  """
  All values less than the given value.
  """
  phoneNumber_lt: String
  """
  All values less than or equal the given value.
  """
  phoneNumber_lte: String
  """
  All values greater than the given value.
  """
  phoneNumber_gt: String
  """
  All values greater than or equal the given value.
  """
  phoneNumber_gte: String
  """
  All values containing the given string.
  """
  phoneNumber_contains: String
  """
  All values not containing the given string.
  """
  phoneNumber_not_contains: String
  """
  All values starting with the given string.
  """
  phoneNumber_starts_with: String
  """
  All values not starting with the given string.
  """
  phoneNumber_not_starts_with: String
  """
  All values ending with the given string.
  """
  phoneNumber_ends_with: String
  """
  All values not ending with the given string.
  """
  phoneNumber_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  sales_every: SaleWhereInput
  sales_some: SaleWhereInput
  sales_none: SaleWhereInput
  logs_every: LogWhereInput
  logs_some: LogWhereInput
  logs_none: LogWhereInput
}

input ClientWhereUniqueInput {
  id: ID
  email: String
  phoneNumber: String
}

scalar DateTime

type Log implements Node {
  id: ID!
  message: String!
  type: LogType!
  createdAt: DateTime!
  user(where: UserWhereInput): User!
}

"""
A connection to a list of items.
"""
type LogConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  message: String!
  type: LogType!
  user: UserCreateOneInput!
}

input LogCreateManyInput {
  create: [LogCreateInput!]
  connect: [LogWhereUniqueInput!]
}

"""
An edge in a connection.
"""
type LogEdge {
  """
  The item at the end of the edge.
  """
  node: Log!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum LogOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LogPreviousValues {
  id: ID!
  message: String!
  type: LogType!
  createdAt: DateTime!
}

type LogSubscriptionPayload {
  mutation: MutationType!
  node: Log
  updatedFields: [String!]
  previousValues: LogPreviousValues
}

input LogSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LogSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LogSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LogSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LogWhereInput
}

enum LogType {
  ERROR
}

input LogUpdateDataInput {
  message: String
  type: LogType
  user: UserUpdateOneInput
}

input LogUpdateInput {
  message: String
  type: LogType
  user: UserUpdateOneInput
}

input LogUpdateManyInput {
  create: [LogCreateInput!]
  connect: [LogWhereUniqueInput!]
  disconnect: [LogWhereUniqueInput!]
  delete: [LogWhereUniqueInput!]
  update: [LogUpdateWithWhereUniqueNestedInput!]
  upsert: [LogUpsertWithWhereUniqueNestedInput!]
}

input LogUpdateWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput!
  data: LogUpdateDataInput!
}

input LogUpsertWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput!
  update: LogUpdateDataInput!
  create: LogCreateInput!
}

input LogWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LogWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LogWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LogWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  message: String
  """
  All values that are not equal to given value.
  """
  message_not: String
  """
  All values that are contained in given list.
  """
  message_in: [String!]
  """
  All values that are not contained in given list.
  """
  message_not_in: [String!]
  """
  All values less than the given value.
  """
  message_lt: String
  """
  All values less than or equal the given value.
  """
  message_lte: String
  """
  All values greater than the given value.
  """
  message_gt: String
  """
  All values greater than or equal the given value.
  """
  message_gte: String
  """
  All values containing the given string.
  """
  message_contains: String
  """
  All values not containing the given string.
  """
  message_not_contains: String
  """
  All values starting with the given string.
  """
  message_starts_with: String
  """
  All values not starting with the given string.
  """
  message_not_starts_with: String
  """
  All values ending with the given string.
  """
  message_ends_with: String
  """
  All values not ending with the given string.
  """
  message_not_ends_with: String
  type: LogType
  """
  All values that are not equal to given value.
  """
  type_not: LogType
  """
  All values that are contained in given list.
  """
  type_in: [LogType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [LogType!]
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  user: UserWhereInput
  _MagicalBackRelation_ClientToLog_every: ClientWhereInput
  _MagicalBackRelation_ClientToLog_some: ClientWhereInput
  _MagicalBackRelation_ClientToLog_none: ClientWhereInput
}

input LogWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

type Notifications {
  fireWhen: Int!
  devices: [String!]!
}

"""
A connection to a list of items.
"""
type NotificationsConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [NotificationsEdge]!
  aggregate: AggregateNotifications!
}

input NotificationsCreatedevicesInput {
  set: [String!]
}

input NotificationsCreateInput {
  fireWhen: Int
  devices: NotificationsCreatedevicesInput
}

input NotificationsCreateOneInput {
  create: NotificationsCreateInput
}

"""
An edge in a connection.
"""
type NotificationsEdge {
  """
  The item at the end of the edge.
  """
  node: Notifications!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum NotificationsOrderByInput {
  fireWhen_ASC
  fireWhen_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NotificationsPreviousValues {
  fireWhen: Int!
  devices: [String!]!
}

type NotificationsSubscriptionPayload {
  mutation: MutationType!
  node: Notifications
  updatedFields: [String!]
  previousValues: NotificationsPreviousValues
}

input NotificationsSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [NotificationsSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [NotificationsSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [NotificationsSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationsWhereInput
}

input NotificationsUpdateDataInput {
  fireWhen: Int
  devices: NotificationsUpdatedevicesInput
}

input NotificationsUpdatedevicesInput {
  set: [String!]
}

input NotificationsUpdateInput {
  fireWhen: Int
  devices: NotificationsUpdatedevicesInput
}

input NotificationsUpdateOneInput {
  create: NotificationsCreateInput
  delete: Boolean
  update: NotificationsUpdateDataInput
  upsert: NotificationsUpsertNestedInput
}

input NotificationsUpsertNestedInput {
  update: NotificationsUpdateDataInput!
  create: NotificationsCreateInput!
}

input NotificationsWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [NotificationsWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [NotificationsWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [NotificationsWhereInput!]
  fireWhen: Int
  """
  All values that are not equal to given value.
  """
  fireWhen_not: Int
  """
  All values that are contained in given list.
  """
  fireWhen_in: [Int!]
  """
  All values that are not contained in given list.
  """
  fireWhen_not_in: [Int!]
  """
  All values less than the given value.
  """
  fireWhen_lt: Int
  """
  All values less than or equal the given value.
  """
  fireWhen_lte: Int
  """
  All values greater than the given value.
  """
  fireWhen_gt: Int
  """
  All values greater than or equal the given value.
  """
  fireWhen_gte: Int
  _MagicalBackRelation_NotificationsToUser_every: UserWhereInput
  _MagicalBackRelation_NotificationsToUser_some: UserWhereInput
  _MagicalBackRelation_NotificationsToUser_none: UserWhereInput
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type Product implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  quantity: Int!
  user(where: UserWhereInput): User!
}

"""
A connection to a list of items.
"""
type ProductConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  price: Float!
  quantity: Int!
  user: UserCreateOneInput!
}

input ProductCreateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
}

"""
An edge in a connection.
"""
type ProductEdge {
  """
  The item at the end of the edge.
  """
  node: Product!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  quantity: Int!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateDataInput {
  name: String
  price: Float
  quantity: Int
  user: UserUpdateOneInput
}

input ProductUpdateInput {
  name: String
  price: Float
  quantity: Int
  user: UserUpdateOneInput
}

input ProductUpdateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductUpsertWithWhereUniqueNestedInput!]
}

input ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateDataInput!
}

input ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  price: Float
  """
  All values that are not equal to given value.
  """
  price_not: Float
  """
  All values that are contained in given list.
  """
  price_in: [Float!]
  """
  All values that are not contained in given list.
  """
  price_not_in: [Float!]
  """
  All values less than the given value.
  """
  price_lt: Float
  """
  All values less than or equal the given value.
  """
  price_lte: Float
  """
  All values greater than the given value.
  """
  price_gt: Float
  """
  All values greater than or equal the given value.
  """
  price_gte: Float
  quantity: Int
  """
  All values that are not equal to given value.
  """
  quantity_not: Int
  """
  All values that are contained in given list.
  """
  quantity_in: [Int!]
  """
  All values that are not contained in given list.
  """
  quantity_not_in: [Int!]
  """
  All values less than the given value.
  """
  quantity_lt: Int
  """
  All values less than or equal the given value.
  """
  quantity_lte: Int
  """
  All values greater than the given value.
  """
  quantity_gt: Int
  """
  All values greater than or equal the given value.
  """
  quantity_gte: Int
  user: UserWhereInput
  _MagicalBackRelation_ClientToProduct_every: ClientWhereInput
  _MagicalBackRelation_ClientToProduct_some: ClientWhereInput
  _MagicalBackRelation_ClientToProduct_none: ClientWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Sale implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  products(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct!]
  soldBy(where: UserWhereInput): User!
}

"""
A connection to a list of items.
"""
type SaleConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [SaleEdge]!
  aggregate: AggregateSale!
}

input SaleCreateInput {
  products: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput!
}

input SaleCreateManyInput {
  create: [SaleCreateInput!]
  connect: [SaleWhereUniqueInput!]
}

input SaleCreateManyWithoutSoldByInput {
  create: [SaleCreateWithoutSoldByInput!]
  connect: [SaleWhereUniqueInput!]
}

input SaleCreateWithoutSoldByInput {
  products: CartProductCreateManyInput
}

"""
An edge in a connection.
"""
type SaleEdge {
  """
  The item at the end of the edge.
  """
  node: Sale!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum SaleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SalePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SaleSubscriptionPayload {
  mutation: MutationType!
  node: Sale
  updatedFields: [String!]
  previousValues: SalePreviousValues
}

input SaleSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [SaleSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [SaleSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [SaleSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SaleWhereInput
}

input SaleUpdateDataInput {
  products: CartProductUpdateManyInput
  soldBy: UserUpdateOneWithoutSalesInput
}

input SaleUpdateInput {
  products: CartProductUpdateManyInput
  soldBy: UserUpdateOneWithoutSalesInput
}

input SaleUpdateManyInput {
  create: [SaleCreateInput!]
  connect: [SaleWhereUniqueInput!]
  disconnect: [SaleWhereUniqueInput!]
  delete: [SaleWhereUniqueInput!]
  update: [SaleUpdateWithWhereUniqueNestedInput!]
  upsert: [SaleUpsertWithWhereUniqueNestedInput!]
}

input SaleUpdateManyWithoutSoldByInput {
  create: [SaleCreateWithoutSoldByInput!]
  connect: [SaleWhereUniqueInput!]
  disconnect: [SaleWhereUniqueInput!]
  delete: [SaleWhereUniqueInput!]
  update: [SaleUpdateWithWhereUniqueWithoutSoldByInput!]
  upsert: [SaleUpsertWithWhereUniqueWithoutSoldByInput!]
}

input SaleUpdateWithoutSoldByDataInput {
  products: CartProductUpdateManyInput
}

input SaleUpdateWithWhereUniqueNestedInput {
  where: SaleWhereUniqueInput!
  data: SaleUpdateDataInput!
}

input SaleUpdateWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput!
  data: SaleUpdateWithoutSoldByDataInput!
}

input SaleUpsertWithWhereUniqueNestedInput {
  where: SaleWhereUniqueInput!
  update: SaleUpdateDataInput!
  create: SaleCreateInput!
}

input SaleUpsertWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput!
  update: SaleUpdateWithoutSoldByDataInput!
  create: SaleCreateWithoutSoldByInput!
}

input SaleWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [SaleWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [SaleWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [SaleWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  products_every: CartProductWhereInput
  products_some: CartProductWhereInput
  products_none: CartProductWhereInput
  soldBy: UserWhereInput
  _MagicalBackRelation_ClientToSale_every: ClientWhereInput
  _MagicalBackRelation_ClientToSale_some: ClientWhereInput
  _MagicalBackRelation_ClientToSale_none: ClientWhereInput
}

input SaleWhereUniqueInput {
  id: ID
}

type Service implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  user(where: UserWhereInput): User!
}

"""
A connection to a list of items.
"""
type ServiceConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ServiceEdge]!
  aggregate: AggregateService!
}

input ServiceCreateInput {
  name: String!
  price: Float!
  user: UserCreateOneInput!
}

"""
An edge in a connection.
"""
type ServiceEdge {
  """
  The item at the end of the edge.
  """
  node: Service!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ServiceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
}

type ServicePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
}

type ServiceSubscriptionPayload {
  mutation: MutationType!
  node: Service
  updatedFields: [String!]
  previousValues: ServicePreviousValues
}

input ServiceSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ServiceSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ServiceSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ServiceSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ServiceWhereInput
}

input ServiceUpdateInput {
  name: String
  price: Float
  user: UserUpdateOneInput
}

input ServiceWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ServiceWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ServiceWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ServiceWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  price: Float
  """
  All values that are not equal to given value.
  """
  price_not: Float
  """
  All values that are contained in given list.
  """
  price_in: [Float!]
  """
  All values that are not contained in given list.
  """
  price_not_in: [Float!]
  """
  All values less than the given value.
  """
  price_lt: Float
  """
  All values less than or equal the given value.
  """
  price_lte: Float
  """
  All values greater than the given value.
  """
  price_gt: Float
  """
  All values greater than or equal the given value.
  """
  price_gte: Float
  user: UserWhereInput
}

input ServiceWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  lastName: String
  notifications(where: NotificationsWhereInput): Notifications!
  phoneNumber: String!
  password: String!
  permissions: [UserPermissions!]!
  isAdmin: Boolean
  client(where: ClientWhereInput): Client!
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale!]
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  isAdmin: Boolean
  permissions: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput!
  client: ClientCreateOneWithoutUsersInput!
  sales: SaleCreateManyWithoutSoldByInput
}

input UserCreateManyWithoutClientInput {
  create: [UserCreateWithoutClientInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSalesInput {
  create: UserCreateWithoutSalesInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [UserPermissions!]
}

input UserCreateWithoutClientInput {
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  isAdmin: Boolean
  permissions: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput!
  sales: SaleCreateManyWithoutSoldByInput
}

input UserCreateWithoutSalesInput {
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  isAdmin: Boolean
  permissions: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput!
  client: ClientCreateOneWithoutUsersInput!
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  lastName_ASC
  lastName_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  password_ASC
  password_DESC
  isAdmin_ASC
  isAdmin_DESC
}

enum UserPermissions {
  ADD_PRODUCTS
  EDIT_PRODUCTS
  DELETE_PRODUCTS
  ADD_SALES
  DELETE_SALES
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  permissions: [UserPermissions!]!
  isAdmin: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
  notifications: NotificationsUpdateOneInput
  client: ClientUpdateOneWithoutUsersInput
  sales: SaleUpdateManyWithoutSoldByInput
}

input UserUpdateInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
  notifications: NotificationsUpdateOneInput
  client: ClientUpdateOneWithoutUsersInput
  sales: SaleUpdateManyWithoutSoldByInput
}

input UserUpdateManyWithoutClientInput {
  create: [UserCreateWithoutClientInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutClientInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutSalesInput {
  create: UserCreateWithoutSalesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutSalesDataInput
  upsert: UserUpsertWithoutSalesInput
}

input UserUpdatepermissionsInput {
  set: [UserPermissions!]
}

input UserUpdateWithoutClientDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
  notifications: NotificationsUpdateOneInput
  sales: SaleUpdateManyWithoutSoldByInput
}

input UserUpdateWithoutSalesDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
  notifications: NotificationsUpdateOneInput
  client: ClientUpdateOneWithoutUsersInput
}

input UserUpdateWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutClientDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutSalesInput {
  update: UserUpdateWithoutSalesDataInput!
  create: UserCreateWithoutSalesInput!
}

input UserUpsertWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutClientDataInput!
  create: UserCreateWithoutClientInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  lastName: String
  """
  All values that are not equal to given value.
  """
  lastName_not: String
  """
  All values that are contained in given list.
  """
  lastName_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastName_not_in: [String!]
  """
  All values less than the given value.
  """
  lastName_lt: String
  """
  All values less than or equal the given value.
  """
  lastName_lte: String
  """
  All values greater than the given value.
  """
  lastName_gt: String
  """
  All values greater than or equal the given value.
  """
  lastName_gte: String
  """
  All values containing the given string.
  """
  lastName_contains: String
  """
  All values not containing the given string.
  """
  lastName_not_contains: String
  """
  All values starting with the given string.
  """
  lastName_starts_with: String
  """
  All values not starting with the given string.
  """
  lastName_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastName_ends_with: String
  """
  All values not ending with the given string.
  """
  lastName_not_ends_with: String
  phoneNumber: String
  """
  All values that are not equal to given value.
  """
  phoneNumber_not: String
  """
  All values that are contained in given list.
  """
  phoneNumber_in: [String!]
  """
  All values that are not contained in given list.
  """
  phoneNumber_not_in: [String!]
  """
  All values less than the given value.
  """
  phoneNumber_lt: String
  """
  All values less than or equal the given value.
  """
  phoneNumber_lte: String
  """
  All values greater than the given value.
  """
  phoneNumber_gt: String
  """
  All values greater than or equal the given value.
  """
  phoneNumber_gte: String
  """
  All values containing the given string.
  """
  phoneNumber_contains: String
  """
  All values not containing the given string.
  """
  phoneNumber_not_contains: String
  """
  All values starting with the given string.
  """
  phoneNumber_starts_with: String
  """
  All values not starting with the given string.
  """
  phoneNumber_not_starts_with: String
  """
  All values ending with the given string.
  """
  phoneNumber_ends_with: String
  """
  All values not ending with the given string.
  """
  phoneNumber_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  isAdmin: Boolean
  """
  All values that are not equal to given value.
  """
  isAdmin_not: Boolean
  notifications: NotificationsWhereInput
  client: ClientWhereInput
  sales_every: SaleWhereInput
  sales_some: SaleWhereInput
  sales_none: SaleWhereInput
  _MagicalBackRelation_ProductToUser_every: ProductWhereInput
  _MagicalBackRelation_ProductToUser_some: ProductWhereInput
  _MagicalBackRelation_ProductToUser_none: ProductWhereInput
  _MagicalBackRelation_LogToUser_every: LogWhereInput
  _MagicalBackRelation_LogToUser_some: LogWhereInput
  _MagicalBackRelation_LogToUser_none: LogWhereInput
  _MagicalBackRelation_ServiceToUser_every: ServiceWhereInput
  _MagicalBackRelation_ServiceToUser_some: ServiceWhereInput
  _MagicalBackRelation_ServiceToUser_none: ServiceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  phoneNumber: String
}

type Mutation {
  createClient(data: ClientCreateInput!): Client!
  createService(data: ServiceCreateInput!): Service!
  createNotifications(data: NotificationsCreateInput!): Notifications!
  createSale(data: SaleCreateInput!): Sale!
  createProduct(data: ProductCreateInput!): Product!
  createUser(data: UserCreateInput!): User!
  createLog(data: LogCreateInput!): Log!
  createCartProduct(data: CartProductCreateInput!): CartProduct!
  updateClient(data: ClientUpdateInput!, where: ClientWhereUniqueInput!): Client
  updateService(data: ServiceUpdateInput!, where: ServiceWhereUniqueInput!): Service
  updateSale(data: SaleUpdateInput!, where: SaleWhereUniqueInput!): Sale
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  deleteClient(where: ClientWhereUniqueInput!): Client
  deleteService(where: ServiceWhereUniqueInput!): Service
  deleteSale(where: SaleWhereUniqueInput!): Sale
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLog(where: LogWhereUniqueInput!): Log
  upsertClient(where: ClientWhereUniqueInput!, create: ClientCreateInput!, update: ClientUpdateInput!): Client!
  upsertService(where: ServiceWhereUniqueInput!, create: ServiceCreateInput!, update: ServiceUpdateInput!): Service!
  upsertSale(where: SaleWhereUniqueInput!, create: SaleCreateInput!, update: SaleUpdateInput!): Sale!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  updateManyClients(data: ClientUpdateInput!, where: ClientWhereInput): BatchPayload!
  updateManyServices(data: ServiceUpdateInput!, where: ServiceWhereInput): BatchPayload!
  updateManyNotificationses(data: NotificationsUpdateInput!, where: NotificationsWhereInput): BatchPayload!
  updateManySales(data: SaleUpdateInput!, where: SaleWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyLogs(data: LogUpdateInput!, where: LogWhereInput): BatchPayload!
  updateManyCartProducts(data: CartProductUpdateInput!, where: CartProductWhereInput): BatchPayload!
  deleteManyClients(where: ClientWhereInput): BatchPayload!
  deleteManyServices(where: ServiceWhereInput): BatchPayload!
  deleteManyNotificationses(where: NotificationsWhereInput): BatchPayload!
  deleteManySales(where: SaleWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  deleteManyCartProducts(where: CartProductWhereInput): BatchPayload!
}

type Query {
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client]!
  services(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Service]!
  notificationses(where: NotificationsWhereInput, orderBy: NotificationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notifications]!
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  cartProducts(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct]!
  client(where: ClientWhereUniqueInput!): Client
  service(where: ServiceWhereUniqueInput!): Service
  sale(where: SaleWhereUniqueInput!): Sale
  product(where: ProductWhereUniqueInput!): Product
  user(where: UserWhereUniqueInput!): User
  log(where: LogWhereUniqueInput!): Log
  clientsConnection(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientConnection!
  servicesConnection(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceConnection!
  notificationsesConnection(where: NotificationsWhereInput, orderBy: NotificationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationsConnection!
  salesConnection(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SaleConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  cartProductsConnection(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartProductConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  client(where: ClientSubscriptionWhereInput): ClientSubscriptionPayload
  service(where: ServiceSubscriptionWhereInput): ServiceSubscriptionPayload
  notifications(where: NotificationsSubscriptionWhereInput): NotificationsSubscriptionPayload
  sale(where: SaleSubscriptionWhereInput): SaleSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  cartProduct(where: CartProductSubscriptionWhereInput): CartProductSubscriptionPayload
}
`

export type CartProductOrderByInput = 
  'productId_ASC' |
  'productId_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'quantitySold_ASC' |
  'quantitySold_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LogType = 
  'ERROR'

export type ClientOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'password_ASC' |
  'password_DESC' |
  'isAdmin_ASC' |
  'isAdmin_DESC'

export type UserPermissions = 
  'ADD_PRODUCTS' |
  'EDIT_PRODUCTS' |
  'DELETE_PRODUCTS' |
  'ADD_SALES' |
  'DELETE_SALES'

export type SaleOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type ProductOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'quantity_ASC' |
  'quantity_DESC'

export type LogOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'message_ASC' |
  'message_DESC' |
  'type_ASC' |
  'type_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ServiceOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC'

export type NotificationsOrderByInput = 
  'fireWhen_ASC' |
  'fireWhen_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface ClientCreateOneWithoutUsersInput {
  create?: ClientCreateWithoutUsersInput
  connect?: ClientWhereUniqueInput
}

export interface ClientWhereInput {
  AND?: ClientWhereInput[] | ClientWhereInput
  OR?: ClientWhereInput[] | ClientWhereInput
  NOT?: ClientWhereInput[] | ClientWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
  sales_every?: SaleWhereInput
  sales_some?: SaleWhereInput
  sales_none?: SaleWhereInput
  logs_every?: LogWhereInput
  logs_some?: LogWhereInput
  logs_none?: LogWhereInput
}

export interface LogCreateManyInput {
  create?: LogCreateInput[] | LogCreateInput
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput
}

export interface LogWhereInput {
  AND?: LogWhereInput[] | LogWhereInput
  OR?: LogWhereInput[] | LogWhereInput
  NOT?: LogWhereInput[] | LogWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  message?: String
  message_not?: String
  message_in?: String[] | String
  message_not_in?: String[] | String
  message_lt?: String
  message_lte?: String
  message_gt?: String
  message_gte?: String
  message_contains?: String
  message_not_contains?: String
  message_starts_with?: String
  message_not_starts_with?: String
  message_ends_with?: String
  message_not_ends_with?: String
  type?: LogType
  type_not?: LogType
  type_in?: LogType[] | LogType
  type_not_in?: LogType[] | LogType
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  user?: UserWhereInput
  _MagicalBackRelation_ClientToLog_every?: ClientWhereInput
  _MagicalBackRelation_ClientToLog_some?: ClientWhereInput
  _MagicalBackRelation_ClientToLog_none?: ClientWhereInput
}

export interface LogCreateInput {
  message: String
  type: LogType
  user: UserCreateOneInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  user?: UserWhereInput
  _MagicalBackRelation_ClientToProduct_every?: ClientWhereInput
  _MagicalBackRelation_ClientToProduct_some?: ClientWhereInput
  _MagicalBackRelation_ClientToProduct_none?: ClientWhereInput
}

export interface ClientUpdateOneWithoutUsersInput {
  create?: ClientCreateWithoutUsersInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateWithoutUsersDataInput
  upsert?: ClientUpsertWithoutUsersInput
}

export interface CartProductUpdateManyInput {
  create?: CartProductCreateInput[] | CartProductCreateInput
}

export interface UserUpdateDataInput {
  name?: String
  lastName?: String
  phoneNumber?: String
  password?: String
  isAdmin?: Boolean
  permissions?: UserUpdatepermissionsInput
  notifications?: NotificationsUpdateOneInput
  client?: ClientUpdateOneWithoutUsersInput
  sales?: SaleUpdateManyWithoutSoldByInput
}

export interface ServiceCreateInput {
  name: String
  price: Float
  user: UserCreateOneInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface LogSubscriptionWhereInput {
  AND?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput
  OR?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput
  NOT?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LogWhereInput
}

export interface ProductUpdateDataInput {
  name?: String
  price?: Float
  quantity?: Int
  user?: UserUpdateOneInput
}

export interface SaleWhereInput {
  AND?: SaleWhereInput[] | SaleWhereInput
  OR?: SaleWhereInput[] | SaleWhereInput
  NOT?: SaleWhereInput[] | SaleWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  products_every?: CartProductWhereInput
  products_some?: CartProductWhereInput
  products_none?: CartProductWhereInput
  soldBy?: UserWhereInput
  _MagicalBackRelation_ClientToSale_every?: ClientWhereInput
  _MagicalBackRelation_ClientToSale_some?: ClientWhereInput
  _MagicalBackRelation_ClientToSale_none?: ClientWhereInput
}

export interface ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateDataInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface ClientCreateInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput
  products?: ProductCreateManyInput
  sales?: SaleCreateManyInput
  logs?: LogCreateManyInput
}

export interface NotificationsWhereInput {
  AND?: NotificationsWhereInput[] | NotificationsWhereInput
  OR?: NotificationsWhereInput[] | NotificationsWhereInput
  NOT?: NotificationsWhereInput[] | NotificationsWhereInput
  fireWhen?: Int
  fireWhen_not?: Int
  fireWhen_in?: Int[] | Int
  fireWhen_not_in?: Int[] | Int
  fireWhen_lt?: Int
  fireWhen_lte?: Int
  fireWhen_gt?: Int
  fireWhen_gte?: Int
  _MagicalBackRelation_NotificationsToUser_every?: UserWhereInput
  _MagicalBackRelation_NotificationsToUser_some?: UserWhereInput
  _MagicalBackRelation_NotificationsToUser_none?: UserWhereInput
}

export interface UserCreateManyWithoutClientInput {
  create?: UserCreateWithoutClientInput[] | UserCreateWithoutClientInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ServiceSubscriptionWhereInput {
  AND?: ServiceSubscriptionWhereInput[] | ServiceSubscriptionWhereInput
  OR?: ServiceSubscriptionWhereInput[] | ServiceSubscriptionWhereInput
  NOT?: ServiceSubscriptionWhereInput[] | ServiceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ServiceWhereInput
}

export interface UserCreateWithoutClientInput {
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  isAdmin?: Boolean
  permissions?: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput
  sales?: SaleCreateManyWithoutSoldByInput
}

export interface CartProductUpdateInput {
  productId?: ID_Input
  name?: String
  price?: Float
  quantitySold?: Int
}

export interface UserCreatepermissionsInput {
  set?: UserPermissions[] | UserPermissions
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  isAdmin?: Boolean
  isAdmin_not?: Boolean
  notifications?: NotificationsWhereInput
  client?: ClientWhereInput
  sales_every?: SaleWhereInput
  sales_some?: SaleWhereInput
  sales_none?: SaleWhereInput
  _MagicalBackRelation_ProductToUser_every?: ProductWhereInput
  _MagicalBackRelation_ProductToUser_some?: ProductWhereInput
  _MagicalBackRelation_ProductToUser_none?: ProductWhereInput
  _MagicalBackRelation_LogToUser_every?: LogWhereInput
  _MagicalBackRelation_LogToUser_some?: LogWhereInput
  _MagicalBackRelation_LogToUser_none?: LogWhereInput
  _MagicalBackRelation_ServiceToUser_every?: ServiceWhereInput
  _MagicalBackRelation_ServiceToUser_some?: ServiceWhereInput
  _MagicalBackRelation_ServiceToUser_none?: ServiceWhereInput
}

export interface NotificationsCreateOneInput {
  create?: NotificationsCreateInput
}

export interface ServiceWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationsCreateInput {
  fireWhen?: Int
  devices?: NotificationsCreatedevicesInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationsCreatedevicesInput {
  set?: String[] | String
}

export interface LogWhereUniqueInput {
  id?: ID_Input
}

export interface SaleCreateManyWithoutSoldByInput {
  create?: SaleCreateWithoutSoldByInput[] | SaleCreateWithoutSoldByInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
}

export interface UserUpdateInput {
  name?: String
  lastName?: String
  phoneNumber?: String
  password?: String
  isAdmin?: Boolean
  permissions?: UserUpdatepermissionsInput
  notifications?: NotificationsUpdateOneInput
  client?: ClientUpdateOneWithoutUsersInput
  sales?: SaleUpdateManyWithoutSoldByInput
}

export interface SaleCreateWithoutSoldByInput {
  products?: CartProductCreateManyInput
}

export interface SaleUpdateInput {
  products?: CartProductUpdateManyInput
  soldBy?: UserUpdateOneWithoutSalesInput
}

export interface CartProductCreateManyInput {
  create?: CartProductCreateInput[] | CartProductCreateInput
}

export interface ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateDataInput
  create: ProductCreateInput
}

export interface CartProductCreateInput {
  productId: ID_Input
  name: String
  price: Float
  quantitySold: Int
}

export interface ClientUpsertWithoutUsersInput {
  update: ClientUpdateWithoutUsersDataInput
  create: ClientCreateWithoutUsersInput
}

export interface ProductCreateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface LogUpdateDataInput {
  message?: String
  type?: LogType
  user?: UserUpdateOneInput
}

export interface ProductCreateInput {
  name: String
  price: Float
  quantity: Int
  user: UserCreateOneInput
}

export interface LogUpdateManyInput {
  create?: LogCreateInput[] | LogCreateInput
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput
  disconnect?: LogWhereUniqueInput[] | LogWhereUniqueInput
  delete?: LogWhereUniqueInput[] | LogWhereUniqueInput
  update?: LogUpdateWithWhereUniqueNestedInput[] | LogUpdateWithWhereUniqueNestedInput
  upsert?: LogUpsertWithWhereUniqueNestedInput[] | LogUpsertWithWhereUniqueNestedInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserUpsertWithoutSalesInput {
  update: UserUpdateWithoutSalesDataInput
  create: UserCreateWithoutSalesInput
}

export interface UserCreateInput {
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  isAdmin?: Boolean
  permissions?: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput
  client: ClientCreateOneWithoutUsersInput
  sales?: SaleCreateManyWithoutSoldByInput
}

export interface UserUpdateOneWithoutSalesInput {
  create?: UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutSalesDataInput
  upsert?: UserUpsertWithoutSalesInput
}

export interface ProductUpdateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueNestedInput[] | ProductUpdateWithWhereUniqueNestedInput
  upsert?: ProductUpsertWithWhereUniqueNestedInput[] | ProductUpsertWithWhereUniqueNestedInput
}

export interface SaleUpdateWithWhereUniqueNestedInput {
  where: SaleWhereUniqueInput
  data: SaleUpdateDataInput
}

export interface ClientCreateWithoutUsersInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  products?: ProductCreateManyInput
  sales?: SaleCreateManyInput
  logs?: LogCreateManyInput
}

export interface ClientUpdateWithoutUsersDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  products?: ProductUpdateManyInput
  sales?: SaleUpdateManyInput
  logs?: LogUpdateManyInput
}

export interface SaleCreateManyInput {
  create?: SaleCreateInput[] | SaleCreateInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
}

export interface CartProductWhereInput {
  AND?: CartProductWhereInput[] | CartProductWhereInput
  OR?: CartProductWhereInput[] | CartProductWhereInput
  NOT?: CartProductWhereInput[] | CartProductWhereInput
  productId?: ID_Input
  productId_not?: ID_Input
  productId_in?: ID_Input[] | ID_Input
  productId_not_in?: ID_Input[] | ID_Input
  productId_lt?: ID_Input
  productId_lte?: ID_Input
  productId_gt?: ID_Input
  productId_gte?: ID_Input
  productId_contains?: ID_Input
  productId_not_contains?: ID_Input
  productId_starts_with?: ID_Input
  productId_not_starts_with?: ID_Input
  productId_ends_with?: ID_Input
  productId_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  quantitySold?: Int
  quantitySold_not?: Int
  quantitySold_in?: Int[] | Int
  quantitySold_not_in?: Int[] | Int
  quantitySold_lt?: Int
  quantitySold_lte?: Int
  quantitySold_gt?: Int
  quantitySold_gte?: Int
  _MagicalBackRelation_CartProductToSale_every?: SaleWhereInput
  _MagicalBackRelation_CartProductToSale_some?: SaleWhereInput
  _MagicalBackRelation_CartProductToSale_none?: SaleWhereInput
}

export interface SaleCreateInput {
  products?: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput
}

export interface SaleSubscriptionWhereInput {
  AND?: SaleSubscriptionWhereInput[] | SaleSubscriptionWhereInput
  OR?: SaleSubscriptionWhereInput[] | SaleSubscriptionWhereInput
  NOT?: SaleSubscriptionWhereInput[] | SaleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SaleWhereInput
}

export interface UserCreateOneWithoutSalesInput {
  create?: UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput
}

export interface ClientSubscriptionWhereInput {
  AND?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput
  OR?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput
  NOT?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClientWhereInput
}

export interface UserCreateWithoutSalesInput {
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  isAdmin?: Boolean
  permissions?: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput
  client: ClientCreateOneWithoutUsersInput
}

export interface ClientWhereUniqueInput {
  id?: ID_Input
  email?: String
  phoneNumber?: String
}

export interface ServiceWhereInput {
  AND?: ServiceWhereInput[] | ServiceWhereInput
  OR?: ServiceWhereInput[] | ServiceWhereInput
  NOT?: ServiceWhereInput[] | ServiceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  user?: UserWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  phoneNumber?: String
}

export interface UserUpsertWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutClientDataInput
  create: UserCreateWithoutClientInput
}

export interface ProductUpdateInput {
  name?: String
  price?: Float
  quantity?: Int
  user?: UserUpdateOneInput
}

export interface SaleUpsertWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput
  update: SaleUpdateWithoutSoldByDataInput
  create: SaleCreateWithoutSoldByInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface ClientUpdateInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  products?: ProductUpdateManyInput
  sales?: SaleUpdateManyInput
  logs?: LogUpdateManyInput
}

export interface LogUpdateWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput
  data: LogUpdateDataInput
}

export interface UserUpdateManyWithoutClientInput {
  create?: UserCreateWithoutClientInput[] | UserCreateWithoutClientInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutClientInput[] | UserUpdateWithWhereUniqueWithoutClientInput
  upsert?: UserUpsertWithWhereUniqueWithoutClientInput[] | UserUpsertWithWhereUniqueWithoutClientInput
}

export interface UserUpdateWithoutSalesDataInput {
  name?: String
  lastName?: String
  phoneNumber?: String
  password?: String
  isAdmin?: Boolean
  permissions?: UserUpdatepermissionsInput
  notifications?: NotificationsUpdateOneInput
  client?: ClientUpdateOneWithoutUsersInput
}

export interface UserUpdateWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutClientDataInput
}

export interface SaleUpdateManyInput {
  create?: SaleCreateInput[] | SaleCreateInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  disconnect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  delete?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  update?: SaleUpdateWithWhereUniqueNestedInput[] | SaleUpdateWithWhereUniqueNestedInput
  upsert?: SaleUpsertWithWhereUniqueNestedInput[] | SaleUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateWithoutClientDataInput {
  name?: String
  lastName?: String
  phoneNumber?: String
  password?: String
  isAdmin?: Boolean
  permissions?: UserUpdatepermissionsInput
  notifications?: NotificationsUpdateOneInput
  sales?: SaleUpdateManyWithoutSoldByInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdatepermissionsInput {
  set?: UserPermissions[] | UserPermissions
}

export interface NotificationsUpdateInput {
  fireWhen?: Int
  devices?: NotificationsUpdatedevicesInput
}

export interface NotificationsUpdateOneInput {
  create?: NotificationsCreateInput
  delete?: Boolean
  update?: NotificationsUpdateDataInput
  upsert?: NotificationsUpsertNestedInput
}

export interface LogUpdateInput {
  message?: String
  type?: LogType
  user?: UserUpdateOneInput
}

export interface NotificationsUpdateDataInput {
  fireWhen?: Int
  devices?: NotificationsUpdatedevicesInput
}

export interface LogUpsertWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput
  update: LogUpdateDataInput
  create: LogCreateInput
}

export interface NotificationsUpdatedevicesInput {
  set?: String[] | String
}

export interface SaleUpdateDataInput {
  products?: CartProductUpdateManyInput
  soldBy?: UserUpdateOneWithoutSalesInput
}

export interface NotificationsSubscriptionWhereInput {
  AND?: NotificationsSubscriptionWhereInput[] | NotificationsSubscriptionWhereInput
  OR?: NotificationsSubscriptionWhereInput[] | NotificationsSubscriptionWhereInput
  NOT?: NotificationsSubscriptionWhereInput[] | NotificationsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NotificationsWhereInput
}

export interface SaleUpdateWithoutSoldByDataInput {
  products?: CartProductUpdateManyInput
}

export interface SaleUpdateWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput
  data: SaleUpdateWithoutSoldByDataInput
}

export interface SaleUpdateManyWithoutSoldByInput {
  create?: SaleCreateWithoutSoldByInput[] | SaleCreateWithoutSoldByInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  disconnect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  delete?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  update?: SaleUpdateWithWhereUniqueWithoutSoldByInput[] | SaleUpdateWithWhereUniqueWithoutSoldByInput
  upsert?: SaleUpsertWithWhereUniqueWithoutSoldByInput[] | SaleUpsertWithWhereUniqueWithoutSoldByInput
}

export interface NotificationsUpsertNestedInput {
  update: NotificationsUpdateDataInput
  create: NotificationsCreateInput
}

export interface SaleWhereUniqueInput {
  id?: ID_Input
}

export interface CartProductSubscriptionWhereInput {
  AND?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput
  OR?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput
  NOT?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CartProductWhereInput
}

export interface SaleUpsertWithWhereUniqueNestedInput {
  where: SaleWhereUniqueInput
  update: SaleUpdateDataInput
  create: SaleCreateInput
}

export interface ServiceUpdateInput {
  name?: String
  price?: Float
  user?: UserUpdateOneInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface BatchPayload {
  count: Long
}

export interface CartProductPreviousValues {
  productId: ID_Output
  name: String
  price: Float
  quantitySold: Int
}

/*
 * A connection to a list of items.

 */
export interface ClientConnection {
  pageInfo: PageInfo
  edges: ClientEdge[]
  aggregate: AggregateClient
}

export interface Notifications {
  fireWhen: Int
  devices: String[]
}

export interface Client extends Node {
  id: ID_Output
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: User[]
  products?: Product[]
  sales?: Sale[]
  logs?: Log[]
}

/*
 * A connection to a list of items.

 */
export interface CartProductConnection {
  pageInfo: PageInfo
  edges: CartProductEdge[]
  aggregate: AggregateCartProduct
}

export interface AggregateCartProduct {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface LogEdge {
  node: Log
  cursor: String
}

export interface Service extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  user: User
}

export interface AggregateUser {
  count: Int
}

export interface CartProductSubscriptionPayload {
  mutation: MutationType
  node?: CartProduct
  updatedFields?: String[]
  previousValues?: CartProductPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Log extends Node {
  id: ID_Output
  message: String
  type: LogType
  createdAt: DateTime
  user: User
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  lastName?: String
  notifications: Notifications
  phoneNumber: String
  password: String
  permissions: UserPermissions[]
  isAdmin?: Boolean
  client: Client
  sales?: Sale[]
}

export interface AggregateSale {
  count: Int
}

export interface ClientSubscriptionPayload {
  mutation: MutationType
  node?: Client
  updatedFields?: String[]
  previousValues?: ClientPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface SaleConnection {
  pageInfo: PageInfo
  edges: SaleEdge[]
  aggregate: AggregateSale
}

export interface ClientPreviousValues {
  id: ID_Output
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
}

/*
 * An edge in a connection.

 */
export interface NotificationsEdge {
  node: Notifications
  cursor: String
}

export interface LogPreviousValues {
  id: ID_Output
  message: String
  type: LogType
  createdAt: DateTime
}

export interface AggregateService {
  count: Int
}

export interface ServiceSubscriptionPayload {
  mutation: MutationType
  node?: Service
  updatedFields?: String[]
  previousValues?: ServicePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ServiceConnection {
  pageInfo: PageInfo
  edges: ServiceEdge[]
  aggregate: AggregateService
}

export interface ServicePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
}

/*
 * An edge in a connection.

 */
export interface ClientEdge {
  node: Client
  cursor: String
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  quantity: Int
  user: User
}

/*
 * An edge in a connection.

 */
export interface CartProductEdge {
  node: CartProduct
  cursor: String
}

export interface NotificationsSubscriptionPayload {
  mutation: MutationType
  node?: Notifications
  updatedFields?: String[]
  previousValues?: NotificationsPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LogConnection {
  pageInfo: PageInfo
  edges: LogEdge[]
  aggregate: AggregateLog
}

export interface NotificationsPreviousValues {
  fireWhen: Int
  devices: String[]
}

export interface AggregateProduct {
  count: Int
}

export interface CartProduct {
  productId: ID_Output
  name: String
  price: Float
  quantitySold: Int
}

/*
 * An edge in a connection.

 */
export interface SaleEdge {
  node: Sale
  cursor: String
}

export interface SaleSubscriptionPayload {
  mutation: MutationType
  node?: Sale
  updatedFields?: String[]
  previousValues?: SalePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface NotificationsConnection {
  pageInfo: PageInfo
  edges: NotificationsEdge[]
  aggregate: AggregateNotifications
}

export interface SalePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateClient {
  count: Int
}

export interface LogSubscriptionPayload {
  mutation: MutationType
  node?: Log
  updatedFields?: String[]
  previousValues?: LogPreviousValues
}

export interface AggregateLog {
  count: Int
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  permissions: UserPermissions[]
  isAdmin?: Boolean
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface Sale extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  products?: CartProduct[]
  soldBy: User
}

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  quantity: Int
}

export interface AggregateNotifications {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface ServiceEdge {
  node: Service
  cursor: String
}

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  clients: (args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Client[]>
  services: (args: { where?: ServiceWhereInput, orderBy?: ServiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Service[]>
  notificationses: (args: { where?: NotificationsWhereInput, orderBy?: NotificationsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Notifications[]>
  sales: (args: { where?: SaleWhereInput, orderBy?: SaleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Sale[]>
  products: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Product[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  logs: (args: { where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Log[]>
  cartProducts: (args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartProduct[]>
  client: (args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Client | null>
  service: (args: { where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Service | null>
  sale: (args: { where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Sale | null>
  product: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  log: (args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Log | null>
  clientsConnection: (args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ClientConnection>
  servicesConnection: (args: { where?: ServiceWhereInput, orderBy?: ServiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ServiceConnection>
  notificationsesConnection: (args: { where?: NotificationsWhereInput, orderBy?: NotificationsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<NotificationsConnection>
  salesConnection: (args: { where?: SaleWhereInput, orderBy?: SaleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<SaleConnection>
  productsConnection: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  logsConnection: (args: { where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<LogConnection>
  cartProductsConnection: (args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartProductConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createClient: (args: { data: ClientCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Client>
  createService: (args: { data: ServiceCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Service>
  createNotifications: (args: { data: NotificationsCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Notifications>
  createSale: (args: { data: SaleCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Sale>
  createProduct: (args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createLog: (args: { data: LogCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Log>
  createCartProduct: (args: { data: CartProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct>
  updateClient: (args: { data: ClientUpdateInput, where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Client | null>
  updateService: (args: { data: ServiceUpdateInput, where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Service | null>
  updateSale: (args: { data: SaleUpdateInput, where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Sale | null>
  updateProduct: (args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateLog: (args: { data: LogUpdateInput, where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Log | null>
  deleteClient: (args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Client | null>
  deleteService: (args: { where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Service | null>
  deleteSale: (args: { where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Sale | null>
  deleteProduct: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteLog: (args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Log | null>
  upsertClient: (args: { where: ClientWhereUniqueInput, create: ClientCreateInput, update: ClientUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Client>
  upsertService: (args: { where: ServiceWhereUniqueInput, create: ServiceCreateInput, update: ServiceUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Service>
  upsertSale: (args: { where: SaleWhereUniqueInput, create: SaleCreateInput, update: SaleUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Sale>
  upsertProduct: (args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertLog: (args: { where: LogWhereUniqueInput, create: LogCreateInput, update: LogUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Log>
  updateManyClients: (args: { data: ClientUpdateInput, where?: ClientWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyServices: (args: { data: ServiceUpdateInput, where?: ServiceWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyNotificationses: (args: { data: NotificationsUpdateInput, where?: NotificationsWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManySales: (args: { data: SaleUpdateInput, where?: SaleWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyProducts: (args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyLogs: (args: { data: LogUpdateInput, where?: LogWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCartProducts: (args: { data: CartProductUpdateInput, where?: CartProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyClients: (args: { where?: ClientWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyServices: (args: { where?: ServiceWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyNotificationses: (args: { where?: NotificationsWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManySales: (args: { where?: SaleWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProducts: (args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyLogs: (args: { where?: LogWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCartProducts: (args: { where?: CartProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  client: (args: { where?: ClientSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ClientSubscriptionPayload>>
  service: (args: { where?: ServiceSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ServiceSubscriptionPayload>>
  notifications: (args: { where?: NotificationsSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<NotificationsSubscriptionPayload>>
  sale: (args: { where?: SaleSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<SaleSubscriptionPayload>>
  product: (args: { where?: ProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  log: (args: { where?: LogSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<LogSubscriptionPayload>>
  cartProduct: (args: { where?: CartProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CartProductSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Client: (where: ClientWhereInput): Promise<boolean> => super.existsDelegate('query', 'clients', { where }, {}, '{ id }'),
    Service: (where: ServiceWhereInput): Promise<boolean> => super.existsDelegate('query', 'services', { where }, {}, '{ id }'),
    Notifications: (where: NotificationsWhereInput): Promise<boolean> => super.existsDelegate('query', 'notificationses', { where }, {}, '{ id }'),
    Sale: (where: SaleWhereInput): Promise<boolean> => super.existsDelegate('query', 'sales', { where }, {}, '{ id }'),
    Product: (where: ProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'products', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Log: (where: LogWhereInput): Promise<boolean> => super.existsDelegate('query', 'logs', { where }, {}, '{ id }'),
    CartProduct: (where: CartProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'cartProducts', { where }, {}, '{ id }')
  }

  query: Query = {
    clients: (args, info): Promise<Client[]> => super.delegate('query', 'clients', args, {}, info),
    services: (args, info): Promise<Service[]> => super.delegate('query', 'services', args, {}, info),
    notificationses: (args, info): Promise<Notifications[]> => super.delegate('query', 'notificationses', args, {}, info),
    sales: (args, info): Promise<Sale[]> => super.delegate('query', 'sales', args, {}, info),
    products: (args, info): Promise<Product[]> => super.delegate('query', 'products', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    logs: (args, info): Promise<Log[]> => super.delegate('query', 'logs', args, {}, info),
    cartProducts: (args, info): Promise<CartProduct[]> => super.delegate('query', 'cartProducts', args, {}, info),
    client: (args, info): Promise<Client | null> => super.delegate('query', 'client', args, {}, info),
    service: (args, info): Promise<Service | null> => super.delegate('query', 'service', args, {}, info),
    sale: (args, info): Promise<Sale | null> => super.delegate('query', 'sale', args, {}, info),
    product: (args, info): Promise<Product | null> => super.delegate('query', 'product', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    log: (args, info): Promise<Log | null> => super.delegate('query', 'log', args, {}, info),
    clientsConnection: (args, info): Promise<ClientConnection> => super.delegate('query', 'clientsConnection', args, {}, info),
    servicesConnection: (args, info): Promise<ServiceConnection> => super.delegate('query', 'servicesConnection', args, {}, info),
    notificationsesConnection: (args, info): Promise<NotificationsConnection> => super.delegate('query', 'notificationsesConnection', args, {}, info),
    salesConnection: (args, info): Promise<SaleConnection> => super.delegate('query', 'salesConnection', args, {}, info),
    productsConnection: (args, info): Promise<ProductConnection> => super.delegate('query', 'productsConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    logsConnection: (args, info): Promise<LogConnection> => super.delegate('query', 'logsConnection', args, {}, info),
    cartProductsConnection: (args, info): Promise<CartProductConnection> => super.delegate('query', 'cartProductsConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createClient: (args, info): Promise<Client> => super.delegate('mutation', 'createClient', args, {}, info),
    createService: (args, info): Promise<Service> => super.delegate('mutation', 'createService', args, {}, info),
    createNotifications: (args, info): Promise<Notifications> => super.delegate('mutation', 'createNotifications', args, {}, info),
    createSale: (args, info): Promise<Sale> => super.delegate('mutation', 'createSale', args, {}, info),
    createProduct: (args, info): Promise<Product> => super.delegate('mutation', 'createProduct', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createLog: (args, info): Promise<Log> => super.delegate('mutation', 'createLog', args, {}, info),
    createCartProduct: (args, info): Promise<CartProduct> => super.delegate('mutation', 'createCartProduct', args, {}, info),
    updateClient: (args, info): Promise<Client | null> => super.delegate('mutation', 'updateClient', args, {}, info),
    updateService: (args, info): Promise<Service | null> => super.delegate('mutation', 'updateService', args, {}, info),
    updateSale: (args, info): Promise<Sale | null> => super.delegate('mutation', 'updateSale', args, {}, info),
    updateProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'updateProduct', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateLog: (args, info): Promise<Log | null> => super.delegate('mutation', 'updateLog', args, {}, info),
    deleteClient: (args, info): Promise<Client | null> => super.delegate('mutation', 'deleteClient', args, {}, info),
    deleteService: (args, info): Promise<Service | null> => super.delegate('mutation', 'deleteService', args, {}, info),
    deleteSale: (args, info): Promise<Sale | null> => super.delegate('mutation', 'deleteSale', args, {}, info),
    deleteProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'deleteProduct', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteLog: (args, info): Promise<Log | null> => super.delegate('mutation', 'deleteLog', args, {}, info),
    upsertClient: (args, info): Promise<Client> => super.delegate('mutation', 'upsertClient', args, {}, info),
    upsertService: (args, info): Promise<Service> => super.delegate('mutation', 'upsertService', args, {}, info),
    upsertSale: (args, info): Promise<Sale> => super.delegate('mutation', 'upsertSale', args, {}, info),
    upsertProduct: (args, info): Promise<Product> => super.delegate('mutation', 'upsertProduct', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertLog: (args, info): Promise<Log> => super.delegate('mutation', 'upsertLog', args, {}, info),
    updateManyClients: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyClients', args, {}, info),
    updateManyServices: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyServices', args, {}, info),
    updateManyNotificationses: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyNotificationses', args, {}, info),
    updateManySales: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManySales', args, {}, info),
    updateManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProducts', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyLogs: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyLogs', args, {}, info),
    updateManyCartProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCartProducts', args, {}, info),
    deleteManyClients: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyClients', args, {}, info),
    deleteManyServices: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyServices', args, {}, info),
    deleteManyNotificationses: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyNotificationses', args, {}, info),
    deleteManySales: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManySales', args, {}, info),
    deleteManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProducts', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyLogs: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyLogs', args, {}, info),
    deleteManyCartProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCartProducts', args, {}, info)
  }

  subscription: Subscription = {
    client: (args, infoOrQuery): Promise<AsyncIterator<ClientSubscriptionPayload>> => super.delegateSubscription('client', args, {}, infoOrQuery),
    service: (args, infoOrQuery): Promise<AsyncIterator<ServiceSubscriptionPayload>> => super.delegateSubscription('service', args, {}, infoOrQuery),
    notifications: (args, infoOrQuery): Promise<AsyncIterator<NotificationsSubscriptionPayload>> => super.delegateSubscription('notifications', args, {}, infoOrQuery),
    sale: (args, infoOrQuery): Promise<AsyncIterator<SaleSubscriptionPayload>> => super.delegateSubscription('sale', args, {}, infoOrQuery),
    product: (args, infoOrQuery): Promise<AsyncIterator<ProductSubscriptionPayload>> => super.delegateSubscription('product', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    log: (args, infoOrQuery): Promise<AsyncIterator<LogSubscriptionPayload>> => super.delegateSubscription('log', args, {}, infoOrQuery),
    cartProduct: (args, infoOrQuery): Promise<AsyncIterator<CartProductSubscriptionPayload>> => super.delegateSubscription('cartProduct', args, {}, infoOrQuery)
  }
}