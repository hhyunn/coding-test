const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    str.split('').forEach(v => {
        answer += v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase();
    })
    console.log(answer);
});