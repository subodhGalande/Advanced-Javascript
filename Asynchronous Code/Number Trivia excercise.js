const BASE_URL = "http://numbersapi.com";

showNumberTrivia = async (num) => {
  let link = `${BASE_URL}/${num}?json`;
  const response = await fetch(link);
  const numberTrivia = await response.json();
  console.log("showNumberTrivia:", numberTrivia.text);
};

showNumberRace = async (nums) => {
  const respPromises = nums.map((number) =>
    fetch(`${BASE_URL}/${number}?json`)
  );

  const winningResponse = await Promise.race(respPromises);

  const winningData = await winningResponse.json();

  console.log("showNumberRace:", winningData.text);
};

showNumberAll = async (nums) => {
  const respPromises = nums.map((number) =>
    fetch(`${BASE_URL}/${number}?json`)
  );

  const settledFetchResponses = await Promise.allSettled(respPromises);

  const okResponses = settledFetchResponses.filter(
    (r) => r.status === "fulfilled" && r.value.ok === true
  );

  const numDataJsonPromises = okResponses.map((r) => r.value.json());

  const numberData = await Promise.all(numDataJsonPromises);
  const facts = numberData.map((d) => d.text);
  console.log("showNumberAll fulfilled:", facts);

  const errors = settledFetchResponses
    .filter((r) => r.status === "fulfilled" && r.value.ok === false)
    .map((r) => `${r.value.status}: ${r.value.statusText}`);

  console.log("showNumberAll rejected: ", errors);
};

main = async () => {
  await showNumberTrivia(5);
  await showNumberRace([1, 2, 3, 4, 5]);
  await showNumberAll([1, 2, 3, "Wrong"]);
};

main();
