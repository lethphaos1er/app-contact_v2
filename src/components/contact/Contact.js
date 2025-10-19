import getTemplate from "./template";

export default class Contact{
    constructor(data){
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
        this.created_at = data.created_at;
    }
    render(el){
        const template = getTemplate();
        el= appened(template);
    }
}