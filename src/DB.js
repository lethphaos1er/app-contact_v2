export default class DB{
    static setApiURL(data){
        this.apiURL = data;

    }
    static async findAll(){
        const responce = await fetch(this.apiURL + "contacts");
        return responce.json();
    }
    
    static async create(data){
        const responce = await fetch(this.apiURL + "contacts",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({
                content: data,
                crated_at: Date.now()
            }),
        });
        return responce.json();
    }
}