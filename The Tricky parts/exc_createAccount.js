createAccount = (pin, initDeposit) => {
  let currentPin = pin;
  let amount = initDeposit;

  return {
    checkBalance: function (currentPin) {
      if (currentPin === pin) {
        console.log(amount);
        return amount;
      } else {
        console.log("Invalid pin");
        return "invalid pin";
      }
    },
    deposit: function (pin, depAmount) {
      if (currentPin === pin) {
        amount += depAmount;
        console.log(amount);
        return amount;
      } else {
        console.log("Invalid Pin");
        return "invalid pin";
      }
    },

    withdraw: function (pin, withAmount) {
      if (currentPin === pin) {
        if (withAmount < amount) {
          amount -= withAmount;
          console.log(amount);
          return amount;
        } else {
          console.log("amount entered is insufficient");
          return "amount entered is insufficient";
        }
      } else {
        console.log("Invalid Pin");
        return "invalid pin";
      }
    },

    changePin: function (pin, newPin) {
      if (pin === currentPin) {
        currentPin = newPin;
        console.log("pin changed successfully");
        return "pin changed";
      } else {
        console.log("wrong pin entered");
        return "wrong pin";
      }
    },
  };
};

let account = createAccount("1234", 100);

account.checkBalance("1234");
account.deposit("1234", 100);
account.withdraw("1234", 50);
account.changePin("1234", "5462");
