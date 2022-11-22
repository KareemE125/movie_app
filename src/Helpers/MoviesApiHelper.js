import axios from 'axios';
import MovieDetails from '../models/MovieDetails';
import Movie from '../models/Movie';
import PersonDetails from '../models/PersonDetails';
import Person from '../models/Person';
import TvDetails from '../models/TvDetails';
import Tv from '../models/Tv';

const API_KEY = '596a075b908fc028f46b83b6af60c5dc';

export default class MoviesApiHelper {
    static GENRES = new Map();
    static MEDIA_TYPE = {
        Movie: 'movie',
        Person: 'person',
        Tv: 'tv'
    };

    static async getTrendings(mediaType) {
        let response = [];

        await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${API_KEY}`)
            .then((value) => response = value)
            .catch((error) => console.log("ERROR: " + error));

        if (response.data.results === undefined) { return []; }

        if (mediaType === this.MEDIA_TYPE.Movie) { return response.data.results.map((movie) => new Movie(movie)); }
        else if (mediaType === this.MEDIA_TYPE.Person) { return response.data.results.map((person) => new Person(person)); }
        else if (mediaType === this.MEDIA_TYPE.Tv) { return response.data.results.map((tv) => new Tv(tv)); }
        else { return null; }

    }

    static async SetConstants() {
        // uncomment to apply 2 second delay to see the loading action 
        // await new Promise((resolve, reject) => setTimeout(resolve, 2000)).then(()=>console.log("start calling api....."));

        await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then((value) => {
                value.data.genres.forEach((genre) => {
                    this.GENRES.set(genre.id, genre.name);
                });
            })
            .catch((error) => {
                console.log("ERROR: " + error);
            });


        return true;
    }

    /// GET Details [Movie , Person , TV]
    static async getMovieDetails(id) {
        let response = [];

        await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then((value) => response = value)
            .catch((error) => console.log("ERROR: " + error));

        if (response.data === undefined) { return null; }

        return new MovieDetails(response.data);
    }

    static async getPersonDetails(id) {
        let response = [];

        await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`)
            .then((value) => response = value)
            .catch((error) => console.log("ERROR: " + error));

        if (response.data === undefined) { return null; }

        return new PersonDetails(response.data);
    }

    static async getTvDetails(id) {
        let response = [];

        await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
            .then((value) => response = value)
            .catch((error) => console.log("ERROR: " + error));

        if (response.data === undefined) { return null; }

        return new TvDetails(response.data);
    }

    //Favorites
    // static async getAndSetUserFavorites() {
    //     await axios.get('https://route-egypt-api.herokuapp.com/getFavorites', {
    //         headers: {
    //             'token': User.token
    //         }
    //     }).then((response) => { User.FavoritesList = response.data.Favorites; });
    // }

    // static async addToFavorites(item, refreshFunc) 
    // {
    //     let tempItem = {
    //         movieName: item.title,
    //         imgUrl: item.poster,
    //         userID: User.id,
    //         movieID: item.id,
    //         token: User.token,
    //     };

    //     if(!User.FavoritesList){User.FavoritesList = []; }
    //     const tempItemIndex = User.FavoritesList.length;
    //     User.FavoritesList.push({movieName: item.name, imgUrl: item.imgUrl, movieID: item.id})
    //     refreshFunc();

    //     const response = await axios.post('https://route-egypt-api.herokuapp.com/addToFavorites', tempItem);

    //     if(response.data.message !== 'success')
    //     {
    //         User.FavoritesList.splice(tempItemIndex,1);
    //         refreshFunc();
    //     }
    // }

}