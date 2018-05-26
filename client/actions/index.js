import axios from 'axios';

export const CREATE_USER = 'create_user'

export function createUser (values, callback){
    const request = axios.post('/api/users', values).then (()=> callback());
    
    return {
        type:CREATE_USER,
        payload: request
    }
}
