import axios from 'axios';

const BASE_URL = 'https://route-egypt-api.herokuapp.com/';



export default class AuthApiHelper 
{


    static async signup(userJsonObject) 
    {
        let {data} = await axios.post(
            (BASE_URL + 'signup'),
            userJsonObject,
        );

        return data;
    }

    static async login(user) 
    {
        let {data} = await axios.post(
            (BASE_URL + 'signin'),
            user,
        );

        return data;
    }


}




