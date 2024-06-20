parseAndCheck = (arr) => {
  for (let val of arr) {
    let parsed = parseFloat(val);
    if (Number.isNaN(parsed)) {
      console.log("Invalid number");
    } else {
      console.log("is number");
    }
  }
};

parseAndCheck([1, 2, "23", "abscd", 45.4]);
