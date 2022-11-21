
export default class PersonDetails
{
    constructor(person)
    {
        this.id = person.id;
        this.name = person.name;
        this.biography = person.biography;
        this.profilePic = "https://image.tmdb.org/t/p/w500/" + person.profile_path;
        this.birthay = person.birthday;
        this.placeOfBirth = person.place_of_birth;
        this.popularity = person.popularity;
    }
}