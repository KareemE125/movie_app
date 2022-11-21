import MoviesApiHelper from "../Helpers/MoviesApiHelper";

export default class Person
{
    constructor(person)
    {
        this.id = person.id;
        this.name = person.name;
        this.profilePic = "https://image.tmdb.org/t/p/w500/" + person.profile_path;
        this.popularity = person.popularity;
        this.knownFor = person.known_for.map((elem)=>{
            return{
                adult: elem.adult,
                id: elem.id,
                name: elem.name,
                title: elem.title,
                original_language: elem.original_language,
                overview: elem.overview,
                poster_path: 'https://image.tmdb.org/t/p/w500/' + elem.poster_path,
                media_type: elem.media_type,
                genre_ids: elem.genre_ids.map((id)=>MoviesApiHelper.GENRES.get(id)),
                popularity: elem.popularity,
                vote_average: elem.vote_average,
            }
        });
    }
}