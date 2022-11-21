
export default class TvDetails
{
    constructor(tv)
    {
        this.id = tv.id;
        this.title = tv.original_name;
        this.website = tv.homepage;
        this.description = tv.overview;
        this.numSeasons = tv.seasons.length;
        this.poster = "https://image.tmdb.org/t/p/w500/" + tv.poster_path;
        this.posterWide = "https://image.tmdb.org/t/p/w500/" + tv.backdrop_path;
        this.genres = tv.genres.map(({name})=>name);
        this.lastAirDate = tv.last_air_date;
        this.rate = tv.vote_average;
        this.isAdult = tv.adult;
        this.language = tv.original_language;
    }
}