import MoviesApiHelper from "../Helpers/MoviesApiHelper";

export default class Tv
{
    constructor(tv)
    {
        this.id = tv.id;
        this.name = tv.name;
        this.description = tv.overview;
        this.poster = "https://image.tmdb.org/t/p/w500/" + tv.poster_path;
        this.posterWide = "https://image.tmdb.org/t/p/w500/" + tv.backdrop_path;
        this.genres = tv.genre_ids.map((id)=>MoviesApiHelper.GENRES.get(id));
        this.releaseDate = tv.first_air_date;
        this.rate = tv.vote_average;
        this.isAdult = tv.adult;
        this.language = tv.original_language;
    }
}