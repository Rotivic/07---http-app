import { User } from "../models/user";


/**
 * 
 * @param {User} user 
 */
export const userModelToLocalHost = ( user ) => {

    const {
        avatar,
        balance,
        firstName,
        lastName,
        gender,
        id,
        isActive,
    } = user

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    }

}