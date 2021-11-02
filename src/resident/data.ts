import { getResidentData, setResidentData } from "../utils"
import { ResidentType } from './type';

/**
 * Get all the residents that in the DB
 * @returns An array of residents
 */
export const getResidents = () : ResidentType[] => {
    const residents = getResidentData();
    return residents
}

/**
 * Create a new residen tin the DB
 * @param newResident An object representing the new resident to create
 * @returns Returns the newly created resident with the new ID
 */
export const createResident = (newResident : ResidentType) => {
    const residents = getResidents();

    const maxId = residents[residents.length-1].id;    
    newResident.id = maxId + 1;

    residents.push(newResident);
    setResidentData(residents);

    return newResident;
}