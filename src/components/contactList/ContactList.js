import DB from "../../DB";
import Contact from"../contact/Contact";
import getTemplate from"./template";

export default class contactList{
    constructor(data){
        this.domElt = document.querySelector(data.elt);
        this.listDomElt = null;
        DB.setApiURL(data.apiURL);
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
        this.listDomElt = this.domElt.querySelector(".tr");
        this.contacts.forEach((contact) => contact.render(this.listDomElt))
        this.initEvents();
    }
    async addContact(data){
        const contact= await DB.create(data);
        const newContact = new Contact(contact);
        this.contacts.push(newContact);
        newContact.render(this.listDomElt);
    }
    initEvents(){
        this.domElt.querySelector(".new-contact").addEventListner("submit", (e)=>{
            this.addContact(e.target.value);
            e.target.value = "";
        })
    }
}