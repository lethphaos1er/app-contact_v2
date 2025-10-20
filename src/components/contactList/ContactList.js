import DB from "../../DB";
import Contact from "../contact/Contact";
import getTemplate from "./template";
import getAddTemplate from "../add/template";

export default class ContactList {
  constructor(data) {
    this.domElt = document.querySelector(data.elt);
    this.listDomElt = null;
    DB.setApiURL(data.apiURL);
    this.contacts = [];
    this.loadContacts();
  }

  async loadContacts() {
    const contacts = await DB.findAll();
    this.contacts = contacts.map((c) => new Contact(c));
    this.render();
  }

  render() {
    this.domElt.innerHTML = getTemplate();

    // container flex (row-reverse) qui reçoit la section et on APPEND l’aside
    const container = this.domElt.querySelector(".layout");
    const t = document.createElement("template");
    t.innerHTML = getAddTemplate().trim();   // contient déjà <aside class="w-1/3 ...">
    container.append(t.content.firstElementChild); // <- APPEND comme demandé

    // tbody pour les <tr>
    this.listDomElt = this.domElt.querySelector(".tr");

    // rendu des items
    this.contacts.forEach((c) => c.render(this.listDomElt));

    this.initEvents();
  }

  async addContact(data) {
    const created = await DB.create(data);
    const item = new Contact(created);
    this.contacts.push(item);
    item.render(this.listDomElt);
  }

  async deleteOneById(id) {
    await DB.deleteOneById(id);
    this.contacts.splice(this.contacts.findIndex((c) => c.id == id), 1);
    this.domElt.querySelector(`[data-id='${id}']`).remove();
  }

  initEvents() {
    const btn = this.domElt.querySelector(".new-contact");
    const fn  = this.domElt.querySelector('input[name="firstname"]');
    const ln  = this.domElt.querySelector('input[name="lastname"]');
    const em  = this.domElt.querySelector('input[name="email"]');

    btn.addEventListener("click", () => {
      this.addContact({ firstname: fn.value, lastname: ln.value, email: em.value });
      fn.value = ""; ln.value = ""; em.value = "";
    });
  }
}
