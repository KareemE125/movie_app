export default class userFormModel {
    constructor(first_name, last_name, email, password, age) 
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.age = age;
    }

    mapToJSON(){
        return{ 
            first_name:this.first_name, 
            last_name:this.last_name, 
            email:this.email, 
            password:this.password, 
            age:this.age 
        };
    }
}