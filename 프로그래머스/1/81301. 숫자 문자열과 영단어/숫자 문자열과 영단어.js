function solution(s) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    num.forEach((v, i) => {
        s = s.replaceAll(v, i);
    })
    return parseInt(s);
}