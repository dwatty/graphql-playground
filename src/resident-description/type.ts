import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType} from 'graphql'

/**
 * The base description of a Resident description
 */
export type ResidentDescriptionType = {
    animal: string;
    personality: string;
};

/**
 * The Resident Description GraphQL object
 */
export const ResidentDescription = new GraphQLObjectType({
    name: 'ResidentDescription',
    description: 'Represents a residents description properties',
    fields: () => ({
        animal: {
            type: GraphQLString,
            description: 'The type of animal the resident is'
        },
        personality:{
            type: GraphQLString,
            description: 'The personality of the resident'
        }
    })
});

/**
 * The Resident Description Input GraphQL object
 */
export const ResidentDescriptionInput = new GraphQLInputObjectType({
    name: 'ResidentDescriptionInput',
    description: 'Represents a residents description properties',
    fields: () => ({
        animal: {
            type: GraphQLString,
            description: 'The type of animal the resident is'
        },
        personality:{
            type: GraphQLString,
            description: 'The personality of the resident'
        }
    })
});

