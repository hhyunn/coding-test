function solution(myString, pat) {
    let str = '';
    myString.split('').forEach(v => {
        str += v === 'A' ? 'B' : 'A';
    })
    return +str.includes(pat);
}