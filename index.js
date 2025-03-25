// Assignment 3 
// min 8 char, no space, excl username


let password = "abcdefgh";
let username = "sannejohansson"; 

function isValidPassword(password) {
    const spaceRegex = /\s/;
    
    if (password.length < 8) {
        return false; 
    }

    if (spaceRegex.test(password)) {
        return false;
    }

    if (password.includes(username)) {
        return false;
    }

    return true; 
}

console.log(isValidPassword("abcdefgh"));


