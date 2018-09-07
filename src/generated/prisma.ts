import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    services: <T = Service[]>(args: { where?: ServiceWhereInput, orderBy?: ServiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sales: <T = Sale[]>(args: { where?: SaleWhereInput, orderBy?: SaleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    logs: <T = Log[]>(args: { where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationses: <T = Notifications[]>(args: { where?: NotificationsWhereInput, orderBy?: NotificationsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clients: <T = Client[]>(args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cartProducts: <T = CartProduct[]>(args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    service: <T = Service | null>(args: { where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sale: <T = Sale | null>(args: { where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    log: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    client: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    servicesConnection: <T = ServiceConnection>(args: { where?: ServiceWhereInput, orderBy?: ServiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    salesConnection: <T = SaleConnection>(args: { where?: SaleWhereInput, orderBy?: SaleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    logsConnection: <T = LogConnection>(args: { where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsesConnection: <T = NotificationsConnection>(args: { where?: NotificationsWhereInput, orderBy?: NotificationsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientsConnection: <T = ClientConnection>(args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cartProductsConnection: <T = CartProductConnection>(args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createService: <T = Service>(args: { data: ServiceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSale: <T = Sale>(args: { data: SaleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLog: <T = Log>(args: { data: LogCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotifications: <T = Notifications>(args: { data: NotificationsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClient: <T = Client>(args: { data: ClientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCartProduct: <T = CartProduct>(args: { data: CartProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateService: <T = Service | null>(args: { data: ServiceUpdateInput, where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSale: <T = Sale | null>(args: { data: SaleUpdateInput, where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLog: <T = Log | null>(args: { data: LogUpdateInput, where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClient: <T = Client | null>(args: { data: ClientUpdateInput, where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteService: <T = Service | null>(args: { where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSale: <T = Sale | null>(args: { where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLog: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClient: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertService: <T = Service>(args: { where: ServiceWhereUniqueInput, create: ServiceCreateInput, update: ServiceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSale: <T = Sale>(args: { where: SaleWhereUniqueInput, create: SaleCreateInput, update: SaleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLog: <T = Log>(args: { where: LogWhereUniqueInput, create: LogCreateInput, update: LogUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClient: <T = Client>(args: { where: ClientWhereUniqueInput, create: ClientCreateInput, update: ClientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyServices: <T = BatchPayload>(args: { data: ServiceUpdateInput, where?: ServiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySales: <T = BatchPayload>(args: { data: SaleUpdateInput, where?: SaleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLogs: <T = BatchPayload>(args: { data: LogUpdateInput, where?: LogWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotificationses: <T = BatchPayload>(args: { data: NotificationsUpdateInput, where?: NotificationsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClients: <T = BatchPayload>(args: { data: ClientUpdateInput, where?: ClientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCartProducts: <T = BatchPayload>(args: { data: CartProductUpdateInput, where?: CartProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyServices: <T = BatchPayload>(args: { where?: ServiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySales: <T = BatchPayload>(args: { where?: SaleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLogs: <T = BatchPayload>(args: { where?: LogWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotificationses: <T = BatchPayload>(args: { where?: NotificationsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClients: <T = BatchPayload>(args: { where?: ClientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCartProducts: <T = BatchPayload>(args: { where?: CartProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    service: <T = ServiceSubscriptionPayload | null>(args: { where?: ServiceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    sale: <T = SaleSubscriptionPayload | null>(args: { where?: SaleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    log: <T = LogSubscriptionPayload | null>(args: { where?: LogSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notifications: <T = NotificationsSubscriptionPayload | null>(args: { where?: NotificationsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    client: <T = ClientSubscriptionPayload | null>(args: { where?: ClientSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    cartProduct: <T = CartProductSubscriptionPayload | null>(args: { where?: CartProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Product: (where?: ProductWhereInput) => Promise<boolean>
  Service: (where?: ServiceWhereInput) => Promise<boolean>
  Sale: (where?: SaleWhereInput) => Promise<boolean>
  Log: (where?: LogWhereInput) => Promise<boolean>
  Notifications: (where?: NotificationsWhereInput) => Promise<boolean>
  Client: (where?: ClientWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  CartProduct: (where?: CartProductWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCartProduct {
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
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type CartProduct {
  productId: ID!
  name: String!
  price: Float!
  quantitySold: Int!
}

"""A connection to a list of items."""
type CartProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type CartProductEdge {
  """The item at the end of the edge."""
  node: CartProduct!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [CartProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [CartProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartProductWhereInput!]
  productId: ID

  """All values that are not equal to given value."""
  productId_not: ID

  """All values that are contained in given list."""
  productId_in: [ID!]

  """All values that are not contained in given list."""
  productId_not_in: [ID!]

  """All values less than the given value."""
  productId_lt: ID

  """All values less than or equal the given value."""
  productId_lte: ID

  """All values greater than the given value."""
  productId_gt: ID

  """All values greater than or equal the given value."""
  productId_gte: ID

  """All values containing the given string."""
  productId_contains: ID

  """All values not containing the given string."""
  productId_not_contains: ID

  """All values starting with the given string."""
  productId_starts_with: ID

  """All values not starting with the given string."""
  productId_not_starts_with: ID

  """All values ending with the given string."""
  productId_ends_with: ID

  """All values not ending with the given string."""
  productId_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  quantitySold: Int

  """All values that are not equal to given value."""
  quantitySold_not: Int

  """All values that are contained in given list."""
  quantitySold_in: [Int!]

  """All values that are not contained in given list."""
  quantitySold_not_in: [Int!]

  """All values less than the given value."""
  quantitySold_lt: Int

  """All values less than or equal the given value."""
  quantitySold_lte: Int

  """All values greater than the given value."""
  quantitySold_gt: Int

  """All values greater than or equal the given value."""
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

"""A connection to a list of items."""
type ClientConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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
  logs: LogCreateManyWithoutClientInput
}

input ClientCreateOneInput {
  create: ClientCreateInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutLogsInput {
  create: ClientCreateWithoutLogsInput
  connect: ClientWhereUniqueInput
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

input ClientCreateWithoutLogsInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  products: ProductCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
}

input ClientCreateWithoutProductsInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
  logs: LogCreateManyWithoutClientInput
}

input ClientCreateWithoutSalesInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  products: ProductCreateManyWithoutClientInput
  logs: LogCreateManyWithoutClientInput
}

input ClientCreateWithoutUsersInput {
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  products: ProductCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
  logs: LogCreateManyWithoutClientInput
}

"""An edge in a connection."""
type ClientEdge {
  """The item at the end of the edge."""
  node: Client!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ClientSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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

input ClientUpdateDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpdateInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpdateOneInput {
  create: ClientCreateInput
  connect: ClientWhereUniqueInput
  delete: Boolean
  update: ClientUpdateDataInput
  upsert: ClientUpsertNestedInput
}

input ClientUpdateOneWithoutLogsInput {
  create: ClientCreateWithoutLogsInput
  connect: ClientWhereUniqueInput
  delete: Boolean
  update: ClientUpdateWithoutLogsDataInput
  upsert: ClientUpsertWithoutLogsInput
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

input ClientUpdateWithoutLogsDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
}

input ClientUpdateWithoutProductsDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpdateWithoutSalesDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpdateWithoutUsersDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpsertNestedInput {
  update: ClientUpdateDataInput!
  create: ClientCreateInput!
}

input ClientUpsertWithoutLogsInput {
  update: ClientUpdateWithoutLogsDataInput!
  create: ClientCreateWithoutLogsInput!
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
  """Logical AND on all given filters."""
  AND: [ClientWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
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
  _MagicalBackRelation_ClientToService_every: ServiceWhereInput
  _MagicalBackRelation_ClientToService_some: ServiceWhereInput
  _MagicalBackRelation_ClientToService_none: ServiceWhereInput
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
  client(where: ClientWhereInput): Client!
}

"""A connection to a list of items."""
type LogConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  message: String!
  type: LogType!
  user: UserCreateOneInput!
  client: ClientCreateOneWithoutLogsInput!
}

input LogCreateManyWithoutClientInput {
  create: [LogCreateWithoutClientInput!]
  connect: [LogWhereUniqueInput!]
}

input LogCreateWithoutClientInput {
  message: String!
  type: LogType!
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type LogEdge {
  """The item at the end of the edge."""
  node: Log!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [LogSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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

input LogUpdateInput {
  message: String
  type: LogType
  user: UserUpdateOneInput
  client: ClientUpdateOneWithoutLogsInput
}

input LogUpdateManyWithoutClientInput {
  create: [LogCreateWithoutClientInput!]
  connect: [LogWhereUniqueInput!]
  disconnect: [LogWhereUniqueInput!]
  delete: [LogWhereUniqueInput!]
  update: [LogUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [LogUpsertWithWhereUniqueWithoutClientInput!]
}

input LogUpdateWithoutClientDataInput {
  message: String
  type: LogType
  user: UserUpdateOneInput
}

input LogUpdateWithWhereUniqueWithoutClientInput {
  where: LogWhereUniqueInput!
  data: LogUpdateWithoutClientDataInput!
}

input LogUpsertWithWhereUniqueWithoutClientInput {
  where: LogWhereUniqueInput!
  update: LogUpdateWithoutClientDataInput!
  create: LogCreateWithoutClientInput!
}

input LogWhereInput {
  """Logical AND on all given filters."""
  AND: [LogWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LogWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  type: LogType

  """All values that are not equal to given value."""
  type_not: LogType

  """All values that are contained in given list."""
  type_in: [LogType!]

  """All values that are not contained in given list."""
  type_not_in: [LogType!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  user: UserWhereInput
  client: ClientWhereInput
}

input LogWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createProduct(data: ProductCreateInput!): Product!
  createService(data: ServiceCreateInput!): Service!
  createSale(data: SaleCreateInput!): Sale!
  createLog(data: LogCreateInput!): Log!
  createNotifications(data: NotificationsCreateInput!): Notifications!
  createClient(data: ClientCreateInput!): Client!
  createUser(data: UserCreateInput!): User!
  createCartProduct(data: CartProductCreateInput!): CartProduct!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateService(data: ServiceUpdateInput!, where: ServiceWhereUniqueInput!): Service
  updateSale(data: SaleUpdateInput!, where: SaleWhereUniqueInput!): Sale
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  updateClient(data: ClientUpdateInput!, where: ClientWhereUniqueInput!): Client
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteService(where: ServiceWhereUniqueInput!): Service
  deleteSale(where: SaleWhereUniqueInput!): Sale
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteClient(where: ClientWhereUniqueInput!): Client
  deleteUser(where: UserWhereUniqueInput!): User
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertService(where: ServiceWhereUniqueInput!, create: ServiceCreateInput!, update: ServiceUpdateInput!): Service!
  upsertSale(where: SaleWhereUniqueInput!, create: SaleCreateInput!, update: SaleUpdateInput!): Sale!
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  upsertClient(where: ClientWhereUniqueInput!, create: ClientCreateInput!, update: ClientUpdateInput!): Client!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyServices(data: ServiceUpdateInput!, where: ServiceWhereInput): BatchPayload!
  updateManySales(data: SaleUpdateInput!, where: SaleWhereInput): BatchPayload!
  updateManyLogs(data: LogUpdateInput!, where: LogWhereInput): BatchPayload!
  updateManyNotificationses(data: NotificationsUpdateInput!, where: NotificationsWhereInput): BatchPayload!
  updateManyClients(data: ClientUpdateInput!, where: ClientWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCartProducts(data: CartProductUpdateInput!, where: CartProductWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyServices(where: ServiceWhereInput): BatchPayload!
  deleteManySales(where: SaleWhereInput): BatchPayload!
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  deleteManyNotificationses(where: NotificationsWhereInput): BatchPayload!
  deleteManyClients(where: ClientWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCartProducts(where: CartProductWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notifications {
  fireWhen: Int!
  devices: [String!]!
}

"""A connection to a list of items."""
type NotificationsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type NotificationsEdge {
  """The item at the end of the edge."""
  node: Notifications!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [NotificationsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [NotificationsWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationsWhereInput!]
  fireWhen: Int

  """All values that are not equal to given value."""
  fireWhen_not: Int

  """All values that are contained in given list."""
  fireWhen_in: [Int!]

  """All values that are not contained in given list."""
  fireWhen_not_in: [Int!]

  """All values less than the given value."""
  fireWhen_lt: Int

  """All values less than or equal the given value."""
  fireWhen_lte: Int

  """All values greater than the given value."""
  fireWhen_gt: Int

  """All values greater than or equal the given value."""
  fireWhen_gte: Int
  _MagicalBackRelation_NotificationsToUser_every: UserWhereInput
  _MagicalBackRelation_NotificationsToUser_some: UserWhereInput
  _MagicalBackRelation_NotificationsToUser_none: UserWhereInput
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Product implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  notifications: Boolean!
  quantity: Int!
  user(where: UserWhereInput): User!
  client(where: ClientWhereInput): Client!
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  price: Float!
  notifications: Boolean!
  quantity: Int!
  user: UserCreateOneInput!
  client: ClientCreateOneWithoutProductsInput!
}

input ProductCreateManyWithoutClientInput {
  create: [ProductCreateWithoutClientInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutClientInput {
  name: String!
  price: Float!
  notifications: Boolean!
  quantity: Int!
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
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
  notifications_ASC
  notifications_DESC
  quantity_ASC
  quantity_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  notifications: Boolean!
  quantity: Int!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  notifications: Boolean
  quantity: Int
  user: UserUpdateOneInput
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
  notifications: Boolean
  quantity: Int
  user: UserUpdateOneInput
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
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  notifications: Boolean

  """All values that are not equal to given value."""
  notifications_not: Boolean
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  user: UserWhereInput
  client: ClientWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  services(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Service]!
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale]!
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  notificationses(where: NotificationsWhereInput, orderBy: NotificationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notifications]!
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  cartProducts(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct]!
  product(where: ProductWhereUniqueInput!): Product
  service(where: ServiceWhereUniqueInput!): Service
  sale(where: SaleWhereUniqueInput!): Sale
  log(where: LogWhereUniqueInput!): Log
  client(where: ClientWhereUniqueInput!): Client
  user(where: UserWhereUniqueInput!): User
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  servicesConnection(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceConnection!
  salesConnection(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SaleConnection!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  notificationsesConnection(where: NotificationsWhereInput, orderBy: NotificationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationsConnection!
  clientsConnection(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  cartProductsConnection(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartProductConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Sale implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  products(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct!]
  soldBy(where: UserWhereInput): User!
  client(where: ClientWhereInput): Client!
}

"""A connection to a list of items."""
type SaleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SaleEdge]!
  aggregate: AggregateSale!
}

input SaleCreateInput {
  products: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput!
  client: ClientCreateOneWithoutSalesInput!
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
  products: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput!
}

input SaleCreateWithoutSoldByInput {
  products: CartProductCreateManyInput
  client: ClientCreateOneWithoutSalesInput!
}

"""An edge in a connection."""
type SaleEdge {
  """The item at the end of the edge."""
  node: Sale!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [SaleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SaleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  products: CartProductUpdateManyInput
  soldBy: UserUpdateOneWithoutSalesInput
  client: ClientUpdateOneWithoutSalesInput
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
  products: CartProductUpdateManyInput
  soldBy: UserUpdateOneWithoutSalesInput
}

input SaleUpdateWithoutSoldByDataInput {
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
  """Logical AND on all given filters."""
  AND: [SaleWhereInput!]

  """Logical OR on all given filters."""
  OR: [SaleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SaleWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  products_every: CartProductWhereInput
  products_some: CartProductWhereInput
  products_none: CartProductWhereInput
  soldBy: UserWhereInput
  client: ClientWhereInput
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
  client(where: ClientWhereInput): Client!
}

"""A connection to a list of items."""
type ServiceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ServiceEdge]!
  aggregate: AggregateService!
}

input ServiceCreateInput {
  name: String!
  price: Float!
  user: UserCreateOneInput!
  client: ClientCreateOneInput!
}

"""An edge in a connection."""
type ServiceEdge {
  """The item at the end of the edge."""
  node: Service!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ServiceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ServiceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  client: ClientUpdateOneInput
}

input ServiceWhereInput {
  """Logical AND on all given filters."""
  AND: [ServiceWhereInput!]

  """Logical OR on all given filters."""
  OR: [ServiceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ServiceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  user: UserWhereInput
  client: ClientWhereInput
}

input ServiceWhereUniqueInput {
  id: ID
}

type Subscription {
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  service(where: ServiceSubscriptionWhereInput): ServiceSubscriptionPayload
  sale(where: SaleSubscriptionWhereInput): SaleSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  notifications(where: NotificationsSubscriptionWhereInput): NotificationsSubscriptionPayload
  client(where: ClientSubscriptionWhereInput): ClientSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  cartProduct(where: CartProductSubscriptionWhereInput): CartProductSubscriptionPayload
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
  isAdmin: Boolean!
  client(where: ClientWhereInput): Client!
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
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
  CREATE_PRODUCTS
  UPDATE_PRODUCTS
  DELETE_PRODUCTS
  CREATE_SALES
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
  isAdmin: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  isAdmin: Boolean

  """All values that are not equal to given value."""
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
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CartProductOrderByInput =   'productId_ASC' |
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

export type LogType =   'ERROR'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'notifications_ASC' |
  'notifications_DESC' |
  'quantity_ASC' |
  'quantity_DESC'

export type UserPermissions =   'CREATE_PRODUCTS' |
  'UPDATE_PRODUCTS' |
  'DELETE_PRODUCTS' |
  'CREATE_SALES' |
  'DELETE_SALES'

export type UserOrderByInput =   'id_ASC' |
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

export type SaleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type LogOrderByInput =   'id_ASC' |
  'id_DESC' |
  'message_ASC' |
  'message_DESC' |
  'type_ASC' |
  'type_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ServiceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC'

export type NotificationsOrderByInput =   'fireWhen_ASC' |
  'fireWhen_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ClientOrderByInput =   'id_ASC' |
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

export interface ClientCreateWithoutProductsInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput
  sales?: SaleCreateManyWithoutClientInput
  logs?: LogCreateManyWithoutClientInput
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
  notifications?: Boolean
  notifications_not?: Boolean
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  user?: UserWhereInput
  client?: ClientWhereInput
}

export interface ClientCreateOneWithoutLogsInput {
  create?: ClientCreateWithoutLogsInput
  connect?: ClientWhereUniqueInput
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
  client?: ClientWhereInput
}

export interface ClientCreateWithoutLogsInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput
  products?: ProductCreateManyWithoutClientInput
  sales?: SaleCreateManyWithoutClientInput
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

export interface NotificationsCreatedevicesInput {
  set?: String[] | String
}

export interface LogUpdateWithoutClientDataInput {
  message?: String
  type?: LogType
  user?: UserUpdateOneInput
}

export interface ClientCreateOneWithoutUsersInput {
  create?: ClientCreateWithoutUsersInput
  connect?: ClientWhereUniqueInput
}

export interface ProductUpdateInput {
  name?: String
  price?: Float
  notifications?: Boolean
  quantity?: Int
  user?: UserUpdateOneInput
  client?: ClientUpdateOneWithoutProductsInput
}

export interface ClientCreateWithoutUsersInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  products?: ProductCreateManyWithoutClientInput
  sales?: SaleCreateManyWithoutClientInput
  logs?: LogCreateManyWithoutClientInput
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
  client?: ClientWhereInput
}

export interface ProductCreateManyWithoutClientInput {
  create?: ProductCreateWithoutClientInput[] | ProductCreateWithoutClientInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
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
  _MagicalBackRelation_ClientToService_every?: ServiceWhereInput
  _MagicalBackRelation_ClientToService_some?: ServiceWhereInput
  _MagicalBackRelation_ClientToService_none?: ServiceWhereInput
}

export interface ProductCreateWithoutClientInput {
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  user: UserCreateOneInput
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

export interface SaleCreateManyWithoutClientInput {
  create?: SaleCreateWithoutClientInput[] | SaleCreateWithoutClientInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
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

export interface SaleCreateWithoutClientInput {
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

export interface CartProductCreateManyInput {
  create?: CartProductCreateInput[] | CartProductCreateInput
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

export interface CartProductCreateInput {
  productId: ID_Input
  name: String
  price: Float
  quantitySold: Int
}

export interface NotificationsUpdateInput {
  fireWhen?: Int
  devices?: NotificationsUpdatedevicesInput
}

export interface UserCreateOneWithoutSalesInput {
  create?: UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput
}

export interface ServiceWhereUniqueInput {
  id?: ID_Input
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

export interface LogWhereUniqueInput {
  id?: ID_Input
}

export interface LogCreateManyWithoutClientInput {
  create?: LogCreateWithoutClientInput[] | LogCreateWithoutClientInput
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  phoneNumber?: String
}

export interface LogCreateWithoutClientInput {
  message: String
  type: LogType
  user: UserCreateOneInput
}

export interface ClientUpdateInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  products?: ProductUpdateManyWithoutClientInput
  sales?: SaleUpdateManyWithoutClientInput
  logs?: LogUpdateManyWithoutClientInput
}

export interface SaleCreateManyWithoutSoldByInput {
  create?: SaleCreateWithoutSoldByInput[] | SaleCreateWithoutSoldByInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
}

export interface ClientUpdateWithoutLogsDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  products?: ProductUpdateManyWithoutClientInput
  sales?: SaleUpdateManyWithoutClientInput
}

export interface SaleCreateWithoutSoldByInput {
  products?: CartProductCreateManyInput
  client: ClientCreateOneWithoutSalesInput
}

export interface LogUpdateInput {
  message?: String
  type?: LogType
  user?: UserUpdateOneInput
  client?: ClientUpdateOneWithoutLogsInput
}

export interface ClientCreateOneWithoutSalesInput {
  create?: ClientCreateWithoutSalesInput
  connect?: ClientWhereUniqueInput
}

export interface ClientUpsertNestedInput {
  update: ClientUpdateDataInput
  create: ClientCreateInput
}

export interface ClientCreateWithoutSalesInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput
  products?: ProductCreateManyWithoutClientInput
  logs?: LogCreateManyWithoutClientInput
}

export interface ClientUpdateOneInput {
  create?: ClientCreateInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateDataInput
  upsert?: ClientUpsertNestedInput
}

export interface UserCreateManyWithoutClientInput {
  create?: UserCreateWithoutClientInput[] | UserCreateWithoutClientInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ClientUpsertWithoutProductsInput {
  update: ClientUpdateWithoutProductsDataInput
  create: ClientCreateWithoutProductsInput
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

export interface ClientUpdateOneWithoutProductsInput {
  create?: ClientCreateWithoutProductsInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateWithoutProductsDataInput
  upsert?: ClientUpsertWithoutProductsInput
}

export interface ClientCreateOneWithoutProductsInput {
  create?: ClientCreateWithoutProductsInput
  connect?: ClientWhereUniqueInput
}

export interface SaleUpsertWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput
  update: SaleUpdateWithoutSoldByDataInput
  create: SaleCreateWithoutSoldByInput
}

export interface SaleUpdateManyWithoutSoldByInput {
  create?: SaleCreateWithoutSoldByInput[] | SaleCreateWithoutSoldByInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  disconnect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  delete?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  update?: SaleUpdateWithWhereUniqueWithoutSoldByInput[] | SaleUpdateWithWhereUniqueWithoutSoldByInput
  upsert?: SaleUpsertWithWhereUniqueWithoutSoldByInput[] | SaleUpsertWithWhereUniqueWithoutSoldByInput
}

export interface UserUpsertWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutClientDataInput
  create: UserCreateWithoutClientInput
}

export interface ServiceCreateInput {
  name: String
  price: Float
  user: UserCreateOneInput
  client: ClientCreateOneInput
}

export interface UserUpdateWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutClientDataInput
}

export interface ClientCreateOneInput {
  create?: ClientCreateInput
  connect?: ClientWhereUniqueInput
}

export interface ClientUpdateWithoutSalesDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  products?: ProductUpdateManyWithoutClientInput
  logs?: LogUpdateManyWithoutClientInput
}

export interface ClientCreateInput {
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput
  products?: ProductCreateManyWithoutClientInput
  sales?: SaleCreateManyWithoutClientInput
  logs?: LogCreateManyWithoutClientInput
}

export interface SaleUpdateWithoutSoldByDataInput {
  products?: CartProductUpdateManyInput
  client?: ClientUpdateOneWithoutSalesInput
}

export interface SaleCreateInput {
  products?: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput
  client: ClientCreateOneWithoutSalesInput
}

export interface ProductCreateInput {
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  user: UserCreateOneInput
  client: ClientCreateOneWithoutProductsInput
}

export interface LogCreateInput {
  message: String
  type: LogType
  user: UserCreateOneInput
  client: ClientCreateOneWithoutLogsInput
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
  client?: ClientWhereInput
}

export interface NotificationsCreateOneInput {
  create?: NotificationsCreateInput
}

export interface ClientUpsertWithoutUsersInput {
  update: ClientUpdateWithoutUsersDataInput
  create: ClientCreateWithoutUsersInput
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

export interface LogUpsertWithWhereUniqueWithoutClientInput {
  where: LogWhereUniqueInput
  update: LogUpdateWithoutClientDataInput
  create: LogCreateWithoutClientInput
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

export interface CartProductUpdateInput {
  productId?: ID_Input
  name?: String
  price?: Float
  quantitySold?: Int
}

export interface UserUpdatepermissionsInput {
  set?: UserPermissions[] | UserPermissions
}

export interface SaleWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationsUpdateOneInput {
  create?: NotificationsCreateInput
  delete?: Boolean
  update?: NotificationsUpdateDataInput
  upsert?: NotificationsUpsertNestedInput
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

export interface NotificationsUpdateDataInput {
  fireWhen?: Int
  devices?: NotificationsUpdatedevicesInput
}

export interface ClientUpdateOneWithoutLogsInput {
  create?: ClientCreateWithoutLogsInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateWithoutLogsDataInput
  upsert?: ClientUpsertWithoutLogsInput
}

export interface NotificationsUpdatedevicesInput {
  set?: String[] | String
}

export interface ClientUpdateDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  products?: ProductUpdateManyWithoutClientInput
  sales?: SaleUpdateManyWithoutClientInput
  logs?: LogUpdateManyWithoutClientInput
}

export interface NotificationsUpsertNestedInput {
  update: NotificationsUpdateDataInput
  create: NotificationsCreateInput
}

export interface ClientUpdateWithoutProductsDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  users?: UserUpdateManyWithoutClientInput
  sales?: SaleUpdateManyWithoutClientInput
  logs?: LogUpdateManyWithoutClientInput
}

export interface ClientUpdateOneWithoutUsersInput {
  create?: ClientCreateWithoutUsersInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateWithoutUsersDataInput
  upsert?: ClientUpsertWithoutUsersInput
}

export interface ClientUpsertWithoutSalesInput {
  update: ClientUpdateWithoutSalesDataInput
  create: ClientCreateWithoutSalesInput
}

export interface ClientUpdateWithoutUsersDataInput {
  name?: String
  lastName?: String
  email?: String
  phoneNumber?: String
  products?: ProductUpdateManyWithoutClientInput
  sales?: SaleUpdateManyWithoutClientInput
  logs?: LogUpdateManyWithoutClientInput
}

export interface UserUpdateManyWithoutClientInput {
  create?: UserCreateWithoutClientInput[] | UserCreateWithoutClientInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutClientInput[] | UserUpdateWithWhereUniqueWithoutClientInput
  upsert?: UserUpsertWithWhereUniqueWithoutClientInput[] | UserUpsertWithWhereUniqueWithoutClientInput
}

export interface ProductUpdateManyWithoutClientInput {
  create?: ProductCreateWithoutClientInput[] | ProductCreateWithoutClientInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutClientInput[] | ProductUpdateWithWhereUniqueWithoutClientInput
  upsert?: ProductUpsertWithWhereUniqueWithoutClientInput[] | ProductUpsertWithWhereUniqueWithoutClientInput
}

export interface SaleUpdateWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput
  data: SaleUpdateWithoutSoldByDataInput
}

export interface ProductUpdateWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutClientDataInput
}

export interface UserCreatepermissionsInput {
  set?: UserPermissions[] | UserPermissions
}

export interface ProductUpdateWithoutClientDataInput {
  name?: String
  price?: Float
  notifications?: Boolean
  quantity?: Int
  user?: UserUpdateOneInput
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

export interface ProductUpsertWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutClientDataInput
  create: ProductCreateWithoutClientInput
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

export interface SaleUpdateManyWithoutClientInput {
  create?: SaleCreateWithoutClientInput[] | SaleCreateWithoutClientInput
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  disconnect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  delete?: SaleWhereUniqueInput[] | SaleWhereUniqueInput
  update?: SaleUpdateWithWhereUniqueWithoutClientInput[] | SaleUpdateWithWhereUniqueWithoutClientInput
  upsert?: SaleUpsertWithWhereUniqueWithoutClientInput[] | SaleUpsertWithWhereUniqueWithoutClientInput
}

export interface ClientWhereUniqueInput {
  id?: ID_Input
  email?: String
  phoneNumber?: String
}

export interface SaleUpdateWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput
  data: SaleUpdateWithoutClientDataInput
}

export interface SaleUpdateInput {
  products?: CartProductUpdateManyInput
  soldBy?: UserUpdateOneWithoutSalesInput
  client?: ClientUpdateOneWithoutSalesInput
}

export interface SaleUpdateWithoutClientDataInput {
  products?: CartProductUpdateManyInput
  soldBy?: UserUpdateOneWithoutSalesInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface CartProductUpdateManyInput {
  create?: CartProductCreateInput[] | CartProductCreateInput
}

export interface ClientUpdateOneWithoutSalesInput {
  create?: ClientCreateWithoutSalesInput
  connect?: ClientWhereUniqueInput
  delete?: Boolean
  update?: ClientUpdateWithoutSalesDataInput
  upsert?: ClientUpsertWithoutSalesInput
}

export interface UserUpdateOneWithoutSalesInput {
  create?: UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutSalesDataInput
  upsert?: UserUpsertWithoutSalesInput
}

export interface NotificationsCreateInput {
  fireWhen?: Int
  devices?: NotificationsCreatedevicesInput
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

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface ServiceUpdateInput {
  name?: String
  price?: Float
  user?: UserUpdateOneInput
  client?: ClientUpdateOneInput
}

export interface LogUpdateWithWhereUniqueWithoutClientInput {
  where: LogWhereUniqueInput
  data: LogUpdateWithoutClientDataInput
}

export interface LogUpdateManyWithoutClientInput {
  create?: LogCreateWithoutClientInput[] | LogCreateWithoutClientInput
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput
  disconnect?: LogWhereUniqueInput[] | LogWhereUniqueInput
  delete?: LogWhereUniqueInput[] | LogWhereUniqueInput
  update?: LogUpdateWithWhereUniqueWithoutClientInput[] | LogUpdateWithWhereUniqueWithoutClientInput
  upsert?: LogUpsertWithWhereUniqueWithoutClientInput[] | LogUpsertWithWhereUniqueWithoutClientInput
}

export interface SaleUpsertWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput
  update: SaleUpdateWithoutClientDataInput
  create: SaleCreateWithoutClientInput
}

export interface UserUpsertWithoutSalesInput {
  update: UserUpdateWithoutSalesDataInput
  create: UserCreateWithoutSalesInput
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

export interface ClientUpsertWithoutLogsInput {
  update: ClientUpdateWithoutLogsDataInput
  create: ClientCreateWithoutLogsInput
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

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
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
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface ClientPreviousValues {
  id: ID_Output
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  user: User
  client: Client
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
  isAdmin: Boolean
  client: Client
  sales?: Sale[]
}

export interface AggregateCartProduct {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CartProductConnection {
  pageInfo: PageInfo
  edges: CartProductEdge[]
  aggregate: AggregateCartProduct
}

export interface CartProductSubscriptionPayload {
  mutation: MutationType
  node?: CartProduct
  updatedFields?: String[]
  previousValues?: CartProductPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Notifications {
  fireWhen: Int
  devices: String[]
}

export interface AggregateClient {
  count: Int
}

export interface Service extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  user: User
  client: Client
}

/*
 * A connection to a list of items.

 */
export interface ClientConnection {
  pageInfo: PageInfo
  edges: ClientEdge[]
  aggregate: AggregateClient
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
  isAdmin: Boolean
}

/*
 * An edge in a connection.

 */
export interface NotificationsEdge {
  node: Notifications
  cursor: String
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface AggregateLog {
  count: Int
}

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
}

/*
 * A connection to a list of items.

 */
export interface LogConnection {
  pageInfo: PageInfo
  edges: LogEdge[]
  aggregate: AggregateLog
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface SaleEdge {
  node: Sale
  cursor: String
}

export interface ServiceSubscriptionPayload {
  mutation: MutationType
  node?: Service
  updatedFields?: String[]
  previousValues?: ServicePreviousValues
}

export interface AggregateService {
  count: Int
}

export interface ServicePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
}

/*
 * A connection to a list of items.

 */
export interface ServiceConnection {
  pageInfo: PageInfo
  edges: ServiceEdge[]
  aggregate: AggregateService
}

export interface Log extends Node {
  id: ID_Output
  message: String
  type: LogType
  createdAt: DateTime
  user: User
  client: Client
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface SaleSubscriptionPayload {
  mutation: MutationType
  node?: Sale
  updatedFields?: String[]
  previousValues?: SalePreviousValues
}

/*
 * An edge in a connection.

 */
export interface CartProductEdge {
  node: CartProduct
  cursor: String
}

export interface SalePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
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

export interface AggregateNotifications {
  count: Int
}

export interface LogSubscriptionPayload {
  mutation: MutationType
  node?: Log
  updatedFields?: String[]
  previousValues?: LogPreviousValues
}

/*
 * An edge in a connection.

 */
export interface LogEdge {
  node: Log
  cursor: String
}

export interface LogPreviousValues {
  id: ID_Output
  message: String
  type: LogType
  createdAt: DateTime
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

export interface AggregateProduct {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface ClientSubscriptionPayload {
  mutation: MutationType
  node?: Client
  updatedFields?: String[]
  previousValues?: ClientPreviousValues
}

export interface Sale extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  products?: CartProduct[]
  soldBy: User
  client: Client
}

export interface NotificationsPreviousValues {
  fireWhen: Int
  devices: String[]
}

export interface NotificationsSubscriptionPayload {
  mutation: MutationType
  node?: Notifications
  updatedFields?: String[]
  previousValues?: NotificationsPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ClientEdge {
  node: Client
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

export interface AggregateSale {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface NotificationsConnection {
  pageInfo: PageInfo
  edges: NotificationsEdge[]
  aggregate: AggregateNotifications
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number