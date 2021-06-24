const divideAndSort = (number, callback) => {
  if (
    !Boolean(number) ||
    typeof number !== "number" ||
    !Boolean(callback) ||
    typeof callback !== "function"
  ) {
    console.log(
      "number must bea number,callback must be a function and cannot be empty"
    );
  } else {
    callback(number);
  }
};
const sortingNumber = (number) => {
  let randomNumber = number.toString().split("0");
  for (let i = 0; i < randomNumber.length; i++) {
    randomNumber[i] = randomNumber[i]
      .split("")
      .sort((a, b) => a - b)
      .join("");
  }
  let splitNumber = parseInt(randomNumber.join(""));
  console.log(splitNumber);
};
divideAndSort(5956560159466056, sortingNumber);
divideAndSort(1781635012076163, sortingNumber);
