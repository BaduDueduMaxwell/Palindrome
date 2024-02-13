const button = document.getElementById("check-btn");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const getInput = document.getElementById("text-input").value.toLowerCase();
  const checkGetInput = getInput.split("").reverse().join("");
  const regexGetInput = getInput.replace(/[^a-zA-Z0-9]/g, "");
  const regexCheckGetInput = checkGetInput.replace(/[^a-zA-Z0-9]/g, "");

  if (regexGetInput === "") {
    alert("Please input a value");
  } else if (regexGetInput === regexCheckGetInput) {
    document.getElementById("result").innerHTML = `${getInput} is a Palindrome`;
    console.log(`${getInput} is a palindrome`);
  } else {
    document.getElementById("result").innerHTML = `${getInput} is a Palindrome`;
    console.log(`${getInput} is not a palindrome`);
  }
});
