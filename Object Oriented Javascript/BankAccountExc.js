//create a bankaccount class with basic deposit and witdraw methods

class BankAccount {
  constructor(accNumber, accName, balance = 0) {
    this.accNumber = accNumber;
    this.accName = accName;
    this.balance = balance;
  }

  deposit = (amt) => {
    if (amt > 0) {
      this.balance += amt;
      console.log(`deposited ${amt} and new balance is ${this.balance}`);
    } else {
      console.log("negative ammount cannot be deposited");
    }
  };

  withdrawl = (amt) => {
    if (amt > this.balance) {
      console.log("insufficient funds cannot withdraw");
    } else {
      this.balance -= amt;
      console.log(`you withdrew ${amt} and new balance is ${this.balance}`);
    }
  };
}

const cust = new BankAccount(1245, "blah blah", 100);
cust.deposit(100);
cust.withdrawl(23);
