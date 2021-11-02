import { GraphQLFieldConfig, GraphQLObjectType } from 'graphql'
import { createResident } from './data'
import { Resident, ResidentInput } from './type'

/**
 * The create Resident operation
 */
const CreateResident: GraphQLFieldConfig<any, any, any> = {
    type: Resident,
    description: Resident.description,
    args: {
        input: {
            type: ResidentInput,
            description: ResidentInput.description
        }
    },
    resolve: (parent, args) => {
        const payload = args.input
        return createResident(payload);
    }
}

/**
 * The root Resident mutation
 */
export const ResidentMutation = new GraphQLObjectType({
    name: 'ResidentMutation',
    description: 'The resident base mutation',
    fields: {
        create: CreateResident
    }
})