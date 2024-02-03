function solution(s) {
    let count = 0;
    let zeroCount = 0;
    while (s !== '1') {
        s.split('').forEach(v => {
            v === '0' ? zeroCount++ : zeroCount;
        })
        s = s.replaceAll('0', '').length.toString(2);
        count++;
    }
    return [count, zeroCount];
}