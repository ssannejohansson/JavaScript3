// Assignment 3 
// min 8 char, no space, excl username


function isValidPassword(password, username) {
    const spaceRegex = /\s/;
    
    if (password.length < 8) {
        return false; 
    } else if (spaceRegex.test(password)) {
        return false;
    } else if (password.includes(username)) {
        return false;
    } else {
    return true; 
    }
}

console.log(isValidPassword("abcdefgh", "sannejohansson"));


