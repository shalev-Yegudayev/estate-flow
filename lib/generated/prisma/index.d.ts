
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model FinancialTransaction
 * 
 */
export type FinancialTransaction = $Result.DefaultSelection<Prisma.$FinancialTransactionPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PropertyType: {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  COMMERCIAL: 'COMMERCIAL',
  LAND: 'LAND',
  PARKING: 'PARKING',
  STORAGE: 'STORAGE',
  OTHER: 'OTHER'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const PropertyTag: {
  RENTED: 'RENTED',
  VACANT: 'VACANT',
  FOR_SALE: 'FOR_SALE',
  UNDER_RENOVATION: 'UNDER_RENOVATION',
  NEEDS_REPAIR: 'NEEDS_REPAIR'
};

export type PropertyTag = (typeof PropertyTag)[keyof typeof PropertyTag]


export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionCategory: {
  RENT: 'RENT',
  DEPOSIT: 'DEPOSIT',
  LATE_FEE: 'LATE_FEE',
  OTHER_INCOME: 'OTHER_INCOME',
  MORTGAGE: 'MORTGAGE',
  TAX: 'TAX',
  INSURANCE: 'INSURANCE',
  MAINTENANCE: 'MAINTENANCE',
  REPAIRS: 'REPAIRS',
  UTILITIES: 'UTILITIES',
  MANAGEMENT_FEE: 'MANAGEMENT_FEE',
  LEGAL: 'LEGAL',
  OTHER_EXPENSE: 'OTHER_EXPENSE'
};

export type TransactionCategory = (typeof TransactionCategory)[keyof typeof TransactionCategory]


export const DocumentType: {
  LEASE: 'LEASE',
  DEED: 'DEED',
  INSURANCE: 'INSURANCE',
  RECEIPT: 'RECEIPT',
  INVOICE: 'INVOICE',
  PHOTO: 'PHOTO',
  MORTGAGE: 'MORTGAGE',
  OTHER: 'OTHER'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]

}

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type PropertyTag = $Enums.PropertyTag

export const PropertyTag: typeof $Enums.PropertyTag

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionCategory = $Enums.TransactionCategory

export const TransactionCategory: typeof $Enums.TransactionCategory

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialTransaction`: Exposes CRUD operations for the **FinancialTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialTransactions
    * const financialTransactions = await prisma.financialTransaction.findMany()
    * ```
    */
  get financialTransaction(): Prisma.FinancialTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Property: 'Property',
    Tenant: 'Tenant',
    FinancialTransaction: 'FinancialTransaction',
    Document: 'Document'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "property" | "tenant" | "financialTransaction" | "document"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      FinancialTransaction: {
        payload: Prisma.$FinancialTransactionPayload<ExtArgs>
        fields: Prisma.FinancialTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          findFirst: {
            args: Prisma.FinancialTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          findMany: {
            args: Prisma.FinancialTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          create: {
            args: Prisma.FinancialTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          createMany: {
            args: Prisma.FinancialTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          delete: {
            args: Prisma.FinancialTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          update: {
            args: Prisma.FinancialTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          deleteMany: {
            args: Prisma.FinancialTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>[]
          }
          upsert: {
            args: Prisma.FinancialTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialTransactionPayload>
          }
          aggregate: {
            args: Prisma.FinancialTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialTransaction>
          }
          groupBy: {
            args: Prisma.FinancialTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialTransactionCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    property?: PropertyOmit
    tenant?: TenantOmit
    financialTransaction?: FinancialTransactionOmit
    document?: DocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    properties: number
    tenants: number
    financialTransactions: number
    documents: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | ProfileCountOutputTypeCountPropertiesArgs
    tenants?: boolean | ProfileCountOutputTypeCountTenantsArgs
    financialTransactions?: boolean | ProfileCountOutputTypeCountFinancialTransactionsArgs
    documents?: boolean | ProfileCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountFinancialTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    tenants: number
    financialTransactions: number
    documents: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | PropertyCountOutputTypeCountTenantsArgs
    financialTransactions?: boolean | PropertyCountOutputTypeCountFinancialTransactionsArgs
    documents?: boolean | PropertyCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountTenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountFinancialTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    phone: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    properties?: boolean | Profile$propertiesArgs<ExtArgs>
    tenants?: boolean | Profile$tenantsArgs<ExtArgs>
    financialTransactions?: boolean | Profile$financialTransactionsArgs<ExtArgs>
    documents?: boolean | Profile$documentsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phone" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Profile$propertiesArgs<ExtArgs>
    tenants?: boolean | Profile$tenantsArgs<ExtArgs>
    financialTransactions?: boolean | Profile$financialTransactionsArgs<ExtArgs>
    documents?: boolean | Profile$documentsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      tenants: Prisma.$TenantPayload<ExtArgs>[]
      financialTransactions: Prisma.$FinancialTransactionPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      phone: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends Profile$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenants<T extends Profile$tenantsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$tenantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialTransactions<T extends Profile$financialTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$financialTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Profile$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.properties
   */
  export type Profile$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Profile.tenants
   */
  export type Profile$tenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Profile.financialTransactions
   */
  export type Profile$financialTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    cursor?: FinancialTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * Profile.documents
   */
  export type Profile$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    bedrooms: number | null
    bathrooms: Decimal | null
    area: Decimal | null
    floor: number | null
    yearBuilt: number | null
    purchasePrice: Decimal | null
    monthlyRent: Decimal | null
  }

  export type PropertySumAggregateOutputType = {
    bedrooms: number | null
    bathrooms: Decimal | null
    area: Decimal | null
    floor: number | null
    yearBuilt: number | null
    purchasePrice: Decimal | null
    monthlyRent: Decimal | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    type: $Enums.PropertyType | null
    address: string | null
    city: string | null
    country: string | null
    bedrooms: number | null
    bathrooms: Decimal | null
    area: Decimal | null
    floor: number | null
    yearBuilt: number | null
    purchaseDate: Date | null
    purchasePrice: Decimal | null
    monthlyRent: Decimal | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    type: $Enums.PropertyType | null
    address: string | null
    city: string | null
    country: string | null
    bedrooms: number | null
    bathrooms: Decimal | null
    area: Decimal | null
    floor: number | null
    yearBuilt: number | null
    purchaseDate: Date | null
    purchasePrice: Decimal | null
    monthlyRent: Decimal | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    type: number
    tags: number
    address: number
    city: number
    country: number
    bedrooms: number
    bathrooms: number
    area: number
    floor: number
    yearBuilt: number
    purchaseDate: number
    purchasePrice: number
    monthlyRent: number
    description: number
    features: number
    images: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    area?: true
    floor?: true
    yearBuilt?: true
    purchasePrice?: true
    monthlyRent?: true
  }

  export type PropertySumAggregateInputType = {
    bedrooms?: true
    bathrooms?: true
    area?: true
    floor?: true
    yearBuilt?: true
    purchasePrice?: true
    monthlyRent?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    type?: true
    address?: true
    city?: true
    country?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    floor?: true
    yearBuilt?: true
    purchaseDate?: true
    purchasePrice?: true
    monthlyRent?: true
    description?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    type?: true
    address?: true
    city?: true
    country?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    floor?: true
    yearBuilt?: true
    purchaseDate?: true
    purchasePrice?: true
    monthlyRent?: true
    description?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    type?: true
    tags?: true
    address?: true
    city?: true
    country?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    floor?: true
    yearBuilt?: true
    purchaseDate?: true
    purchasePrice?: true
    monthlyRent?: true
    description?: true
    features?: true
    images?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    type: $Enums.PropertyType
    tags: $Enums.PropertyTag[]
    address: string
    city: string
    country: string
    bedrooms: number | null
    bathrooms: Decimal | null
    area: Decimal | null
    floor: number | null
    yearBuilt: number | null
    purchaseDate: Date | null
    purchasePrice: Decimal
    monthlyRent: Decimal | null
    description: string | null
    features: string[]
    images: string[]
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tags?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    floor?: boolean
    yearBuilt?: boolean
    purchaseDate?: boolean
    purchasePrice?: boolean
    monthlyRent?: boolean
    description?: boolean
    features?: boolean
    images?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
    tenants?: boolean | Property$tenantsArgs<ExtArgs>
    financialTransactions?: boolean | Property$financialTransactionsArgs<ExtArgs>
    documents?: boolean | Property$documentsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tags?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    floor?: boolean
    yearBuilt?: boolean
    purchaseDate?: boolean
    purchasePrice?: boolean
    monthlyRent?: boolean
    description?: boolean
    features?: boolean
    images?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tags?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    floor?: boolean
    yearBuilt?: boolean
    purchaseDate?: boolean
    purchasePrice?: boolean
    monthlyRent?: boolean
    description?: boolean
    features?: boolean
    images?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    type?: boolean
    tags?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    floor?: boolean
    yearBuilt?: boolean
    purchaseDate?: boolean
    purchasePrice?: boolean
    monthlyRent?: boolean
    description?: boolean
    features?: boolean
    images?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "tags" | "address" | "city" | "country" | "bedrooms" | "bathrooms" | "area" | "floor" | "yearBuilt" | "purchaseDate" | "purchasePrice" | "monthlyRent" | "description" | "features" | "images" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
    tenants?: boolean | Property$tenantsArgs<ExtArgs>
    financialTransactions?: boolean | Property$financialTransactionsArgs<ExtArgs>
    documents?: boolean | Property$documentsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      owner: Prisma.$ProfilePayload<ExtArgs>
      tenants: Prisma.$TenantPayload<ExtArgs>[]
      financialTransactions: Prisma.$FinancialTransactionPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.PropertyType
      tags: $Enums.PropertyTag[]
      address: string
      city: string
      country: string
      bedrooms: number | null
      bathrooms: Prisma.Decimal | null
      area: Prisma.Decimal | null
      floor: number | null
      yearBuilt: number | null
      purchaseDate: Date | null
      purchasePrice: Prisma.Decimal
      monthlyRent: Prisma.Decimal | null
      description: string | null
      features: string[]
      images: string[]
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenants<T extends Property$tenantsArgs<ExtArgs> = {}>(args?: Subset<T, Property$tenantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialTransactions<T extends Property$financialTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Property$financialTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Property$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Property$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly type: FieldRef<"Property", 'PropertyType'>
    readonly tags: FieldRef<"Property", 'PropertyTag[]'>
    readonly address: FieldRef<"Property", 'String'>
    readonly city: FieldRef<"Property", 'String'>
    readonly country: FieldRef<"Property", 'String'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Decimal'>
    readonly area: FieldRef<"Property", 'Decimal'>
    readonly floor: FieldRef<"Property", 'Int'>
    readonly yearBuilt: FieldRef<"Property", 'Int'>
    readonly purchaseDate: FieldRef<"Property", 'DateTime'>
    readonly purchasePrice: FieldRef<"Property", 'Decimal'>
    readonly monthlyRent: FieldRef<"Property", 'Decimal'>
    readonly description: FieldRef<"Property", 'String'>
    readonly features: FieldRef<"Property", 'String[]'>
    readonly images: FieldRef<"Property", 'String[]'>
    readonly ownerId: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.tenants
   */
  export type Property$tenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Property.financialTransactions
   */
  export type Property$financialTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    cursor?: FinancialTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * Property.documents
   */
  export type Property$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
  }

  export type TenantSumAggregateOutputType = {
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    idNumber: string | null
    propertyId: string | null
    moveInDate: Date | null
    moveOutDate: Date | null
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
    notes: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    idNumber: string | null
    propertyId: string | null
    moveInDate: Date | null
    moveOutDate: Date | null
    monthlyRent: Decimal | null
    securityDeposit: Decimal | null
    notes: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    idNumber: number
    propertyId: number
    moveInDate: number
    moveOutDate: number
    monthlyRent: number
    securityDeposit: number
    notes: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    monthlyRent?: true
    securityDeposit?: true
  }

  export type TenantSumAggregateInputType = {
    monthlyRent?: true
    securityDeposit?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    idNumber?: true
    propertyId?: true
    moveInDate?: true
    moveOutDate?: true
    monthlyRent?: true
    securityDeposit?: true
    notes?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    idNumber?: true
    propertyId?: true
    moveInDate?: true
    moveOutDate?: true
    monthlyRent?: true
    securityDeposit?: true
    notes?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    idNumber?: true
    propertyId?: true
    moveInDate?: true
    moveOutDate?: true
    monthlyRent?: true
    securityDeposit?: true
    notes?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phone: string
    idNumber: string | null
    propertyId: string
    moveInDate: Date
    moveOutDate: Date | null
    monthlyRent: Decimal
    securityDeposit: Decimal | null
    notes: string | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    idNumber?: boolean
    propertyId?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    notes?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    idNumber?: boolean
    propertyId?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    notes?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    idNumber?: boolean
    propertyId?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    notes?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    idNumber?: boolean
    propertyId?: boolean
    moveInDate?: boolean
    moveOutDate?: boolean
    monthlyRent?: boolean
    securityDeposit?: boolean
    notes?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "idNumber" | "propertyId" | "moveInDate" | "moveOutDate" | "monthlyRent" | "securityDeposit" | "notes" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      owner: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string | null
      phone: string
      idNumber: string | null
      propertyId: string
      moveInDate: Date
      moveOutDate: Date | null
      monthlyRent: Prisma.Decimal
      securityDeposit: Prisma.Decimal | null
      notes: string | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly firstName: FieldRef<"Tenant", 'String'>
    readonly lastName: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly phone: FieldRef<"Tenant", 'String'>
    readonly idNumber: FieldRef<"Tenant", 'String'>
    readonly propertyId: FieldRef<"Tenant", 'String'>
    readonly moveInDate: FieldRef<"Tenant", 'DateTime'>
    readonly moveOutDate: FieldRef<"Tenant", 'DateTime'>
    readonly monthlyRent: FieldRef<"Tenant", 'Decimal'>
    readonly securityDeposit: FieldRef<"Tenant", 'Decimal'>
    readonly notes: FieldRef<"Tenant", 'String'>
    readonly ownerId: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model FinancialTransaction
   */

  export type AggregateFinancialTransaction = {
    _count: FinancialTransactionCountAggregateOutputType | null
    _avg: FinancialTransactionAvgAggregateOutputType | null
    _sum: FinancialTransactionSumAggregateOutputType | null
    _min: FinancialTransactionMinAggregateOutputType | null
    _max: FinancialTransactionMaxAggregateOutputType | null
  }

  export type FinancialTransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type FinancialTransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type FinancialTransactionMinAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    category: $Enums.TransactionCategory | null
    amount: Decimal | null
    date: Date | null
    description: string | null
    receiptUrl: string | null
    propertyId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialTransactionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    category: $Enums.TransactionCategory | null
    amount: Decimal | null
    date: Date | null
    description: string | null
    receiptUrl: string | null
    propertyId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinancialTransactionCountAggregateOutputType = {
    id: number
    type: number
    category: number
    amount: number
    date: number
    description: number
    receiptUrl: number
    propertyId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinancialTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type FinancialTransactionSumAggregateInputType = {
    amount?: true
  }

  export type FinancialTransactionMinAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    date?: true
    description?: true
    receiptUrl?: true
    propertyId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialTransactionMaxAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    date?: true
    description?: true
    receiptUrl?: true
    propertyId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinancialTransactionCountAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    date?: true
    description?: true
    receiptUrl?: true
    propertyId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinancialTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialTransaction to aggregate.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialTransactions
    **/
    _count?: true | FinancialTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialTransactionMaxAggregateInputType
  }

  export type GetFinancialTransactionAggregateType<T extends FinancialTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialTransaction[P]>
      : GetScalarType<T[P], AggregateFinancialTransaction[P]>
  }




  export type FinancialTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialTransactionWhereInput
    orderBy?: FinancialTransactionOrderByWithAggregationInput | FinancialTransactionOrderByWithAggregationInput[]
    by: FinancialTransactionScalarFieldEnum[] | FinancialTransactionScalarFieldEnum
    having?: FinancialTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialTransactionCountAggregateInputType | true
    _avg?: FinancialTransactionAvgAggregateInputType
    _sum?: FinancialTransactionSumAggregateInputType
    _min?: FinancialTransactionMinAggregateInputType
    _max?: FinancialTransactionMaxAggregateInputType
  }

  export type FinancialTransactionGroupByOutputType = {
    id: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal
    date: Date
    description: string | null
    receiptUrl: string | null
    propertyId: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: FinancialTransactionCountAggregateOutputType | null
    _avg: FinancialTransactionAvgAggregateOutputType | null
    _sum: FinancialTransactionSumAggregateOutputType | null
    _min: FinancialTransactionMinAggregateOutputType | null
    _max: FinancialTransactionMaxAggregateOutputType | null
  }

  type GetFinancialTransactionGroupByPayload<T extends FinancialTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialTransactionGroupByOutputType[P]>
        }
      >
    >


  export type FinancialTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    receiptUrl?: boolean
    propertyId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | FinancialTransaction$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    receiptUrl?: boolean
    propertyId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | FinancialTransaction$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    receiptUrl?: boolean
    propertyId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | FinancialTransaction$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialTransaction"]>

  export type FinancialTransactionSelectScalar = {
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    description?: boolean
    receiptUrl?: boolean
    propertyId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinancialTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "category" | "amount" | "date" | "description" | "receiptUrl" | "propertyId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["financialTransaction"]>
  export type FinancialTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | FinancialTransaction$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FinancialTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | FinancialTransaction$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type FinancialTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | FinancialTransaction$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $FinancialTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialTransaction"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs> | null
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TransactionType
      category: $Enums.TransactionCategory
      amount: Prisma.Decimal
      date: Date
      description: string | null
      receiptUrl: string | null
      propertyId: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["financialTransaction"]>
    composites: {}
  }

  type FinancialTransactionGetPayload<S extends boolean | null | undefined | FinancialTransactionDefaultArgs> = $Result.GetResult<Prisma.$FinancialTransactionPayload, S>

  type FinancialTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialTransactionCountAggregateInputType | true
    }

  export interface FinancialTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialTransaction'], meta: { name: 'FinancialTransaction' } }
    /**
     * Find zero or one FinancialTransaction that matches the filter.
     * @param {FinancialTransactionFindUniqueArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialTransactionFindUniqueArgs>(args: SelectSubset<T, FinancialTransactionFindUniqueArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialTransactionFindUniqueOrThrowArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindFirstArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialTransactionFindFirstArgs>(args?: SelectSubset<T, FinancialTransactionFindFirstArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindFirstOrThrowArgs} args - Arguments to find a FinancialTransaction
     * @example
     * // Get one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialTransactions
     * const financialTransactions = await prisma.financialTransaction.findMany()
     * 
     * // Get first 10 FinancialTransactions
     * const financialTransactions = await prisma.financialTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialTransactionFindManyArgs>(args?: SelectSubset<T, FinancialTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialTransaction.
     * @param {FinancialTransactionCreateArgs} args - Arguments to create a FinancialTransaction.
     * @example
     * // Create one FinancialTransaction
     * const FinancialTransaction = await prisma.financialTransaction.create({
     *   data: {
     *     // ... data to create a FinancialTransaction
     *   }
     * })
     * 
     */
    create<T extends FinancialTransactionCreateArgs>(args: SelectSubset<T, FinancialTransactionCreateArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialTransactions.
     * @param {FinancialTransactionCreateManyArgs} args - Arguments to create many FinancialTransactions.
     * @example
     * // Create many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialTransactionCreateManyArgs>(args?: SelectSubset<T, FinancialTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialTransactions and returns the data saved in the database.
     * @param {FinancialTransactionCreateManyAndReturnArgs} args - Arguments to create many FinancialTransactions.
     * @example
     * // Create many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialTransactions and only return the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialTransaction.
     * @param {FinancialTransactionDeleteArgs} args - Arguments to delete one FinancialTransaction.
     * @example
     * // Delete one FinancialTransaction
     * const FinancialTransaction = await prisma.financialTransaction.delete({
     *   where: {
     *     // ... filter to delete one FinancialTransaction
     *   }
     * })
     * 
     */
    delete<T extends FinancialTransactionDeleteArgs>(args: SelectSubset<T, FinancialTransactionDeleteArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialTransaction.
     * @param {FinancialTransactionUpdateArgs} args - Arguments to update one FinancialTransaction.
     * @example
     * // Update one FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialTransactionUpdateArgs>(args: SelectSubset<T, FinancialTransactionUpdateArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialTransactions.
     * @param {FinancialTransactionDeleteManyArgs} args - Arguments to filter FinancialTransactions to delete.
     * @example
     * // Delete a few FinancialTransactions
     * const { count } = await prisma.financialTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialTransactionDeleteManyArgs>(args?: SelectSubset<T, FinancialTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialTransactionUpdateManyArgs>(args: SelectSubset<T, FinancialTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialTransactions and returns the data updated in the database.
     * @param {FinancialTransactionUpdateManyAndReturnArgs} args - Arguments to update many FinancialTransactions.
     * @example
     * // Update many FinancialTransactions
     * const financialTransaction = await prisma.financialTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialTransactions and only return the `id`
     * const financialTransactionWithIdOnly = await prisma.financialTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinancialTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialTransaction.
     * @param {FinancialTransactionUpsertArgs} args - Arguments to update or create a FinancialTransaction.
     * @example
     * // Update or create a FinancialTransaction
     * const financialTransaction = await prisma.financialTransaction.upsert({
     *   create: {
     *     // ... data to create a FinancialTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialTransaction we want to update
     *   }
     * })
     */
    upsert<T extends FinancialTransactionUpsertArgs>(args: SelectSubset<T, FinancialTransactionUpsertArgs<ExtArgs>>): Prisma__FinancialTransactionClient<$Result.GetResult<Prisma.$FinancialTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionCountArgs} args - Arguments to filter FinancialTransactions to count.
     * @example
     * // Count the number of FinancialTransactions
     * const count = await prisma.financialTransaction.count({
     *   where: {
     *     // ... the filter for the FinancialTransactions we want to count
     *   }
     * })
    **/
    count<T extends FinancialTransactionCountArgs>(
      args?: Subset<T, FinancialTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinancialTransactionAggregateArgs>(args: Subset<T, FinancialTransactionAggregateArgs>): Prisma.PrismaPromise<GetFinancialTransactionAggregateType<T>>

    /**
     * Group by FinancialTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinancialTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialTransactionGroupByArgs['orderBy'] }
        : { orderBy?: FinancialTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinancialTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialTransaction model
   */
  readonly fields: FinancialTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends FinancialTransaction$propertyArgs<ExtArgs> = {}>(args?: Subset<T, FinancialTransaction$propertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinancialTransaction model
   */
  interface FinancialTransactionFieldRefs {
    readonly id: FieldRef<"FinancialTransaction", 'String'>
    readonly type: FieldRef<"FinancialTransaction", 'TransactionType'>
    readonly category: FieldRef<"FinancialTransaction", 'TransactionCategory'>
    readonly amount: FieldRef<"FinancialTransaction", 'Decimal'>
    readonly date: FieldRef<"FinancialTransaction", 'DateTime'>
    readonly description: FieldRef<"FinancialTransaction", 'String'>
    readonly receiptUrl: FieldRef<"FinancialTransaction", 'String'>
    readonly propertyId: FieldRef<"FinancialTransaction", 'String'>
    readonly userId: FieldRef<"FinancialTransaction", 'String'>
    readonly createdAt: FieldRef<"FinancialTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"FinancialTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialTransaction findUnique
   */
  export type FinancialTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction findUniqueOrThrow
   */
  export type FinancialTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction findFirst
   */
  export type FinancialTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialTransactions.
     */
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction findFirstOrThrow
   */
  export type FinancialTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransaction to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialTransactions.
     */
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction findMany
   */
  export type FinancialTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FinancialTransactions to fetch.
     */
    where?: FinancialTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialTransactions to fetch.
     */
    orderBy?: FinancialTransactionOrderByWithRelationInput | FinancialTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialTransactions.
     */
    cursor?: FinancialTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialTransactions.
     */
    skip?: number
    distinct?: FinancialTransactionScalarFieldEnum | FinancialTransactionScalarFieldEnum[]
  }

  /**
   * FinancialTransaction create
   */
  export type FinancialTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialTransaction.
     */
    data: XOR<FinancialTransactionCreateInput, FinancialTransactionUncheckedCreateInput>
  }

  /**
   * FinancialTransaction createMany
   */
  export type FinancialTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialTransactions.
     */
    data: FinancialTransactionCreateManyInput | FinancialTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialTransaction createManyAndReturn
   */
  export type FinancialTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialTransactions.
     */
    data: FinancialTransactionCreateManyInput | FinancialTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialTransaction update
   */
  export type FinancialTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialTransaction.
     */
    data: XOR<FinancialTransactionUpdateInput, FinancialTransactionUncheckedUpdateInput>
    /**
     * Choose, which FinancialTransaction to update.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction updateMany
   */
  export type FinancialTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialTransactions.
     */
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FinancialTransactions to update
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to update.
     */
    limit?: number
  }

  /**
   * FinancialTransaction updateManyAndReturn
   */
  export type FinancialTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * The data used to update FinancialTransactions.
     */
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FinancialTransactions to update
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialTransaction upsert
   */
  export type FinancialTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialTransaction to update in case it exists.
     */
    where: FinancialTransactionWhereUniqueInput
    /**
     * In case the FinancialTransaction found by the `where` argument doesn't exist, create a new FinancialTransaction with this data.
     */
    create: XOR<FinancialTransactionCreateInput, FinancialTransactionUncheckedCreateInput>
    /**
     * In case the FinancialTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialTransactionUpdateInput, FinancialTransactionUncheckedUpdateInput>
  }

  /**
   * FinancialTransaction delete
   */
  export type FinancialTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
    /**
     * Filter which FinancialTransaction to delete.
     */
    where: FinancialTransactionWhereUniqueInput
  }

  /**
   * FinancialTransaction deleteMany
   */
  export type FinancialTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialTransactions to delete
     */
    where?: FinancialTransactionWhereInput
    /**
     * Limit how many FinancialTransactions to delete.
     */
    limit?: number
  }

  /**
   * FinancialTransaction.property
   */
  export type FinancialTransaction$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * FinancialTransaction without action
   */
  export type FinancialTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialTransaction
     */
    select?: FinancialTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialTransaction
     */
    omit?: FinancialTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    type: $Enums.DocumentType | null
    title: string | null
    description: string | null
    fileName: string | null
    fileUrl: string | null
    mimeType: string | null
    fileSize: number | null
    propertyId: string | null
    userId: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    type: $Enums.DocumentType | null
    title: string | null
    description: string | null
    fileName: string | null
    fileUrl: string | null
    mimeType: string | null
    fileSize: number | null
    propertyId: string | null
    userId: string | null
    uploadedAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    fileName: number
    fileUrl: number
    mimeType: number
    fileSize: number
    propertyId: number
    userId: number
    uploadedAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type DocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    fileName?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    propertyId?: true
    userId?: true
    uploadedAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    fileName?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    propertyId?: true
    userId?: true
    uploadedAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    fileName?: true
    fileUrl?: true
    mimeType?: true
    fileSize?: true
    propertyId?: true
    userId?: true
    uploadedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    type: $Enums.DocumentType
    title: string
    description: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    propertyId: string | null
    userId: string
    uploadedAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    fileName?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    propertyId?: boolean
    userId?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    property?: boolean | Document$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    fileName?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    propertyId?: boolean
    userId?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    property?: boolean | Document$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    fileName?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    propertyId?: boolean
    userId?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
    property?: boolean | Document$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    fileName?: boolean
    fileUrl?: boolean
    mimeType?: boolean
    fileSize?: boolean
    propertyId?: boolean
    userId?: boolean
    uploadedAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "fileName" | "fileUrl" | "mimeType" | "fileSize" | "propertyId" | "userId" | "uploadedAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | Document$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | Document$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | Document$propertyArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs> | null
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.DocumentType
      title: string
      description: string | null
      fileName: string
      fileUrl: string
      mimeType: string
      fileSize: number
      propertyId: string | null
      userId: string
      uploadedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends Document$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Document$propertyArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'DocumentType'>
    readonly title: FieldRef<"Document", 'String'>
    readonly description: FieldRef<"Document", 'String'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly fileUrl: FieldRef<"Document", 'String'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly fileSize: FieldRef<"Document", 'Int'>
    readonly propertyId: FieldRef<"Document", 'String'>
    readonly userId: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.property
   */
  export type Document$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    type: 'type',
    tags: 'tags',
    address: 'address',
    city: 'city',
    country: 'country',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    area: 'area',
    floor: 'floor',
    yearBuilt: 'yearBuilt',
    purchaseDate: 'purchaseDate',
    purchasePrice: 'purchasePrice',
    monthlyRent: 'monthlyRent',
    description: 'description',
    features: 'features',
    images: 'images',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    idNumber: 'idNumber',
    propertyId: 'propertyId',
    moveInDate: 'moveInDate',
    moveOutDate: 'moveOutDate',
    monthlyRent: 'monthlyRent',
    securityDeposit: 'securityDeposit',
    notes: 'notes',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const FinancialTransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    category: 'category',
    amount: 'amount',
    date: 'date',
    description: 'description',
    receiptUrl: 'receiptUrl',
    propertyId: 'propertyId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinancialTransactionScalarFieldEnum = (typeof FinancialTransactionScalarFieldEnum)[keyof typeof FinancialTransactionScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    mimeType: 'mimeType',
    fileSize: 'fileSize',
    propertyId: 'propertyId',
    userId: 'userId',
    uploadedAt: 'uploadedAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'PropertyTag[]'
   */
  export type ListEnumPropertyTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyTag[]'>
    


  /**
   * Reference to a field of type 'PropertyTag'
   */
  export type EnumPropertyTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyTag'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionCategory'
   */
  export type EnumTransactionCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionCategory'>
    


  /**
   * Reference to a field of type 'TransactionCategory[]'
   */
  export type ListEnumTransactionCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionCategory[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    phone?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    properties?: PropertyListRelationFilter
    tenants?: TenantListRelationFilter
    financialTransactions?: FinancialTransactionListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    tenants?: TenantOrderByRelationAggregateInput
    financialTransactions?: FinancialTransactionOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    phone?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    properties?: PropertyListRelationFilter
    tenants?: TenantListRelationFilter
    financialTransactions?: FinancialTransactionListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    firstName?: StringWithAggregatesFilter<"Profile"> | string
    lastName?: StringWithAggregatesFilter<"Profile"> | string
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    tags?: EnumPropertyTagNullableListFilter<"Property">
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    country?: StringFilter<"Property"> | string
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    floor?: IntNullableFilter<"Property"> | number | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    purchaseDate?: DateTimeNullableFilter<"Property"> | Date | string | null
    purchasePrice?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Property"> | string | null
    features?: StringNullableListFilter<"Property">
    images?: StringNullableListFilter<"Property">
    ownerId?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    owner?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    tenants?: TenantListRelationFilter
    financialTransactions?: FinancialTransactionListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    floor?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    purchasePrice?: SortOrder
    monthlyRent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrder
    images?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: ProfileOrderByWithRelationInput
    tenants?: TenantOrderByRelationAggregateInput
    financialTransactions?: FinancialTransactionOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    tags?: EnumPropertyTagNullableListFilter<"Property">
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    country?: StringFilter<"Property"> | string
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    floor?: IntNullableFilter<"Property"> | number | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    purchaseDate?: DateTimeNullableFilter<"Property"> | Date | string | null
    purchasePrice?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Property"> | string | null
    features?: StringNullableListFilter<"Property">
    images?: StringNullableListFilter<"Property">
    ownerId?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    owner?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    tenants?: TenantListRelationFilter
    financialTransactions?: FinancialTransactionListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    floor?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    purchasePrice?: SortOrder
    monthlyRent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrder
    images?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    type?: EnumPropertyTypeWithAggregatesFilter<"Property"> | $Enums.PropertyType
    tags?: EnumPropertyTagNullableListFilter<"Property">
    address?: StringWithAggregatesFilter<"Property"> | string
    city?: StringWithAggregatesFilter<"Property"> | string
    country?: StringWithAggregatesFilter<"Property"> | string
    bedrooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    bathrooms?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    floor?: IntNullableWithAggregatesFilter<"Property"> | number | null
    yearBuilt?: IntNullableWithAggregatesFilter<"Property"> | number | null
    purchaseDate?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
    purchasePrice?: DecimalWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    features?: StringNullableListFilter<"Property">
    images?: StringNullableListFilter<"Property">
    ownerId?: StringWithAggregatesFilter<"Property"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    firstName?: StringFilter<"Tenant"> | string
    lastName?: StringFilter<"Tenant"> | string
    email?: StringNullableFilter<"Tenant"> | string | null
    phone?: StringFilter<"Tenant"> | string
    idNumber?: StringNullableFilter<"Tenant"> | string | null
    propertyId?: StringFilter<"Tenant"> | string
    moveInDate?: DateTimeFilter<"Tenant"> | Date | string
    moveOutDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    monthlyRent?: DecimalFilter<"Tenant"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalNullableFilter<"Tenant"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    ownerId?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    owner?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    idNumber?: SortOrderInput | SortOrder
    propertyId?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrderInput | SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    owner?: ProfileOrderByWithRelationInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    firstName?: StringFilter<"Tenant"> | string
    lastName?: StringFilter<"Tenant"> | string
    email?: StringNullableFilter<"Tenant"> | string | null
    phone?: StringFilter<"Tenant"> | string
    idNumber?: StringNullableFilter<"Tenant"> | string | null
    propertyId?: StringFilter<"Tenant"> | string
    moveInDate?: DateTimeFilter<"Tenant"> | Date | string
    moveOutDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    monthlyRent?: DecimalFilter<"Tenant"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalNullableFilter<"Tenant"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    ownerId?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    owner?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    idNumber?: SortOrderInput | SortOrder
    propertyId?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrderInput | SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    firstName?: StringWithAggregatesFilter<"Tenant"> | string
    lastName?: StringWithAggregatesFilter<"Tenant"> | string
    email?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    phone?: StringWithAggregatesFilter<"Tenant"> | string
    idNumber?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    propertyId?: StringWithAggregatesFilter<"Tenant"> | string
    moveInDate?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    moveOutDate?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
    monthlyRent?: DecimalWithAggregatesFilter<"Tenant"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalNullableWithAggregatesFilter<"Tenant"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    ownerId?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type FinancialTransactionWhereInput = {
    AND?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    OR?: FinancialTransactionWhereInput[]
    NOT?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    id?: StringFilter<"FinancialTransaction"> | string
    type?: EnumTransactionTypeFilter<"FinancialTransaction"> | $Enums.TransactionType
    category?: EnumTransactionCategoryFilter<"FinancialTransaction"> | $Enums.TransactionCategory
    amount?: DecimalFilter<"FinancialTransaction"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"FinancialTransaction"> | Date | string
    description?: StringNullableFilter<"FinancialTransaction"> | string | null
    receiptUrl?: StringNullableFilter<"FinancialTransaction"> | string | null
    propertyId?: StringNullableFilter<"FinancialTransaction"> | string | null
    userId?: StringFilter<"FinancialTransaction"> | string
    createdAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type FinancialTransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type FinancialTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    OR?: FinancialTransactionWhereInput[]
    NOT?: FinancialTransactionWhereInput | FinancialTransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"FinancialTransaction"> | $Enums.TransactionType
    category?: EnumTransactionCategoryFilter<"FinancialTransaction"> | $Enums.TransactionCategory
    amount?: DecimalFilter<"FinancialTransaction"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"FinancialTransaction"> | Date | string
    description?: StringNullableFilter<"FinancialTransaction"> | string | null
    receiptUrl?: StringNullableFilter<"FinancialTransaction"> | string | null
    propertyId?: StringNullableFilter<"FinancialTransaction"> | string | null
    userId?: StringFilter<"FinancialTransaction"> | string
    createdAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type FinancialTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    propertyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinancialTransactionCountOrderByAggregateInput
    _avg?: FinancialTransactionAvgOrderByAggregateInput
    _max?: FinancialTransactionMaxOrderByAggregateInput
    _min?: FinancialTransactionMinOrderByAggregateInput
    _sum?: FinancialTransactionSumOrderByAggregateInput
  }

  export type FinancialTransactionScalarWhereWithAggregatesInput = {
    AND?: FinancialTransactionScalarWhereWithAggregatesInput | FinancialTransactionScalarWhereWithAggregatesInput[]
    OR?: FinancialTransactionScalarWhereWithAggregatesInput[]
    NOT?: FinancialTransactionScalarWhereWithAggregatesInput | FinancialTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"FinancialTransaction"> | $Enums.TransactionType
    category?: EnumTransactionCategoryWithAggregatesFilter<"FinancialTransaction"> | $Enums.TransactionCategory
    amount?: DecimalWithAggregatesFilter<"FinancialTransaction"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
    description?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    receiptUrl?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    propertyId?: StringNullableWithAggregatesFilter<"FinancialTransaction"> | string | null
    userId?: StringWithAggregatesFilter<"FinancialTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinancialTransaction"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    fileName?: StringFilter<"Document"> | string
    fileUrl?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    propertyId?: StringNullableFilter<"Document"> | string | null
    userId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    propertyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    fileName?: StringFilter<"Document"> | string
    fileUrl?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    propertyId?: StringNullableFilter<"Document"> | string | null
    userId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    property?: XOR<PropertyNullableScalarRelationFilter, PropertyWhereInput> | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    propertyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    type?: EnumDocumentTypeWithAggregatesFilter<"Document"> | $Enums.DocumentType
    title?: StringWithAggregatesFilter<"Document"> | string
    description?: StringNullableWithAggregatesFilter<"Document"> | string | null
    fileName?: StringWithAggregatesFilter<"Document"> | string
    fileUrl?: StringWithAggregatesFilter<"Document"> | string
    mimeType?: StringWithAggregatesFilter<"Document"> | string
    fileSize?: IntWithAggregatesFilter<"Document"> | number
    propertyId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    userId?: StringWithAggregatesFilter<"Document"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type ProfileCreateInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    tenants?: TenantCreateNestedManyWithoutOwnerInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutProfileInput
    documents?: DocumentCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    tenants?: TenantUncheckedCreateNestedManyWithoutOwnerInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutProfileInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    tenants?: TenantUpdateManyWithoutOwnerNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutProfileNestedInput
    documents?: DocumentUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutOwnerNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutProfileNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProfileCreateNestedOneWithoutPropertiesInput
    tenants?: TenantCreateNestedManyWithoutPropertyInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertyInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProfileUpdateOneRequiredWithoutPropertiesNestedInput
    tenants?: TenantUpdateManyWithoutPropertyNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertyNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutTenantsInput
    owner: ProfileCreateNestedOneWithoutTenantsInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    propertyId: string
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutTenantsNestedInput
    owner?: ProfileUpdateOneRequiredWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    propertyId: string
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionCreateInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutFinancialTransactionsInput
    profile: ProfileCreateNestedOneWithoutFinancialTransactionsInput
  }

  export type FinancialTransactionUncheckedCreateInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    propertyId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutFinancialTransactionsNestedInput
    profile?: ProfileUpdateOneRequiredWithoutFinancialTransactionsNestedInput
  }

  export type FinancialTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionCreateManyInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    propertyId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    uploadedAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutDocumentsInput
    profile: ProfileCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    propertyId?: string | null
    userId: string
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutDocumentsNestedInput
    profile?: ProfileUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    propertyId?: string | null
    userId: string
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type TenantListRelationFilter = {
    every?: TenantWhereInput
    some?: TenantWhereInput
    none?: TenantWhereInput
  }

  export type FinancialTransactionListRelationFilter = {
    every?: FinancialTransactionWhereInput
    some?: FinancialTransactionWhereInput
    none?: FinancialTransactionWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type EnumPropertyTagNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyTag[] | ListEnumPropertyTagFieldRefInput<$PrismaModel> | null
    has?: $Enums.PropertyTag | EnumPropertyTagFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PropertyTag[] | ListEnumPropertyTagFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PropertyTag[] | ListEnumPropertyTagFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    floor?: SortOrder
    yearBuilt?: SortOrder
    purchaseDate?: SortOrder
    purchasePrice?: SortOrder
    monthlyRent?: SortOrder
    description?: SortOrder
    features?: SortOrder
    images?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    floor?: SortOrder
    yearBuilt?: SortOrder
    purchasePrice?: SortOrder
    monthlyRent?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    floor?: SortOrder
    yearBuilt?: SortOrder
    purchaseDate?: SortOrder
    purchasePrice?: SortOrder
    monthlyRent?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    floor?: SortOrder
    yearBuilt?: SortOrder
    purchaseDate?: SortOrder
    purchasePrice?: SortOrder
    monthlyRent?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    floor?: SortOrder
    yearBuilt?: SortOrder
    purchasePrice?: SortOrder
    monthlyRent?: SortOrder
  }

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    idNumber?: SortOrder
    propertyId?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    idNumber?: SortOrder
    propertyId?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    idNumber?: SortOrder
    propertyId?: SortOrder
    moveInDate?: SortOrder
    moveOutDate?: SortOrder
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
    notes?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    monthlyRent?: SortOrder
    securityDeposit?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionCategory | EnumTransactionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionCategoryFilter<$PrismaModel> | $Enums.TransactionCategory
  }

  export type PropertyNullableScalarRelationFilter = {
    is?: PropertyWhereInput | null
    isNot?: PropertyWhereInput | null
  }

  export type FinancialTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    receiptUrl?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FinancialTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    receiptUrl?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    description?: SortOrder
    receiptUrl?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinancialTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionCategory | EnumTransactionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TransactionCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionCategoryFilter<$PrismaModel>
    _max?: NestedEnumTransactionCategoryFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    mimeType?: SortOrder
    fileSize?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    uploadedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PropertyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type TenantCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TenantCreateWithoutOwnerInput, TenantUncheckedCreateWithoutOwnerInput> | TenantCreateWithoutOwnerInput[] | TenantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutOwnerInput | TenantCreateOrConnectWithoutOwnerInput[]
    createMany?: TenantCreateManyOwnerInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type FinancialTransactionCreateNestedManyWithoutProfileInput = {
    create?: XOR<FinancialTransactionCreateWithoutProfileInput, FinancialTransactionUncheckedCreateWithoutProfileInput> | FinancialTransactionCreateWithoutProfileInput[] | FinancialTransactionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutProfileInput | FinancialTransactionCreateOrConnectWithoutProfileInput[]
    createMany?: FinancialTransactionCreateManyProfileInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutProfileInput = {
    create?: XOR<DocumentCreateWithoutProfileInput, DocumentUncheckedCreateWithoutProfileInput> | DocumentCreateWithoutProfileInput[] | DocumentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProfileInput | DocumentCreateOrConnectWithoutProfileInput[]
    createMany?: DocumentCreateManyProfileInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TenantCreateWithoutOwnerInput, TenantUncheckedCreateWithoutOwnerInput> | TenantCreateWithoutOwnerInput[] | TenantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutOwnerInput | TenantCreateOrConnectWithoutOwnerInput[]
    createMany?: TenantCreateManyOwnerInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type FinancialTransactionUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<FinancialTransactionCreateWithoutProfileInput, FinancialTransactionUncheckedCreateWithoutProfileInput> | FinancialTransactionCreateWithoutProfileInput[] | FinancialTransactionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutProfileInput | FinancialTransactionCreateOrConnectWithoutProfileInput[]
    createMany?: FinancialTransactionCreateManyProfileInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<DocumentCreateWithoutProfileInput, DocumentUncheckedCreateWithoutProfileInput> | DocumentCreateWithoutProfileInput[] | DocumentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProfileInput | DocumentCreateOrConnectWithoutProfileInput[]
    createMany?: DocumentCreateManyProfileInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type TenantUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TenantCreateWithoutOwnerInput, TenantUncheckedCreateWithoutOwnerInput> | TenantCreateWithoutOwnerInput[] | TenantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutOwnerInput | TenantCreateOrConnectWithoutOwnerInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutOwnerInput | TenantUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TenantCreateManyOwnerInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutOwnerInput | TenantUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutOwnerInput | TenantUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type FinancialTransactionUpdateManyWithoutProfileNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutProfileInput, FinancialTransactionUncheckedCreateWithoutProfileInput> | FinancialTransactionCreateWithoutProfileInput[] | FinancialTransactionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutProfileInput | FinancialTransactionCreateOrConnectWithoutProfileInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutProfileInput | FinancialTransactionUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: FinancialTransactionCreateManyProfileInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutProfileInput | FinancialTransactionUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutProfileInput | FinancialTransactionUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutProfileNestedInput = {
    create?: XOR<DocumentCreateWithoutProfileInput, DocumentUncheckedCreateWithoutProfileInput> | DocumentCreateWithoutProfileInput[] | DocumentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProfileInput | DocumentCreateOrConnectWithoutProfileInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutProfileInput | DocumentUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: DocumentCreateManyProfileInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutProfileInput | DocumentUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutProfileInput | DocumentUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type TenantUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TenantCreateWithoutOwnerInput, TenantUncheckedCreateWithoutOwnerInput> | TenantCreateWithoutOwnerInput[] | TenantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutOwnerInput | TenantCreateOrConnectWithoutOwnerInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutOwnerInput | TenantUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TenantCreateManyOwnerInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutOwnerInput | TenantUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutOwnerInput | TenantUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutProfileInput, FinancialTransactionUncheckedCreateWithoutProfileInput> | FinancialTransactionCreateWithoutProfileInput[] | FinancialTransactionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutProfileInput | FinancialTransactionCreateOrConnectWithoutProfileInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutProfileInput | FinancialTransactionUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: FinancialTransactionCreateManyProfileInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutProfileInput | FinancialTransactionUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutProfileInput | FinancialTransactionUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<DocumentCreateWithoutProfileInput, DocumentUncheckedCreateWithoutProfileInput> | DocumentCreateWithoutProfileInput[] | DocumentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProfileInput | DocumentCreateOrConnectWithoutProfileInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutProfileInput | DocumentUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: DocumentCreateManyProfileInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutProfileInput | DocumentUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutProfileInput | DocumentUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type PropertyCreatetagsInput = {
    set: $Enums.PropertyTag[]
  }

  export type PropertyCreatefeaturesInput = {
    set: string[]
  }

  export type PropertyCreateimagesInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<ProfileCreateWithoutPropertiesInput, ProfileUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPropertiesInput
    connect?: ProfileWhereUniqueInput
  }

  export type TenantCreateNestedManyWithoutPropertyInput = {
    create?: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput> | TenantCreateWithoutPropertyInput[] | TenantUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyInput | TenantCreateOrConnectWithoutPropertyInput[]
    createMany?: TenantCreateManyPropertyInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type FinancialTransactionCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FinancialTransactionCreateWithoutPropertyInput, FinancialTransactionUncheckedCreateWithoutPropertyInput> | FinancialTransactionCreateWithoutPropertyInput[] | FinancialTransactionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutPropertyInput | FinancialTransactionCreateOrConnectWithoutPropertyInput[]
    createMany?: FinancialTransactionCreateManyPropertyInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutPropertyInput = {
    create?: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput> | DocumentCreateWithoutPropertyInput[] | DocumentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPropertyInput | DocumentCreateOrConnectWithoutPropertyInput[]
    createMany?: DocumentCreateManyPropertyInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput> | TenantCreateWithoutPropertyInput[] | TenantUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyInput | TenantCreateOrConnectWithoutPropertyInput[]
    createMany?: TenantCreateManyPropertyInputEnvelope
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
  }

  export type FinancialTransactionUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<FinancialTransactionCreateWithoutPropertyInput, FinancialTransactionUncheckedCreateWithoutPropertyInput> | FinancialTransactionCreateWithoutPropertyInput[] | FinancialTransactionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutPropertyInput | FinancialTransactionCreateOrConnectWithoutPropertyInput[]
    createMany?: FinancialTransactionCreateManyPropertyInputEnvelope
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput> | DocumentCreateWithoutPropertyInput[] | DocumentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPropertyInput | DocumentCreateOrConnectWithoutPropertyInput[]
    createMany?: DocumentCreateManyPropertyInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type PropertyUpdatetagsInput = {
    set?: $Enums.PropertyTag[]
    push?: $Enums.PropertyTag | $Enums.PropertyTag[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PropertyUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PropertyUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<ProfileCreateWithoutPropertiesInput, ProfileUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPropertiesInput
    upsert?: ProfileUpsertWithoutPropertiesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPropertiesInput, ProfileUpdateWithoutPropertiesInput>, ProfileUncheckedUpdateWithoutPropertiesInput>
  }

  export type TenantUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput> | TenantCreateWithoutPropertyInput[] | TenantUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyInput | TenantCreateOrConnectWithoutPropertyInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutPropertyInput | TenantUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: TenantCreateManyPropertyInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutPropertyInput | TenantUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutPropertyInput | TenantUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type FinancialTransactionUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutPropertyInput, FinancialTransactionUncheckedCreateWithoutPropertyInput> | FinancialTransactionCreateWithoutPropertyInput[] | FinancialTransactionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutPropertyInput | FinancialTransactionCreateOrConnectWithoutPropertyInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutPropertyInput | FinancialTransactionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FinancialTransactionCreateManyPropertyInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutPropertyInput | FinancialTransactionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutPropertyInput | FinancialTransactionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput> | DocumentCreateWithoutPropertyInput[] | DocumentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPropertyInput | DocumentCreateOrConnectWithoutPropertyInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutPropertyInput | DocumentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: DocumentCreateManyPropertyInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutPropertyInput | DocumentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutPropertyInput | DocumentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type TenantUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput> | TenantCreateWithoutPropertyInput[] | TenantUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyInput | TenantCreateOrConnectWithoutPropertyInput[]
    upsert?: TenantUpsertWithWhereUniqueWithoutPropertyInput | TenantUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: TenantCreateManyPropertyInputEnvelope
    set?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    disconnect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    delete?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    connect?: TenantWhereUniqueInput | TenantWhereUniqueInput[]
    update?: TenantUpdateWithWhereUniqueWithoutPropertyInput | TenantUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: TenantUpdateManyWithWhereWithoutPropertyInput | TenantUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: TenantScalarWhereInput | TenantScalarWhereInput[]
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<FinancialTransactionCreateWithoutPropertyInput, FinancialTransactionUncheckedCreateWithoutPropertyInput> | FinancialTransactionCreateWithoutPropertyInput[] | FinancialTransactionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: FinancialTransactionCreateOrConnectWithoutPropertyInput | FinancialTransactionCreateOrConnectWithoutPropertyInput[]
    upsert?: FinancialTransactionUpsertWithWhereUniqueWithoutPropertyInput | FinancialTransactionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: FinancialTransactionCreateManyPropertyInputEnvelope
    set?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    disconnect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    delete?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    connect?: FinancialTransactionWhereUniqueInput | FinancialTransactionWhereUniqueInput[]
    update?: FinancialTransactionUpdateWithWhereUniqueWithoutPropertyInput | FinancialTransactionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: FinancialTransactionUpdateManyWithWhereWithoutPropertyInput | FinancialTransactionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput> | DocumentCreateWithoutPropertyInput[] | DocumentUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPropertyInput | DocumentCreateOrConnectWithoutPropertyInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutPropertyInput | DocumentUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: DocumentCreateManyPropertyInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutPropertyInput | DocumentUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutPropertyInput | DocumentUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutTenantsInput = {
    create?: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantsInput
    connect?: PropertyWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutTenantsInput = {
    create?: XOR<ProfileCreateWithoutTenantsInput, ProfileUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTenantsInput
    connect?: ProfileWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutTenantsNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantsInput
    upsert?: PropertyUpsertWithoutTenantsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutTenantsInput, PropertyUpdateWithoutTenantsInput>, PropertyUncheckedUpdateWithoutTenantsInput>
  }

  export type ProfileUpdateOneRequiredWithoutTenantsNestedInput = {
    create?: XOR<ProfileCreateWithoutTenantsInput, ProfileUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTenantsInput
    upsert?: ProfileUpsertWithoutTenantsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutTenantsInput, ProfileUpdateWithoutTenantsInput>, ProfileUncheckedUpdateWithoutTenantsInput>
  }

  export type PropertyCreateNestedOneWithoutFinancialTransactionsInput = {
    create?: XOR<PropertyCreateWithoutFinancialTransactionsInput, PropertyUncheckedCreateWithoutFinancialTransactionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFinancialTransactionsInput
    connect?: PropertyWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutFinancialTransactionsInput = {
    create?: XOR<ProfileCreateWithoutFinancialTransactionsInput, ProfileUncheckedCreateWithoutFinancialTransactionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFinancialTransactionsInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TransactionCategory
  }

  export type PropertyUpdateOneWithoutFinancialTransactionsNestedInput = {
    create?: XOR<PropertyCreateWithoutFinancialTransactionsInput, PropertyUncheckedCreateWithoutFinancialTransactionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutFinancialTransactionsInput
    upsert?: PropertyUpsertWithoutFinancialTransactionsInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutFinancialTransactionsInput, PropertyUpdateWithoutFinancialTransactionsInput>, PropertyUncheckedUpdateWithoutFinancialTransactionsInput>
  }

  export type ProfileUpdateOneRequiredWithoutFinancialTransactionsNestedInput = {
    create?: XOR<ProfileCreateWithoutFinancialTransactionsInput, ProfileUncheckedCreateWithoutFinancialTransactionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutFinancialTransactionsInput
    upsert?: ProfileUpsertWithoutFinancialTransactionsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutFinancialTransactionsInput, ProfileUpdateWithoutFinancialTransactionsInput>, ProfileUncheckedUpdateWithoutFinancialTransactionsInput>
  }

  export type PropertyCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<PropertyCreateWithoutDocumentsInput, PropertyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutDocumentsInput
    connect?: PropertyWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ProfileCreateWithoutDocumentsInput, ProfileUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutDocumentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<PropertyCreateWithoutDocumentsInput, PropertyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutDocumentsInput
    upsert?: PropertyUpsertWithoutDocumentsInput
    disconnect?: PropertyWhereInput | boolean
    delete?: PropertyWhereInput | boolean
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutDocumentsInput, PropertyUpdateWithoutDocumentsInput>, PropertyUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProfileUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ProfileCreateWithoutDocumentsInput, ProfileUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutDocumentsInput
    upsert?: ProfileUpsertWithoutDocumentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutDocumentsInput, ProfileUpdateWithoutDocumentsInput>, ProfileUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionCategory | EnumTransactionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionCategoryFilter<$PrismaModel> | $Enums.TransactionCategory
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionCategory | EnumTransactionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TransactionCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionCategoryFilter<$PrismaModel>
    _max?: NestedEnumTransactionCategoryFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PropertyCreateWithoutOwnerInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutPropertyInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutOwnerInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertyInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyCreateManyOwnerInputEnvelope = {
    data: PropertyCreateManyOwnerInput | PropertyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutOwnerInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutOwnerInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    propertyId: string
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateOrConnectWithoutOwnerInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutOwnerInput, TenantUncheckedCreateWithoutOwnerInput>
  }

  export type TenantCreateManyOwnerInputEnvelope = {
    data: TenantCreateManyOwnerInput | TenantCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FinancialTransactionCreateWithoutProfileInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutFinancialTransactionsInput
  }

  export type FinancialTransactionUncheckedCreateWithoutProfileInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    propertyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionCreateOrConnectWithoutProfileInput = {
    where: FinancialTransactionWhereUniqueInput
    create: XOR<FinancialTransactionCreateWithoutProfileInput, FinancialTransactionUncheckedCreateWithoutProfileInput>
  }

  export type FinancialTransactionCreateManyProfileInputEnvelope = {
    data: FinancialTransactionCreateManyProfileInput | FinancialTransactionCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutProfileInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    uploadedAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutProfileInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    propertyId?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutProfileInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutProfileInput, DocumentUncheckedCreateWithoutProfileInput>
  }

  export type DocumentCreateManyProfileInputEnvelope = {
    data: DocumentCreateManyProfileInput | DocumentCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
  }

  export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    tags?: EnumPropertyTagNullableListFilter<"Property">
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    country?: StringFilter<"Property"> | string
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    floor?: IntNullableFilter<"Property"> | number | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    purchaseDate?: DateTimeNullableFilter<"Property"> | Date | string | null
    purchasePrice?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    monthlyRent?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Property"> | string | null
    features?: StringNullableListFilter<"Property">
    images?: StringNullableListFilter<"Property">
    ownerId?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type TenantUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TenantWhereUniqueInput
    update: XOR<TenantUpdateWithoutOwnerInput, TenantUncheckedUpdateWithoutOwnerInput>
    create: XOR<TenantCreateWithoutOwnerInput, TenantUncheckedCreateWithoutOwnerInput>
  }

  export type TenantUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TenantWhereUniqueInput
    data: XOR<TenantUpdateWithoutOwnerInput, TenantUncheckedUpdateWithoutOwnerInput>
  }

  export type TenantUpdateManyWithWhereWithoutOwnerInput = {
    where: TenantScalarWhereInput
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TenantScalarWhereInput = {
    AND?: TenantScalarWhereInput | TenantScalarWhereInput[]
    OR?: TenantScalarWhereInput[]
    NOT?: TenantScalarWhereInput | TenantScalarWhereInput[]
    id?: StringFilter<"Tenant"> | string
    firstName?: StringFilter<"Tenant"> | string
    lastName?: StringFilter<"Tenant"> | string
    email?: StringNullableFilter<"Tenant"> | string | null
    phone?: StringFilter<"Tenant"> | string
    idNumber?: StringNullableFilter<"Tenant"> | string | null
    propertyId?: StringFilter<"Tenant"> | string
    moveInDate?: DateTimeFilter<"Tenant"> | Date | string
    moveOutDate?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    monthlyRent?: DecimalFilter<"Tenant"> | Decimal | DecimalJsLike | number | string
    securityDeposit?: DecimalNullableFilter<"Tenant"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"Tenant"> | string | null
    ownerId?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
  }

  export type FinancialTransactionUpsertWithWhereUniqueWithoutProfileInput = {
    where: FinancialTransactionWhereUniqueInput
    update: XOR<FinancialTransactionUpdateWithoutProfileInput, FinancialTransactionUncheckedUpdateWithoutProfileInput>
    create: XOR<FinancialTransactionCreateWithoutProfileInput, FinancialTransactionUncheckedCreateWithoutProfileInput>
  }

  export type FinancialTransactionUpdateWithWhereUniqueWithoutProfileInput = {
    where: FinancialTransactionWhereUniqueInput
    data: XOR<FinancialTransactionUpdateWithoutProfileInput, FinancialTransactionUncheckedUpdateWithoutProfileInput>
  }

  export type FinancialTransactionUpdateManyWithWhereWithoutProfileInput = {
    where: FinancialTransactionScalarWhereInput
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyWithoutProfileInput>
  }

  export type FinancialTransactionScalarWhereInput = {
    AND?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
    OR?: FinancialTransactionScalarWhereInput[]
    NOT?: FinancialTransactionScalarWhereInput | FinancialTransactionScalarWhereInput[]
    id?: StringFilter<"FinancialTransaction"> | string
    type?: EnumTransactionTypeFilter<"FinancialTransaction"> | $Enums.TransactionType
    category?: EnumTransactionCategoryFilter<"FinancialTransaction"> | $Enums.TransactionCategory
    amount?: DecimalFilter<"FinancialTransaction"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"FinancialTransaction"> | Date | string
    description?: StringNullableFilter<"FinancialTransaction"> | string | null
    receiptUrl?: StringNullableFilter<"FinancialTransaction"> | string | null
    propertyId?: StringNullableFilter<"FinancialTransaction"> | string | null
    userId?: StringFilter<"FinancialTransaction"> | string
    createdAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"FinancialTransaction"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutProfileInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutProfileInput, DocumentUncheckedUpdateWithoutProfileInput>
    create: XOR<DocumentCreateWithoutProfileInput, DocumentUncheckedCreateWithoutProfileInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutProfileInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutProfileInput, DocumentUncheckedUpdateWithoutProfileInput>
  }

  export type DocumentUpdateManyWithWhereWithoutProfileInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutProfileInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    fileName?: StringFilter<"Document"> | string
    fileUrl?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    propertyId?: StringNullableFilter<"Document"> | string | null
    userId?: StringFilter<"Document"> | string
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type ProfileCreateWithoutPropertiesInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantCreateNestedManyWithoutOwnerInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutProfileInput
    documents?: DocumentCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutPropertiesInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutOwnerInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutProfileInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutPropertiesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPropertiesInput, ProfileUncheckedCreateWithoutPropertiesInput>
  }

  export type TenantCreateWithoutPropertyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProfileCreateNestedOneWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutPropertyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateOrConnectWithoutPropertyInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
  }

  export type TenantCreateManyPropertyInputEnvelope = {
    data: TenantCreateManyPropertyInput | TenantCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type FinancialTransactionCreateWithoutPropertyInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutFinancialTransactionsInput
  }

  export type FinancialTransactionUncheckedCreateWithoutPropertyInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionCreateOrConnectWithoutPropertyInput = {
    where: FinancialTransactionWhereUniqueInput
    create: XOR<FinancialTransactionCreateWithoutPropertyInput, FinancialTransactionUncheckedCreateWithoutPropertyInput>
  }

  export type FinancialTransactionCreateManyPropertyInputEnvelope = {
    data: FinancialTransactionCreateManyPropertyInput | FinancialTransactionCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutPropertyInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    uploadedAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutPropertyInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    userId: string
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutPropertyInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput>
  }

  export type DocumentCreateManyPropertyInputEnvelope = {
    data: DocumentCreateManyPropertyInput | DocumentCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutPropertiesInput = {
    update: XOR<ProfileUpdateWithoutPropertiesInput, ProfileUncheckedUpdateWithoutPropertiesInput>
    create: XOR<ProfileCreateWithoutPropertiesInput, ProfileUncheckedCreateWithoutPropertiesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPropertiesInput, ProfileUncheckedUpdateWithoutPropertiesInput>
  }

  export type ProfileUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutOwnerNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutProfileNestedInput
    documents?: DocumentUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutOwnerNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutProfileNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type TenantUpsertWithWhereUniqueWithoutPropertyInput = {
    where: TenantWhereUniqueInput
    update: XOR<TenantUpdateWithoutPropertyInput, TenantUncheckedUpdateWithoutPropertyInput>
    create: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
  }

  export type TenantUpdateWithWhereUniqueWithoutPropertyInput = {
    where: TenantWhereUniqueInput
    data: XOR<TenantUpdateWithoutPropertyInput, TenantUncheckedUpdateWithoutPropertyInput>
  }

  export type TenantUpdateManyWithWhereWithoutPropertyInput = {
    where: TenantScalarWhereInput
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyWithoutPropertyInput>
  }

  export type FinancialTransactionUpsertWithWhereUniqueWithoutPropertyInput = {
    where: FinancialTransactionWhereUniqueInput
    update: XOR<FinancialTransactionUpdateWithoutPropertyInput, FinancialTransactionUncheckedUpdateWithoutPropertyInput>
    create: XOR<FinancialTransactionCreateWithoutPropertyInput, FinancialTransactionUncheckedCreateWithoutPropertyInput>
  }

  export type FinancialTransactionUpdateWithWhereUniqueWithoutPropertyInput = {
    where: FinancialTransactionWhereUniqueInput
    data: XOR<FinancialTransactionUpdateWithoutPropertyInput, FinancialTransactionUncheckedUpdateWithoutPropertyInput>
  }

  export type FinancialTransactionUpdateManyWithWhereWithoutPropertyInput = {
    where: FinancialTransactionScalarWhereInput
    data: XOR<FinancialTransactionUpdateManyMutationInput, FinancialTransactionUncheckedUpdateManyWithoutPropertyInput>
  }

  export type DocumentUpsertWithWhereUniqueWithoutPropertyInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutPropertyInput, DocumentUncheckedUpdateWithoutPropertyInput>
    create: XOR<DocumentCreateWithoutPropertyInput, DocumentUncheckedCreateWithoutPropertyInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutPropertyInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutPropertyInput, DocumentUncheckedUpdateWithoutPropertyInput>
  }

  export type DocumentUpdateManyWithWhereWithoutPropertyInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutTenantsInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProfileCreateNestedOneWithoutPropertiesInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutTenantsInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutTenantsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput>
  }

  export type ProfileCreateWithoutTenantsInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutProfileInput
    documents?: DocumentCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutTenantsInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutProfileInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutTenantsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutTenantsInput, ProfileUncheckedCreateWithoutTenantsInput>
  }

  export type PropertyUpsertWithoutTenantsInput = {
    update: XOR<PropertyUpdateWithoutTenantsInput, PropertyUncheckedUpdateWithoutTenantsInput>
    create: XOR<PropertyCreateWithoutTenantsInput, PropertyUncheckedCreateWithoutTenantsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutTenantsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutTenantsInput, PropertyUncheckedUpdateWithoutTenantsInput>
  }

  export type PropertyUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProfileUpdateOneRequiredWithoutPropertiesNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type ProfileUpsertWithoutTenantsInput = {
    update: XOR<ProfileUpdateWithoutTenantsInput, ProfileUncheckedUpdateWithoutTenantsInput>
    create: XOR<ProfileCreateWithoutTenantsInput, ProfileUncheckedCreateWithoutTenantsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutTenantsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutTenantsInput, ProfileUncheckedUpdateWithoutTenantsInput>
  }

  export type ProfileUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutProfileNestedInput
    documents?: DocumentUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutProfileNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PropertyCreateWithoutFinancialTransactionsInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProfileCreateNestedOneWithoutPropertiesInput
    tenants?: TenantCreateNestedManyWithoutPropertyInput
    documents?: DocumentCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutFinancialTransactionsInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutFinancialTransactionsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutFinancialTransactionsInput, PropertyUncheckedCreateWithoutFinancialTransactionsInput>
  }

  export type ProfileCreateWithoutFinancialTransactionsInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    tenants?: TenantCreateNestedManyWithoutOwnerInput
    documents?: DocumentCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutFinancialTransactionsInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    tenants?: TenantUncheckedCreateNestedManyWithoutOwnerInput
    documents?: DocumentUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutFinancialTransactionsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutFinancialTransactionsInput, ProfileUncheckedCreateWithoutFinancialTransactionsInput>
  }

  export type PropertyUpsertWithoutFinancialTransactionsInput = {
    update: XOR<PropertyUpdateWithoutFinancialTransactionsInput, PropertyUncheckedUpdateWithoutFinancialTransactionsInput>
    create: XOR<PropertyCreateWithoutFinancialTransactionsInput, PropertyUncheckedCreateWithoutFinancialTransactionsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutFinancialTransactionsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutFinancialTransactionsInput, PropertyUncheckedUpdateWithoutFinancialTransactionsInput>
  }

  export type PropertyUpdateWithoutFinancialTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProfileUpdateOneRequiredWithoutPropertiesNestedInput
    tenants?: TenantUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutFinancialTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type ProfileUpsertWithoutFinancialTransactionsInput = {
    update: XOR<ProfileUpdateWithoutFinancialTransactionsInput, ProfileUncheckedUpdateWithoutFinancialTransactionsInput>
    create: XOR<ProfileCreateWithoutFinancialTransactionsInput, ProfileUncheckedCreateWithoutFinancialTransactionsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutFinancialTransactionsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutFinancialTransactionsInput, ProfileUncheckedUpdateWithoutFinancialTransactionsInput>
  }

  export type ProfileUpdateWithoutFinancialTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    tenants?: TenantUpdateManyWithoutOwnerNestedInput
    documents?: DocumentUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutFinancialTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutOwnerNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PropertyCreateWithoutDocumentsInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: ProfileCreateNestedOneWithoutPropertiesInput
    tenants?: TenantCreateNestedManyWithoutPropertyInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutDocumentsInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenants?: TenantUncheckedCreateNestedManyWithoutPropertyInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutDocumentsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutDocumentsInput, PropertyUncheckedCreateWithoutDocumentsInput>
  }

  export type ProfileCreateWithoutDocumentsInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    tenants?: TenantCreateNestedManyWithoutOwnerInput
    financialTransactions?: FinancialTransactionCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutDocumentsInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    tenants?: TenantUncheckedCreateNestedManyWithoutOwnerInput
    financialTransactions?: FinancialTransactionUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutDocumentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutDocumentsInput, ProfileUncheckedCreateWithoutDocumentsInput>
  }

  export type PropertyUpsertWithoutDocumentsInput = {
    update: XOR<PropertyUpdateWithoutDocumentsInput, PropertyUncheckedUpdateWithoutDocumentsInput>
    create: XOR<PropertyCreateWithoutDocumentsInput, PropertyUncheckedCreateWithoutDocumentsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutDocumentsInput, PropertyUncheckedUpdateWithoutDocumentsInput>
  }

  export type PropertyUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProfileUpdateOneRequiredWithoutPropertiesNestedInput
    tenants?: TenantUpdateManyWithoutPropertyNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertyNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type ProfileUpsertWithoutDocumentsInput = {
    update: XOR<ProfileUpdateWithoutDocumentsInput, ProfileUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ProfileCreateWithoutDocumentsInput, ProfileUncheckedCreateWithoutDocumentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutDocumentsInput, ProfileUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProfileUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    tenants?: TenantUpdateManyWithoutOwnerNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    tenants?: TenantUncheckedUpdateManyWithoutOwnerNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type PropertyCreateManyOwnerInput = {
    id?: string
    type: $Enums.PropertyType
    tags?: PropertyCreatetagsInput | $Enums.PropertyTag[]
    address: string
    city: string
    country?: string
    bedrooms?: number | null
    bathrooms?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    floor?: number | null
    yearBuilt?: number | null
    purchaseDate?: Date | string | null
    purchasePrice: Decimal | DecimalJsLike | number | string
    monthlyRent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    features?: PropertyCreatefeaturesInput | string[]
    images?: PropertyCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantCreateManyOwnerInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    propertyId: string
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionCreateManyProfileInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    propertyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyProfileInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    propertyId?: string | null
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateManyWithoutPropertyNestedInput
    financialTransactions?: FinancialTransactionUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUncheckedUpdateManyWithoutPropertyNestedInput
    financialTransactions?: FinancialTransactionUncheckedUpdateManyWithoutPropertyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    tags?: PropertyUpdatetagsInput | $Enums.PropertyTag[]
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchasePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyRent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: PropertyUpdatefeaturesInput | string[]
    images?: PropertyUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutFinancialTransactionsNestedInput
  }

  export type FinancialTransactionUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateManyPropertyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone: string
    idNumber?: string | null
    moveInDate: Date | string
    moveOutDate?: Date | string | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    securityDeposit?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialTransactionCreateManyPropertyInput = {
    id?: string
    type: $Enums.TransactionType
    category: $Enums.TransactionCategory
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    description?: string | null
    receiptUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyPropertyInput = {
    id?: string
    type: $Enums.DocumentType
    title: string
    description?: string | null
    fileName: string
    fileUrl: string
    mimeType: string
    fileSize: number
    userId: string
    uploadedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProfileUpdateOneRequiredWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    moveOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    securityDeposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutFinancialTransactionsNestedInput
  }

  export type FinancialTransactionUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialTransactionUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}