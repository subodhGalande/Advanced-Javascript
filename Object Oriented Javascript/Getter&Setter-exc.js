class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  set fullName(newFullName) {
    let [first, last] = newFullName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

const username = new User("subodh", "galande");

username.fullName;
username.fullName = "saloni chouhan";
username.fullName;
