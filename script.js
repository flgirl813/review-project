// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
// const chars = [
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   "abcdefghijklmnopqrstuvwxyz",
//   "0123456789",
//   "!@#$%^&*()_+~`|}{[]:;?><,./-=",
// ];

let chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;
let password = "";
function addNewPassword() {
  for (let i = 0; i <= passwordLength; i++) {
    let randomPassword = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomPassword, randomPassword + 1);
  }
  return password;
}

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
  document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
