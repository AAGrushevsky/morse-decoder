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

function fragmentation(str, part) {
  let pattern = new RegExp(".{1," + part + "}", "ig");
  return str.match(pattern).map(item => item.padEnd(part, "."))
}

function crop(sequence) {
  let morseKey = sequence.replace(/^0+/, '');
  return morseKey;
}

function convert(str) {
  return str === '10' ? '.' : '-';
}

function decode(expr) {
  // write your solution here
  let arrCodeWords = expr.split('**********');
  let arrCodeWordsLettersLong = arrCodeWords.map(item => fragmentation(item, 10));
  let arrCodeWordsLettersShort = arrCodeWordsLettersLong.map(item => item.map(el => crop(el)));
  let arrKeyWordsLetters = arrCodeWordsLettersShort.map(item => item.map(el => fragmentation(el, 2).map(part => convert(part)).join('')).map(el => MORSE_TABLE[el]).join('')).join(' ')
  return arrKeyWordsLetters;
}

module.exports = {
    decode
}
