import { 
    GraphQLInputObjectType, 
    GraphQLID, 
    GraphQLList, 
    GraphQLNonNull, 
    GraphQLObjectType, 
    GraphQLString
} from 'graphql'
import { 
    ResidentDescription, 
    ResidentDescriptionInput, 
    ResidentDescriptionType
} from '../resident-description/type'

/**
 * The base description of a Resident
 */
export type ResidentType = {
    id: number
    name: string
    avatar: string
    description: ResidentDescriptionType
    notes?: string[]
}

/**
 * The Resident GraphQL object
 */
export const Resident = new GraphQLObjectType({
    name: 'Resident',
    description: 'Represents a resident in Animal Crossing',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'The unique user id'
        },
        name: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The resident name'
        },
        avatar: {
            type: GraphQLString,
            description: 'The resident avatar filename'
        },
        description: {
            type: ResidentDescription,
            description: 'The resident description'
        },
        notes: {
            type: GraphQLList(GraphQLString),
            description: 'Random notes about the resident'
        }
    })
});

/**
 * The Resident Input GraphQL object
 */
export const ResidentInput = new GraphQLInputObjectType({
    name: 'ResidentInput',
    description: 'Resident create type',
    fields: {
        name: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The resident name'
        },
        avatar: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The resident avatar'
        },
        description: {
            type: ResidentDescriptionInput,
            description: 'The residnet description'
        },
        notes: {
            type: GraphQLList(GraphQLString),
            description: 'Random notes about the resident'
        }
    }
});