export default class DB {
  static apiURL = "";

  static setApiURL(url) {
    this.apiURL = url;
  }

  static async findAll() {
    const response = await fetch(this.apiURL + "contacts");
    return response.json();
  }

  static async create(data) {
    const response = await fetch(this.apiURL + "contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        created_at: Date.now(),
      }),
  });
  return response.json();
  }


  static async deleteOneById(data) {
    const response = await fetch(this.apiURL + "contacts/" + data, {
      method: "DELETE",
    });
    return response.json();
  }

  static async updatOneById(data) {
    const response = await fetch(this.apiURL + "contacts/" + data.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
