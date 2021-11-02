import {GraphQLFieldConfig, GraphQLList, GraphQLObjectType} from 'graphql'
import { getResidents } from './data';
import { Resident } from './type';

/**
 * The list Resident operation
 */
const ListResidents: GraphQLFieldConfig<any, any, any> = {
    type: GraphQLList(Resident),
    description: Resident.description,
    resolve: () => {
        return getResidents()
    }
}

/**
 * The root Resident query
 */
export const ResidentQuery = new GraphQLObjectType({
    name: 'ResidentQuery',
    description: 'The resident base query',
    fields: {
        list: ListResidents
    }
})