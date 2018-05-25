import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateCartProduct {
  count: Int!
}

type AggregateClient {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateSale {
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
  products: ProductCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
}

input ClientCreateOneWithoutProductsInput {
  create: ClientCreateWithoutProductsInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutSalesInput {
  create: ClientCreateWithoutSalesInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutUsersInput {
  create: ClientCreateWithoutUsersInput
  connect: ClientWhereUniqueInput
}

input ClientCreateWithoutProductsInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
}

input ClientCreateWithoutSalesInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  products: ProductCreateManyWithoutClientInput
}

input ClientCreateWithoutUsersInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  products: ProductCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
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
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
}

input ClientUpdateOneWithoutProductsInput {
  create: ClientCreateWithoutProductsInput
  connect: ClientWhereUniqueInput
  delete: Boolean
  update: ClientUpdateWithoutProductsDataInput
  upsert: ClientUpsertWithoutProductsInput
}

input ClientUpdateOneWithoutSalesInput {
  create: ClientCreateWithoutSalesInput
  connect: ClientWhereUniqueInput
  delete: Boolean
  update: ClientUpdateWithoutSalesDataInput
  upsert: ClientUpsertWithoutSalesInput
}

input ClientUpdateOneWithoutUsersInput {
  create: ClientCreateWithoutUsersInput
  connect: ClientWhereUniqueInput
  delete: Boolean
  update: ClientUpdateWithoutUsersDataInput
  upsert: ClientUpsertWithoutUsersInput
}

input ClientUpdateWithoutProductsDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
}

input ClientUpdateWithoutSalesDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
}

input ClientUpdateWithoutUsersDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
}

input ClientUpsertWithoutProductsInput {
  update: ClientUpdateWithoutProductsDataInput!
  create: ClientCreateWithoutProductsInput!
}

input ClientUpsertWithoutSalesInput {
  update: ClientUpdateWithoutSalesDataInput!
  create: ClientCreateWithoutSalesInput!
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
}

input ClientWhereUniqueInput {
  id: ID
  email: String
  phoneNumber: String
}

scalar DateTime

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
  isDeleted: Boolean
  quantity: Int!
  client(where: ClientWhereInput): Client!
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
  isDeleted: Boolean
  quantity: Int!
  client: ClientCreateOneWithoutProductsInput!
}

input ProductCreateManyWithoutClientInput {
  create: [ProductCreateWithoutClientInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutClientInput {
  name: String!
  price: Float!
  isDeleted: Boolean
  quantity: Int!
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
  isDeleted_ASC
  isDeleted_DESC
  quantity_ASC
  quantity_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  isDeleted: Boolean
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

input ProductUpdateInput {
  name: String
  price: Float
  isDeleted: Boolean
  quantity: Int
  client: ClientUpdateOneWithoutProductsInput
}

input ProductUpdateManyWithoutClientInput {
  create: [ProductCreateWithoutClientInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutClientInput!]
}

input ProductUpdateWithoutClientDataInput {
  name: String
  price: Float
  isDeleted: Boolean
  quantity: Int
}

input ProductUpdateWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutClientDataInput!
}

input ProductUpsertWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutClientDataInput!
  create: ProductCreateWithoutClientInput!
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
  isDeleted: Boolean
  """
  All values that are not equal to given value.
  """
  isDeleted_not: Boolean
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
  client: ClientWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Sale implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  products(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct!]
  isDeleted: Boolean
  client(where: ClientWhereInput): Client!
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
  isDeleted: Boolean
  products: CartProductCreateManyInput
  client: ClientCreateOneWithoutSalesInput!
  soldBy: UserCreateOneWithoutSalesInput!
}

input SaleCreateManyWithoutClientInput {
  create: [SaleCreateWithoutClientInput!]
  connect: [SaleWhereUniqueInput!]
}

input SaleCreateManyWithoutSoldByInput {
  create: [SaleCreateWithoutSoldByInput!]
  connect: [SaleWhereUniqueInput!]
}

input SaleCreateWithoutClientInput {
  isDeleted: Boolean
  products: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput!
}

input SaleCreateWithoutSoldByInput {
  isDeleted: Boolean
  products: CartProductCreateManyInput
  client: ClientCreateOneWithoutSalesInput!
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
  isDeleted_ASC
  isDeleted_DESC
}

type SalePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isDeleted: Boolean
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

input SaleUpdateInput {
  isDeleted: Boolean
  products: CartProductUpdateManyInput
  client: ClientUpdateOneWithoutSalesInput
  soldBy: UserUpdateOneWithoutSalesInput
}

input SaleUpdateManyWithoutClientInput {
  create: [SaleCreateWithoutClientInput!]
  connect: [SaleWhereUniqueInput!]
  disconnect: [SaleWhereUniqueInput!]
  delete: [SaleWhereUniqueInput!]
  update: [SaleUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [SaleUpsertWithWhereUniqueWithoutClientInput!]
}

input SaleUpdateManyWithoutSoldByInput {
  create: [SaleCreateWithoutSoldByInput!]
  connect: [SaleWhereUniqueInput!]
  disconnect: [SaleWhereUniqueInput!]
  delete: [SaleWhereUniqueInput!]
  update: [SaleUpdateWithWhereUniqueWithoutSoldByInput!]
  upsert: [SaleUpsertWithWhereUniqueWithoutSoldByInput!]
}

input SaleUpdateWithoutClientDataInput {
  isDeleted: Boolean
  products: CartProductUpdateManyInput
  soldBy: UserUpdateOneWithoutSalesInput
}

input SaleUpdateWithoutSoldByDataInput {
  isDeleted: Boolean
  products: CartProductUpdateManyInput
  client: ClientUpdateOneWithoutSalesInput
}

input SaleUpdateWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput!
  data: SaleUpdateWithoutClientDataInput!
}

input SaleUpdateWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput!
  data: SaleUpdateWithoutSoldByDataInput!
}

input SaleUpsertWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput!
  update: SaleUpdateWithoutClientDataInput!
  create: SaleCreateWithoutClientInput!
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
  isDeleted: Boolean
  """
  All values that are not equal to given value.
  """
  isDeleted_not: Boolean
  products_every: CartProductWhereInput
  products_some: CartProductWhereInput
  products_none: CartProductWhereInput
  client: ClientWhereInput
  soldBy: UserWhereInput
}

input SaleWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
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
  client: ClientCreateOneWithoutUsersInput!
  sales: SaleCreateManyWithoutSoldByInput
}

input UserCreateManyWithoutClientInput {
  create: [UserCreateWithoutClientInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutSalesInput {
  create: UserCreateWithoutSalesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutClientInput {
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  isAdmin: Boolean
  sales: SaleCreateManyWithoutSoldByInput
}

input UserCreateWithoutSalesInput {
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  isAdmin: Boolean
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
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

input UserUpdateInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
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

input UserUpdateOneWithoutSalesInput {
  create: UserCreateWithoutSalesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutSalesDataInput
  upsert: UserUpsertWithoutSalesInput
}

input UserUpdateWithoutClientDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  sales: SaleUpdateManyWithoutSoldByInput
}

input UserUpdateWithoutSalesDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  client: ClientUpdateOneWithoutUsersInput
}

input UserUpdateWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutClientDataInput!
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
  client: ClientWhereInput
  sales_every: SaleWhereInput
  sales_some: SaleWhereInput
  sales_none: SaleWhereInput
}

input UserWhereUniqueInput {
  id: ID
  phoneNumber: String
}

type Mutation {
  createClient(data: ClientCreateInput!): Client!
  createUser(data: UserCreateInput!): User!
  createProduct(data: ProductCreateInput!): Product!
  createSale(data: SaleCreateInput!): Sale!
  createCartProduct(data: CartProductCreateInput!): CartProduct!
  updateClient(data: ClientUpdateInput!, where: ClientWhereUniqueInput!): Client
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateSale(data: SaleUpdateInput!, where: SaleWhereUniqueInput!): Sale
  deleteClient(where: ClientWhereUniqueInput!): Client
  deleteUser(where: UserWhereUniqueInput!): User
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteSale(where: SaleWhereUniqueInput!): Sale
  upsertClient(where: ClientWhereUniqueInput!, create: ClientCreateInput!, update: ClientUpdateInput!): Client!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertSale(where: SaleWhereUniqueInput!, create: SaleCreateInput!, update: SaleUpdateInput!): Sale!
  updateManyClients(data: ClientUpdateInput!, where: ClientWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManySales(data: SaleUpdateInput!, where: SaleWhereInput): BatchPayload!
  updateManyCartProducts(data: CartProductUpdateInput!, where: CartProductWhereInput): BatchPayload!
  deleteManyClients(where: ClientWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManySales(where: SaleWhereInput): BatchPayload!
  deleteManyCartProducts(where: CartProductWhereInput): BatchPayload!
}

type Query {
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale]!
  cartProducts(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct]!
  client(where: ClientWhereUniqueInput!): Client
  user(where: UserWhereUniqueInput!): User
  product(where: ProductWhereUniqueInput!): Product
  sale(where: SaleWhereUniqueInput!): Sale
  clientsConnection(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  salesConnection(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SaleConnection!
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
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  sale(where: SaleSubscriptionWhereInput): SaleSubscriptionPayload
  cartProduct(where: CartProductSubscriptionWhereInput): CartProductSubscriptionPayload
}
`

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
  'name_ASC' |
  'name_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'password_ASC' |
  'password_DESC' |
  'isAdmin_ASC' |
  'isAdmin_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SaleOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isDeleted_ASC' |
  'isDeleted_DESC'

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
  'isDeleted_ASC' |
  'isDeleted_DESC' |
  'quantity_ASC' |
  'quantity_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ClientCreateWithoutUsersInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  products?: ProductCreateManyWithoutClientInput
  sales?: SaleCreateManyWithoutClientInput
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
}

export interface UserCreateManyWithoutClientInput {
  create?: UserCreateWithoutClientInput[] | UserCreateWithoutClientInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ProductUpsertWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutClientDataInput
  create: ProductCreateWithoutClientInput
}

export interface UserCreateWithoutClientInput {
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  isAdmin?: Boolean
  sales?: SaleCreateManyWithoutSoldByInput
}

export interface ClientCreateWithoutProductsInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput
  sales?: SaleCreateManyWithoutClientInput
}

export interface SaleCreateManyWithoutSoldByInput {
  create?: SaleCreateWithoutSoldByInput[] | SaleCreateWithoutSoldByInput
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
}

export interface SaleCreateWithoutSoldByInput {
  isDeleted?: Boolean
  products?: CartProductCreateManyInput
  client: ClientCreateOneWithoutSalesInput
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

export interface CartProductCreateManyInput {
  create?: CartProductCreateInput[] | CartProductCreateInput
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

export interface CartProductCreateInput {
  productId: ID_Input
  name: String
  price: Float
  quantitySold: Int
}

export interface CartProductUpdateInput {
  productId?: ID_Input
  name?: String
  price?: Float
  quantitySold?: Int
}

export interface ClientCreateOneWithoutSalesInput {
  create?: ClientCreateWithoutSalesInput
  connect?: ClientWhereUniqueInput
}

export interface SaleUpdateInput {
  isDeleted?: Boolean
  products?: CartProductUpdateManyInput
  client?: ClientUpdateOneWithoutSalesInput
  soldBy?: UserUpdateOneWithoutSalesInput
}

export interface ClientCreateWithoutSalesInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput
  products?: ProductCreateManyWithoutClientInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  phoneNumber?: String
}

export interface ProductCreateManyWithoutClientInput {
  create?: ProductCreateWithoutClientInput[] | ProductCreateWithoutClientInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface SaleWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCreateWithoutClientInput {
  name: String
  price: Float
  isDeleted?: Boolean
  quantity: Int
}

export interface ClientUpdateWithoutProductsDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  sales?: SaleUpdateManyWithoutClientInput
}

export interface SaleCreateManyWithoutClientInput {
  create?: SaleCreateWithoutClientInput[] | SaleCreateWithoutClientInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
}

export interface ProductUpdateInput {
  name?: String
  price?: Float
  isDeleted?: Boolean
  quantity?: Int
  client?: ClientUpdateOneWithoutProductsInput
}

export interface SaleCreateWithoutClientInput {
  isDeleted?: Boolean
  products?: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput
}

export interface SaleUpsertWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput
  update: SaleUpdateWithoutClientDataInput
  create: SaleCreateWithoutClientInput
}

export interface UserCreateOneWithoutSalesInput {
  create?: UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput
}

export interface ClientUpsertWithoutUsersInput {
  update: ClientUpdateWithoutUsersDataInput
  create: ClientCreateWithoutUsersInput
}

export interface UserCreateWithoutSalesInput {
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  isAdmin?: Boolean
  client: ClientCreateOneWithoutUsersInput
}

export interface ClientUpdateOneWithoutUsersInput {
  create?: ClientCreateWithoutUsersInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateWithoutUsersDataInput
  upsert?: ClientUpsertWithoutUsersInput
}

export interface ClientCreateOneWithoutUsersInput {
  create?: ClientCreateWithoutUsersInput
  connect?: ClientWhereUniqueInput
}

export interface UserUpdateOneWithoutSalesInput {
  create?: UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutSalesDataInput
  upsert?: UserUpsertWithoutSalesInput
}

export interface SaleUpsertWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput
  update: SaleUpdateWithoutSoldByDataInput
  create: SaleCreateWithoutSoldByInput
}

export interface SaleUpdateWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput
  data: SaleUpdateWithoutClientDataInput
}

export interface UserCreateInput {
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  isAdmin?: Boolean
  client: ClientCreateOneWithoutUsersInput
  sales?: SaleCreateManyWithoutSoldByInput
}

export interface UserUpsertWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutClientDataInput
  create: UserCreateWithoutClientInput
}

export interface ProductCreateInput {
  name: String
  price: Float
  isDeleted?: Boolean
  quantity: Int
  client: ClientCreateOneWithoutProductsInput
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
  isDeleted?: Boolean
  isDeleted_not?: Boolean
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  client?: ClientWhereInput
}

export interface ClientCreateOneWithoutProductsInput {
  create?: ClientCreateWithoutProductsInput
  connect?: ClientWhereUniqueInput
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

export interface ClientUpsertWithoutSalesInput {
  update: ClientUpdateWithoutSalesDataInput
  create: ClientCreateWithoutSalesInput
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

export interface SaleCreateInput {
  isDeleted?: Boolean
  products?: CartProductCreateManyInput
  client: ClientCreateOneWithoutSalesInput
  soldBy: UserCreateOneWithoutSalesInput
}

export interface ClientWhereUniqueInput {
  id?: ID_Input
  email?: String
  phoneNumber?: String
}

export interface ClientUpdateInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  products?: ProductUpdateManyWithoutClientInput
  sales?: SaleUpdateManyWithoutClientInput
}

export interface ClientUpsertWithoutProductsInput {
  update: ClientUpdateWithoutProductsDataInput
  create: ClientCreateWithoutProductsInput
}

export interface UserUpdateManyWithoutClientInput {
  create?: UserCreateWithoutClientInput[] | UserCreateWithoutClientInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutClientInput[] | UserUpdateWithWhereUniqueWithoutClientInput
  upsert?: UserUpsertWithWhereUniqueWithoutClientInput[] | UserUpsertWithWhereUniqueWithoutClientInput
}

export interface UserUpdateInput {
  name?: String
  lastName?: String
  phoneNumber?: String
  password?: String
  isAdmin?: Boolean
  client?: ClientUpdateOneWithoutUsersInput
  sales?: SaleUpdateManyWithoutSoldByInput
}

export interface UserUpdateWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutClientDataInput
}

export interface ClientUpdateWithoutUsersDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  products?: ProductUpdateManyWithoutClientInput
  sales?: SaleUpdateManyWithoutClientInput
}

export interface UserUpdateWithoutClientDataInput {
  name?: String
  lastName?: String
  phoneNumber?: String
  password?: String
  isAdmin?: Boolean
  sales?: SaleUpdateManyWithoutSoldByInput
}

export interface SaleUpdateWithoutClientDataInput {
  isDeleted?: Boolean
  products?: CartProductUpdateManyInput
  soldBy?: UserUpdateOneWithoutSalesInput
}

export interface SaleUpdateManyWithoutSoldByInput {
  create?: SaleCreateWithoutSoldByInput[] | SaleCreateWithoutSoldByInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  disconnect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  delete?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  update?: SaleUpdateWithWhereUniqueWithoutSoldByInput[] | SaleUpdateWithWhereUniqueWithoutSoldByInput
  upsert?: SaleUpsertWithWhereUniqueWithoutSoldByInput[] | SaleUpsertWithWhereUniqueWithoutSoldByInput
}

export interface ClientCreateInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput
  products?: ProductCreateManyWithoutClientInput
  sales?: SaleCreateManyWithoutClientInput
}

export interface SaleUpdateWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput
  data: SaleUpdateWithoutSoldByDataInput
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
  isDeleted?: Boolean
  isDeleted_not?: Boolean
  products_every?: CartProductWhereInput
  products_some?: CartProductWhereInput
  products_none?: CartProductWhereInput
  client?: ClientWhereInput
  soldBy?: UserWhereInput
}

export interface SaleUpdateWithoutSoldByDataInput {
  isDeleted?: Boolean
  products?: CartProductUpdateManyInput
  client?: ClientUpdateOneWithoutSalesInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface CartProductUpdateManyInput {
  create?: CartProductCreateInput[] | CartProductCreateInput
}

export interface UserUpsertWithoutSalesInput {
  update: UserUpdateWithoutSalesDataInput
  create: UserCreateWithoutSalesInput
}

export interface ClientUpdateOneWithoutSalesInput {
  create?: ClientCreateWithoutSalesInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateWithoutSalesDataInput
  upsert?: ClientUpsertWithoutSalesInput
}

export interface SaleUpdateManyWithoutClientInput {
  create?: SaleCreateWithoutClientInput[] | SaleCreateWithoutClientInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  disconnect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  delete?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  update?: SaleUpdateWithWhereUniqueWithoutClientInput[] | SaleUpdateWithWhereUniqueWithoutClientInput
  upsert?: SaleUpsertWithWhereUniqueWithoutClientInput[] | SaleUpsertWithWhereUniqueWithoutClientInput
}

export interface ProductUpdateWithoutClientDataInput {
  name?: String
  price?: Float
  isDeleted?: Boolean
  quantity?: Int
}

export interface ProductUpdateWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutClientDataInput
}

export interface ProductUpdateManyWithoutClientInput {
  create?: ProductCreateWithoutClientInput[] | ProductCreateWithoutClientInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutClientInput[] | ProductUpdateWithWhereUniqueWithoutClientInput
  upsert?: ProductUpsertWithWhereUniqueWithoutClientInput[] | ProductUpsertWithWhereUniqueWithoutClientInput
}

export interface ClientUpdateWithoutSalesDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  products?: ProductUpdateManyWithoutClientInput
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

export interface UserUpdateWithoutSalesDataInput {
  name?: String
  lastName?: String
  phoneNumber?: String
  password?: String
  isAdmin?: Boolean
  client?: ClientUpdateOneWithoutUsersInput
}

export interface ClientUpdateOneWithoutProductsInput {
  create?: ClientCreateWithoutProductsInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateWithoutProductsDataInput
  upsert?: ClientUpsertWithoutProductsInput
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
  client?: ClientWhereInput
  sales_every?: SaleWhereInput
  sales_some?: SaleWhereInput
  sales_none?: SaleWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface CartProductPreviousValues {
  productId: ID_Output
  name: String
  price: Float
  quantitySold: Int
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

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  isDeleted?: Boolean
  quantity: Int
}

/*
 * A connection to a list of items.

 */
export interface ClientConnection {
  pageInfo: PageInfo
  edges: ClientEdge[]
  aggregate: AggregateClient
}

export interface BatchPayload {
  count: Long
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  isDeleted?: Boolean
  quantity: Int
  client: Client
}

/*
 * An edge in a connection.

 */
export interface CartProductEdge {
  node: CartProduct
  cursor: String
}

export interface CartProductSubscriptionPayload {
  mutation: MutationType
  node?: CartProduct
  updatedFields?: String[]
  previousValues?: CartProductPreviousValues
}

export interface AggregateSale {
  count: Int
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
}

/*
 * A connection to a list of items.

 */
export interface SaleConnection {
  pageInfo: PageInfo
  edges: SaleEdge[]
  aggregate: AggregateSale
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
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface SalePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isDeleted?: Boolean
}

export interface AggregateUser {
  count: Int
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
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface ClientSubscriptionPayload {
  mutation: MutationType
  node?: Client
  updatedFields?: String[]
  previousValues?: ClientPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ClientEdge {
  node: Client
  cursor: String
}

export interface ClientPreviousValues {
  id: ID_Output
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
}

/*
 * A connection to a list of items.

 */
export interface CartProductConnection {
  pageInfo: PageInfo
  edges: CartProductEdge[]
  aggregate: AggregateCartProduct
}

export interface Sale extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  products?: CartProduct[]
  isDeleted?: Boolean
  client: Client
  soldBy: User
}

export interface AggregateProduct {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface User extends Node {
  id: ID_Output
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  isAdmin?: Boolean
  client: Client
  sales?: Sale[]
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  lastName?: String
  phoneNumber: String
  password: String
  isAdmin?: Boolean
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateClient {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

/*
 * An edge in a connection.

 */
export interface SaleEdge {
  node: Sale
  cursor: String
}

export interface AggregateCartProduct {
  count: Int
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  clients: (args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Client[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  products: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Product[]>
  sales: (args: { where?: SaleWhereInput, orderBy?: SaleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Sale[]>
  cartProducts: (args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartProduct[]>
  client: (args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Client | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  product: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  sale: (args: { where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Sale | null>
  clientsConnection: (args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ClientConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  productsConnection: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductConnection>
  salesConnection: (args: { where?: SaleWhereInput, orderBy?: SaleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<SaleConnection>
  cartProductsConnection: (args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartProductConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createClient: (args: { data: ClientCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Client>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createProduct: (args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  createSale: (args: { data: SaleCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Sale>
  createCartProduct: (args: { data: CartProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct>
  updateClient: (args: { data: ClientUpdateInput, where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Client | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateProduct: (args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  updateSale: (args: { data: SaleUpdateInput, where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Sale | null>
  deleteClient: (args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Client | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteProduct: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  deleteSale: (args: { where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Sale | null>
  upsertClient: (args: { where: ClientWhereUniqueInput, create: ClientCreateInput, update: ClientUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Client>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertProduct: (args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  upsertSale: (args: { where: SaleWhereUniqueInput, create: SaleCreateInput, update: SaleUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Sale>
  updateManyClients: (args: { data: ClientUpdateInput, where?: ClientWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyProducts: (args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManySales: (args: { data: SaleUpdateInput, where?: SaleWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCartProducts: (args: { data: CartProductUpdateInput, where?: CartProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyClients: (args: { where?: ClientWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProducts: (args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManySales: (args: { where?: SaleWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCartProducts: (args: { where?: CartProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  client: (args: { where?: ClientSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ClientSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  product: (args: { where?: ProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductSubscriptionPayload>>
  sale: (args: { where?: SaleSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<SaleSubscriptionPayload>>
  cartProduct: (args: { where?: CartProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CartProductSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Client: (where: ClientWhereInput): Promise<boolean> => super.existsDelegate('query', 'clients', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Product: (where: ProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'products', { where }, {}, '{ id }'),
    Sale: (where: SaleWhereInput): Promise<boolean> => super.existsDelegate('query', 'sales', { where }, {}, '{ id }'),
    CartProduct: (where: CartProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'cartProducts', { where }, {}, '{ id }')
  }

  query: Query = {
    clients: (args, info): Promise<Client[]> => super.delegate('query', 'clients', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    products: (args, info): Promise<Product[]> => super.delegate('query', 'products', args, {}, info),
    sales: (args, info): Promise<Sale[]> => super.delegate('query', 'sales', args, {}, info),
    cartProducts: (args, info): Promise<CartProduct[]> => super.delegate('query', 'cartProducts', args, {}, info),
    client: (args, info): Promise<Client | null> => super.delegate('query', 'client', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    product: (args, info): Promise<Product | null> => super.delegate('query', 'product', args, {}, info),
    sale: (args, info): Promise<Sale | null> => super.delegate('query', 'sale', args, {}, info),
    clientsConnection: (args, info): Promise<ClientConnection> => super.delegate('query', 'clientsConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    productsConnection: (args, info): Promise<ProductConnection> => super.delegate('query', 'productsConnection', args, {}, info),
    salesConnection: (args, info): Promise<SaleConnection> => super.delegate('query', 'salesConnection', args, {}, info),
    cartProductsConnection: (args, info): Promise<CartProductConnection> => super.delegate('query', 'cartProductsConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createClient: (args, info): Promise<Client> => super.delegate('mutation', 'createClient', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createProduct: (args, info): Promise<Product> => super.delegate('mutation', 'createProduct', args, {}, info),
    createSale: (args, info): Promise<Sale> => super.delegate('mutation', 'createSale', args, {}, info),
    createCartProduct: (args, info): Promise<CartProduct> => super.delegate('mutation', 'createCartProduct', args, {}, info),
    updateClient: (args, info): Promise<Client | null> => super.delegate('mutation', 'updateClient', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'updateProduct', args, {}, info),
    updateSale: (args, info): Promise<Sale | null> => super.delegate('mutation', 'updateSale', args, {}, info),
    deleteClient: (args, info): Promise<Client | null> => super.delegate('mutation', 'deleteClient', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'deleteProduct', args, {}, info),
    deleteSale: (args, info): Promise<Sale | null> => super.delegate('mutation', 'deleteSale', args, {}, info),
    upsertClient: (args, info): Promise<Client> => super.delegate('mutation', 'upsertClient', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertProduct: (args, info): Promise<Product> => super.delegate('mutation', 'upsertProduct', args, {}, info),
    upsertSale: (args, info): Promise<Sale> => super.delegate('mutation', 'upsertSale', args, {}, info),
    updateManyClients: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyClients', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProducts', args, {}, info),
    updateManySales: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManySales', args, {}, info),
    updateManyCartProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCartProducts', args, {}, info),
    deleteManyClients: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyClients', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProducts', args, {}, info),
    deleteManySales: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManySales', args, {}, info),
    deleteManyCartProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCartProducts', args, {}, info)
  }

  subscription: Subscription = {
    client: (args, infoOrQuery): Promise<AsyncIterator<ClientSubscriptionPayload>> => super.delegateSubscription('client', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    product: (args, infoOrQuery): Promise<AsyncIterator<ProductSubscriptionPayload>> => super.delegateSubscription('product', args, {}, infoOrQuery),
    sale: (args, infoOrQuery): Promise<AsyncIterator<SaleSubscriptionPayload>> => super.delegateSubscription('sale', args, {}, infoOrQuery),
    cartProduct: (args, infoOrQuery): Promise<AsyncIterator<CartProductSubscriptionPayload>> => super.delegateSubscription('cartProduct', args, {}, infoOrQuery)
  }
}