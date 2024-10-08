import axios, { Axios } from "axios";

export default class AccountService {

    static async login({ username, password }) {
        try {
            const response = await axios.post(`http://localhost:3000/login`, {
                "username": username,
                "password": password
            }, {
                withCredentials: true
            });            
            return response;
        }
        catch (e) {
            console.error('Error logging in', e);
            throw e;
        }
    
    }

    static async logout() {
        try {
            const response = await axios.post(`http://localhost:3000/logout`, {},               
            {
                withCredentials: true
            });            
            return response;
        }
        catch (e) {
            console.error('Error logging out', e);
            throw e;
        }
    
    }

    static async newAccount(username, name, email, password) {
        try {
            const response = await axios.post(`http://localhost:3000/newuser`, {
                "username": username,
                "password": password,
                "email": email,
                "name": name
            });
            
            return response;
        } catch (e){
            console.error('Error creating new account:', e);
            throw e;
        }
    }
    
}

