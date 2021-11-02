import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { ResidentMutation } from './resident/mutation';
import { ResidentQuery } from './resident/query';

/**
 * The root Query definition
 */
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'The base query',
  fields: {
      resident: {
          type: ResidentQuery,
          description: ResidentQuery.description,
          resolve: () => { return {} }
      }
  }
});

/**
 * The root Mutation definition
 */
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The base mutation',
  fields: {
      resident: {
          type: ResidentMutation,
          description: ResidentMutation.description,
          resolve: () => { return {} }
      }
  }
})

/**
 * Our Scheme definition
 */
export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
