import MoviesApiHelper from "../Helpers/MoviesApiHelper";

export default class Movie
{
    constructor(movie)
    {
        this.id = movie.id;
        this.title = movie.title;
        this.description = movie.overview;
        this.poster = movie.poster_path;
        this.posterWide = movie.backdrop_path;
        this.genres = movie.genre_ids.map((id)=>MoviesApiHelper.GENRES.get(id));
        this.releaseDate = movie.release_date;
        this.rate = movie.vote_average;
        this.isAdult = movie.adult;
        this.language = movie.original_language;
    }
}