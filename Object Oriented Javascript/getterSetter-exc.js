class UserProfile {
  constructor(userName, email, birthdate) {
    if (userName.length === 0) {
      console.log("cannot set empty string to username");
    } else {
      this.userName = userName;
    }

    if (email.includes("@")) {
      this.email = email;
    } else {
      console.log("enter a valid email address");
    }

    let dateObj = new Date(birthdate);
    console.log(dateObj);
    if (isNaN(dateObj)) {
      console.log("enter valid date in yyyy/mm/dd format");
    } else {
      this.birthdate = birthdate;
    }
  }

  get validatedDetails() {
    console.log(this.userName, this.email, this.birthdate);
  }

  set valName(name) {
    if (name.length === 0) {
      console.log("cannot set empty string to username");
    } else {
      this.userName = name;
    }
  }

  set valEmail(emailaddr) {
    if (emailaddr.includes("@")) {
      this.email = emailaddr;
    } else {
      console.log("enter a valid email address");
    }
  }

  set valBirthdate(newBirthdate) {
    let dateObj = new Date(newBirthdate);
    console.log(dateObj);
    if (isNaN(dateObj)) {
      console.log("enter valid date in yyyy/mm/dd format");
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
