import { Binding as BaseBinding, BindingOptions } from 'graphql-binding'
import { GraphQLResolveInfo } from 'graphql'

export type UserPermissions = 
  'CREATE_PRODUCTS' |
  'UPDATE_PRODUCTS' |
  'DELETE_PRODUCTS' |
  'CREATE_SALES' |
  'DELETE_SALES'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type LogType = 
  'ERROR'

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

export interface NotificationsCreatedevicesInput {
  set?: String[] | String
}

export interface NotificationsCreateInput {
  fireWhen?: Int
  devices?: NotificationsCreatedevicesInput
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
  client?: ClientWhereInput
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

export interface NotificationsUpdatedevicesInput {
  set?: String[] | String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
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

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface SalePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Notifications {
  fireWhen: Int
  devices: String[]
}

export interface User {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  lastName?: String
  phoneNumber: String
  notifications: Notifications
  permissions: UserPermissions[]
  isAdmin?: Boolean
  client: Client
  sales: Sale[]
}

export interface Sale {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  products: CartProduct[]
  soldBy: User
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface SaleSubscriptionPayload {
  mutation: MutationType
  node?: Sale
  updatedFields?: String[]
  previousValues?: SalePreviousValues
}

export interface Log extends Node {
  id: ID_Output
  message: String
  type: LogType
  createdAt: DateTime
  user: User
  client: Client
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

export interface CartProduct {
  productId: ID_Output
  name: String
  price: Float
  quantitySold: Int
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  quantity: Int
  user: User
  client: Client
}

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  quantity: Int
}

export interface Client {
  id: ID_Output
  name: String
  lastName?: String
  email?: String
  phoneNumber: String
  users: User[]
  products: Product[]
  sales: Sale[]
}

export interface AuthPayload {
  token: String
  user?: User
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  me: (args: {}, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  users: (args: {}, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  products: (args: {}, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Product[]>
  sales: (args: {}, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Sale[]>
}

export type Mutation = {
  login: (args: { phoneNumber: String, password: String }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<AuthPayload>
  createProduct: (args: { name: String, price: Float, quantity: Int }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  updateProduct: (args: { productId: String, name?: String, price?: Float, quantity?: Int }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  deleteProduct: (args: { productId: String }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  createSale: (args: { cartProducts: CartProductCreateInput[] }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Sale | null>
  deleteSale: (args: { saleId: String }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Sale | null>
  createUser: (args: { name: String, phoneNumber: String, password: String, notifications?: NotificationsCreateInput, permissions?: UserPermissions[] }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateUser: (args: { userId: String, name?: String, phoneNumber?: String, password?: String, notifications?: NotificationsUpdateInput, permissions?: UserPermissions[] }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteUser: (args: { userId: String }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  createLog: (args: { message: String, type: LogType }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<Log | null>
  saveDeviceToken: (args: { token: String }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  removeDeviceToken: (args: { token: String }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User | null>
}

export type Subscription = {
  sale: (args: {}, context: { [key: string]: any }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<SaleSubscriptionPayload>>
  user: (args: {}, context: { [key: string]: any }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  product: (args: {}, context: { [key: string]: any }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductSubscriptionPayload>>
}

export class Binding extends BaseBinding {
  
  constructor({ schema, fragmentReplacements }: BindingOptions) {
    super({ schema, fragmentReplacements });
  }
  
  query: Query = {
    me: (args, context, info): Promise<User | null> => super.delegate('query', 'me', args, context, info),
    users: (args, context, info): Promise<User[]> => super.delegate('query', 'users', args, context, info),
    products: (args, context, info): Promise<Product[]> => super.delegate('query', 'products', args, context, info),
    sales: (args, context, info): Promise<Sale[]> => super.delegate('query', 'sales', args, context, info)
  }

  mutation: Mutation = {
    login: (args, context, info): Promise<AuthPayload> => super.delegate('mutation', 'login', args, context, info),
    createProduct: (args, context, info): Promise<Product | null> => super.delegate('mutation', 'createProduct', args, context, info),
    updateProduct: (args, context, info): Promise<Product | null> => super.delegate('mutation', 'updateProduct', args, context, info),
    deleteProduct: (args, context, info): Promise<Product | null> => super.delegate('mutation', 'deleteProduct', args, context, info),
    createSale: (args, context, info): Promise<Sale | null> => super.delegate('mutation', 'createSale', args, context, info),
    deleteSale: (args, context, info): Promise<Sale | null> => super.delegate('mutation', 'deleteSale', args, context, info),
    createUser: (args, context, info): Promise<User | null> => super.delegate('mutation', 'createUser', args, context, info),
    updateUser: (args, context, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, context, info),
    deleteUser: (args, context, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, context, info),
    createLog: (args, context, info): Promise<Log | null> => super.delegate('mutation', 'createLog', args, context, info),
    saveDeviceToken: (args, context, info): Promise<User | null> => super.delegate('mutation', 'saveDeviceToken', args, context, info),
    removeDeviceToken: (args, context, info): Promise<User | null> => super.delegate('mutation', 'removeDeviceToken', args, context, info)
  }

  subscription: Subscription = {
    sale: (args, context, infoOrQuery): Promise<AsyncIterator<SaleSubscriptionPayload>> => super.delegateSubscription('sale', args, context, infoOrQuery),
    user: (args, context, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, context, infoOrQuery),
    product: (args, context, infoOrQuery): Promise<AsyncIterator<ProductSubscriptionPayload>> => super.delegateSubscription('product', args, context, infoOrQuery)
  }
}