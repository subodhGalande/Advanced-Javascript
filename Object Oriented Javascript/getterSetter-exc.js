class UserProfile {
  constructor(userName, email, birthdate) {
    if (userName.length === 0) {
      throw new Error(console.error("invalid name"));
    } else {
      this.userName = userName;
    }

    if (email.includes("@")) {
      this.email = email;
    } else {
      throw new Error(console.error("invalid email"));
    }

    let dateObj = new Date(birthdate);
    console.log(dateObj);
    if (isNaN(dateObj)) {
      throw new Error(console.error("invalid date"));
    } else {
      this.birthdate = birthdate;
    }
  }

  get validatedDetails() {
    console.log(this.userName, this.email, this.birthdate);
  }

  set valName(name) {
    if (name.length === 0) {
      throw new Error(console.error("invalid name"));
    } else {
      this.userName = name;
    }
  }

  set valEmail(emailaddr) {
    if (emailaddr.includes("@")) {
      this.email = emailaddr;
    } else {
      throw new Error(console.error("invalid email"));
    }
  }

  set valBirthdate(newBirthdate) {
    let dateObj = new Date(newBirthdate);
    console.log(dateObj);
    if (isNaN(dateObj)) {
      throw new Error(console.error("invalid date"));
    } else {
      this.birthdate = newBirthdate;
    }
  }
}

const User = new UserProfile("subodh", "subodh@gmail.com", "2000/08/21");

User.validatedDetails;
User.valName = "Saloni";
User.valEmail = "abc@gmail.com";
User.valBirthdate = "2000/02/07";
User.validatedDetails;
