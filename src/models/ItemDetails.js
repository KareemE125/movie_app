
export default class ItemDetails
{
    constructor(item)
    {
        this.id = item.id;
        this.title = item.original_title;
        this.description = item.overview;
        this.poster = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
        this.posterWide = "https://image.tmdb.org/t/p/w500/" + item.backdrop_path;
        this.genres = item.genres.map(({name})=>name);
        this.releaseDate = item.release_date;
        this.rate = item.vote_average;
        this.isAdult = item.adult;
        this.language = item.original_language;
    }
}