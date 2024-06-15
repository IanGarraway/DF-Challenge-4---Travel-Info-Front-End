import axios from "axios";

export default class FavouritesService{

    static async getFavourites() {
        try {
            const response = await axios.get(`http://localhost:3000/favourites`, { withCredentials: true })
            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
            else {
                throw new Error(response.message);
            }
        } catch (e) {
            console.error(e.message);
            return e;
        }
    }

    static async add(destination) {
        try {
            const response = await axios.post(`http://localhost:3000/addfavourite`, {
                "name" : destination
            }, { withCredentials: true })
            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
            else {
                throw new Error(response.message);
            }
        } catch (e) {
            console.error(e.message);
            return e;
        }
    }
    
}