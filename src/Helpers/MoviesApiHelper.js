import axios from 'axios';
import Movie from '../models/Movie';

const API_KEY = '596a075b908fc028f46b83b6af60c5dc';

export default class MoviesApiHelper {
    static GENRES = new Map();

    static async getTrendings() {
        let response = [];

        await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
            .then((value) => response = value)
            .catch((error) => console.log("ERROR: " + error));

        if (response.data.results === undefined) { return []; }

        let movies = response.data.results.map((movie) => new Movie(movie));
        return movies;
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


}