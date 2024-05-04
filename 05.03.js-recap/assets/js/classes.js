export class Product {
  constructor(title, price, description, category, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.id = `${Date.now()}`;
  }
}

export class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.id = `${Date.now()}`;
    this.favorites = [];
    this.basket = [];
  }
}
