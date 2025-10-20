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
    const template = document.createElement("template");
    template.innerHTML = getTemplate(this).trim(); 
    const row = template.content.firstElementChild;
    row.dataset.id = this.id;

    el.append(row);  
    this.domElt = row;
    this.initEvent();
  }

  initEvent(){
    this.domElt.querySelector(".destroy")
      .addEventListener("click", (e)=> window.ContactList.deleteOneById(this.id));
  }
}
