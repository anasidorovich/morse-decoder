const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

var MORSE_REPLACEMENT_MAP = {
    '10': '.',
    '11': '-',
    "**********": " "
}

var LETTER_LENGTH = 10;

function decode(expr) {
    let output = '';
    for (let i = 0; i < expr.length / LETTER_LENGTH; i++) {
        let word = expr.substring(i * LETTER_LENGTH, (i + 1) * LETTER_LENGTH);
        if (isNaN(word)) {
            output += MORSE_REPLACEMENT_MAP[word];
        } else {
            let wordWithoutZeroPadding = parseInt(word).toString();
            let morseWord = '';
            for (let j = 0; j < wordWithoutZeroPadding.length / 2; j++) {
                let letter = wordWithoutZeroPadding.substring(j * 2, (j + 1) * 2);
                morseWord += MORSE_REPLACEMENT_MAP[letter];
            }
            output += MORSE_TABLE[morseWord];
        }
    }
    return output;
}

module.exports = {
    decode
}
