import MoviesApiHelper from "../Helpers/MoviesApiHelper";

export default  class User
{
    static token;
    static firstName;
    static lastName;
    static email;
    static age;

    // key structure: "id=type" ,  example ==> "8923=movie" 
    static FavoritesList = null;
    

    static setUserData(tokens,decodeResult)
    {
        User.token = tokens;
        User.id = decodeResult._id;
        User.firstName = decodeResult.first_name;
        User.lastName = decodeResult.last_name;
        User.email = decodeResult.email;
        User.age = decodeResult.age;
    }

    static addToFavorites(item,refreshFunc)
    {
        MoviesApiHelper.addToFavorites(item,refreshFunc)
    }

    static removeFromFavorites(item,refreshFunc)
    {
        const index = User.FavoritesList.findIndex((elem)=> elem.id === item.id);
        User.FavoritesList.splice(index,1);
        refreshFunc();
    }

    static clear()
    {
        User.token = null;
        User.id = null;
        User.firstName = null;
        User.lastName = null;
        User.email = null;
        User.age = null;
        User.FavoritesList.clear();
    }



}