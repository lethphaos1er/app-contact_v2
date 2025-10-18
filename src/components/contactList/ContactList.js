import DB from "../../DB";
import Contact from"../contact/Contact";
import getTemplate from"./template";

export default class contactList{
    constructor(data){
        this.domElt = document.querySelector(data.elt);
        data.setApiURL(data.apiURL);
        this.contacts =[];
        this.loadContacts();
    }

    async loadContacts(){
        const contacts = await DB.findAll();
        this.contacts = contacts.map(contact => new Contact(contact));
        this.render();
    }

    render(){
        this.domElt.innerHTML = getTemplate();
        this.contacts.forEach(contact => contact.render(this.domElt.querySelector(".tr")))
    }
}