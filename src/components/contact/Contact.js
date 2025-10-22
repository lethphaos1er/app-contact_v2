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
  async update(data){
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email= data.email;

    this.domElt.classList.remove('editing');
    return await DB.updateOneById({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
    });
  }

  initEvent(){
    this.domElt.querySelector(".destroy")
      .addEventListener("click", (e)=> window.ContactList.deleteOneById(this.id));
    this.domElt.querySelector(".btn-edit")
    
      .addEventListener("click", (e)=> this.domElt.classList.add('editing'));

    this.domElt.querySelector(".btn-check")
      .addEventListener("click", (e)=> this.update({
        firstname : this.domElt.querySelector('.input-firstname').value,
        lastname : this.domElt.querySelector('.input-lastname').value,
        email : this.domElt.querySelector('.input-email').value,
      }));
  }
}
