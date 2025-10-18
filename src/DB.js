export default class DB{
    static setApiURL(data){
        this.apiURL = data;

    }
    static async findAll(){
        const responce = await fetch(this.apiURL + "contacts");
        return responce.json();
    }
}