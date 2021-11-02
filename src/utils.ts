import * as fs from 'fs';
import { ResidentType } from './resident/type';

/**
 * Read from the local file and return the residents as an array
 * @returns An array of residents read from the file
 */
export const getResidentData = () => {
    const dbFile = fs.readFileSync(
        process.env.DB_FILE_PATH,
        'utf8'
    );
    
    if(dbFile && dbFile.length > 0) {
        return JSON.parse(dbFile) as ResidentType[];
    }

    return [];
}

/**
 * Stringifys an array of Residents and saves to the DB file
 * @param file The string array of residents to save
 */
export const setResidentData = (file : ResidentType[]) => {

    const serialized = JSON.stringify(file);
    const dbFile = fs.writeFileSync(
        process.env.DB_FILE_PATH,
        serialized
    );

}