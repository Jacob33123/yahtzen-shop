/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query latestBeats($first: Int!) {\n    products(\n      first: $first\n      channel: \"default-channel\"\n      where: { productType: { eq: \"UHJvZHVjdFR5cGU6MQ==\" } }\n    ) {\n      edges {\n        node {\n          id\n          name\n          description\n          variants {\n            id\n            name\n            quantityAvailable\n          }\n          metadata {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n": types.LatestBeatsDocument,
    "\n  query cartProducts($ids: [ID!], $first: Int!) {\n    products(where: { ids: $ids }, channel: \"default-channel\", first: $first) {\n      edges {\n        node {\n          id\n          variants {\n            id\n            name\n            pricing {\n              price {\n                gross {\n                  amount\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.CartProductsDocument,
    "\n    query productInfo($trackId: ID!) {\n      product(id: $trackId) {\n        id\n        name\n        variants {\n          id\n          name\n          quantityAvailable\n          pricing {\n            price {\n              gross {\n                amount\n              }\n            }\n          }\n        }\n      }\n    }\n  ": types.ProductInfoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query latestBeats($first: Int!) {\n    products(\n      first: $first\n      channel: \"default-channel\"\n      where: { productType: { eq: \"UHJvZHVjdFR5cGU6MQ==\" } }\n    ) {\n      edges {\n        node {\n          id\n          name\n          description\n          variants {\n            id\n            name\n            quantityAvailable\n          }\n          metadata {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query latestBeats($first: Int!) {\n    products(\n      first: $first\n      channel: \"default-channel\"\n      where: { productType: { eq: \"UHJvZHVjdFR5cGU6MQ==\" } }\n    ) {\n      edges {\n        node {\n          id\n          name\n          description\n          variants {\n            id\n            name\n            quantityAvailable\n          }\n          metadata {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query cartProducts($ids: [ID!], $first: Int!) {\n    products(where: { ids: $ids }, channel: \"default-channel\", first: $first) {\n      edges {\n        node {\n          id\n          variants {\n            id\n            name\n            pricing {\n              price {\n                gross {\n                  amount\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query cartProducts($ids: [ID!], $first: Int!) {\n    products(where: { ids: $ids }, channel: \"default-channel\", first: $first) {\n      edges {\n        node {\n          id\n          variants {\n            id\n            name\n            pricing {\n              price {\n                gross {\n                  amount\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query productInfo($trackId: ID!) {\n      product(id: $trackId) {\n        id\n        name\n        variants {\n          id\n          name\n          quantityAvailable\n          pricing {\n            price {\n              gross {\n                amount\n              }\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query productInfo($trackId: ID!) {\n      product(id: $trackId) {\n        id\n        name\n        variants {\n          id\n          name\n          quantityAvailable\n          pricing {\n            price {\n              gross {\n                amount\n              }\n            }\n          }\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;