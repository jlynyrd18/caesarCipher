function sum(a,b) {
    return a+b;
}

function capitalize(a) {
    let toCap = a.substring(0,1);
    let word = a.substring(1);
    let cap = toCap.toUpperCase();
    return cap+word;
}

function reverse(x) {
    let wordSplit = x.split('');
    let revWord = wordSplit.reverse();
    let newWord = revWord.join("");
    return newWord;
}

const calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    multiply: function(a,b) {
        return a * b;
    },
    divide: function(a,b) {
        return a / b;
    }
}

function cipher(a,b) {
    const regexLower = /[a-z]/;
    const regexHigher = /[A-Z]/;
    let letterCipher = "";
    for(let i = 0; i < a.length; i++) {
        if(regexLower.test(a[i]) || regexHigher.test(a[i])) {
            let code = a.charCodeAt(i);
            let shift = code + b;
            //if shift is greater than unicode and letter size subtract 26
            if(code >= 65 && code <= 90 && shift > 90) {
                shift -= 26;
            }else if (shift > 122) {
                shift -= 26;
            }
            let newLetter = String.fromCharCode(shift);
            letterCipher += newLetter;
        }else {
            letterCipher += a[i];
        }
    }
    return letterCipher;
}
module.exports = {
    sum, 
    capitalize,
    reverse,
    calculator, 
    cipher
}

