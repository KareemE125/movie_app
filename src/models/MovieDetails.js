
export default class MovieDetails
{
    constructor(movie)
    {
        this.id = movie.id;
        this.title = movie.original_title;
        this.description = movie.overview;
        this.poster = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
        this.posterWide = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
        this.genres = movie.genres.map(({name})=>name);
        this.releaseDate = movie.release_date;
        this.rate = movie.vote_average;
        this.isAdult = movie.adult;
        this.language = movie.original_language;
    }
}