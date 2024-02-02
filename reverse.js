const sentance = 'I am learning Web Dev.';
// const result = '.veD beD gninrael ma I';

let reverse = ''
for(const letter of sentance){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);


// ignore this solution
let rev = '';
for (let i = 0; i <sentance.length; i++) {
    // console.log(sentance[i]);
    const letter = sentance[i];
    rev = letter + rev;
}
console.log(rev);


// shortcut
const reversed = sentance.split('').reverse().join('');
console.log(reversed);