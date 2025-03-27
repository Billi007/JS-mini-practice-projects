let input = document.getElementById('input');

const length = 8
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";
const allCharacters = uppercase + lowercase + numbers + symbols;

function generatePassword(){
let password ="";
password += uppercase[Math.floor(Math.random() * uppercase.length)];
password += lowercase[Math.floor(Math.random() * lowercase.length)];
password += numbers[Math.floor(Math.random() * numbers.length)];
password += symbols[Math.floor(Math.random() * symbols.length)];

while(length > password.length){
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
}
    input.value = password;
}


function copyToClipboard(){
    input.select();
    document.execCommand('copy');
    alert("Password copied to clipboard");
}