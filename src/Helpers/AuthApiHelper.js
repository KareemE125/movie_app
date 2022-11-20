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

        console.log(data.message)
        return data;
    }

    static async login(user) 
    {
        console.log(user);
        let {data} = await axios.post(
            (BASE_URL + 'signin'),
            user,
        );

        console.log(data.message)
        return data;
    }


}




