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

    function decode(expr) {

        let dict = new Map();

        dict.set('0000001011', 'a');
        dict.set('0011101010', 'b');
        dict.set('0011101110', 'c');
        dict.set('0000111010', 'd');
        dict.set('0000000010', 'e');
        dict.set('0010101110', 'f');
        dict.set('0000111110', 'g');
        dict.set('0010101010', 'h');
        dict.set('0000001010', 'i');
        dict.set('0010111111', 'j');
        dict.set('0000111011', 'k');
        dict.set('0010111010', 'l');
        dict.set('0000001111', 'm');
        dict.set('0000001110', 'n');
        dict.set('0000111111', 'o');
        dict.set('0010111110', 'p');
        dict.set('0011111011', 'q');
        dict.set('0000101110', 'r');
        dict.set('0000101010', 's');
        dict.set('0000000011', 't');
        dict.set('0000101011', 'u');
        dict.set('0010101011', 'v');
        dict.set('0000101111', 'w');
        dict.set('0011101011', 'x');
        dict.set('0011101111', 'y');
        dict.set('0011111010', 'z');
        dict.set('1011111111', '1');
        dict.set('1010111111', '2');
        dict.set('1010101111', '3');
        dict.set('1010101011', '4');
        dict.set('1010101010', '5');
        dict.set('1110101010', '6');
        dict.set('1111101010', '7');
        dict.set('1111111010', '8');
        dict.set('1111111110', '9');
        dict.set('1111111111', '0');
        dict.set('**********', ' ');



        let decoder = '';
        let wordLength = 10;
        let exprArr = [(expr.length / 10)];
        let temp = '';
        let j = 0;

        for (let i = 0; i < expr.length; i++) {
            temp += expr[i];
            if ((i + 1) % 10 === 0) {
                exprArr[j] = temp;
                temp = '';
                j++;
            }

        }

        for (let i = 0; i < exprArr.length; i++) {
            temp = dict.get(exprArr[i] + '');
            decoder += temp;
        }
        return decoder;
}

module.exports = {
    decode
}