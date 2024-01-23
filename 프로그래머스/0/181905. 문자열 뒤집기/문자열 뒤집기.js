function solution(my_string, s, e) {
    let answer = '';
    const left = my_string.slice(0, s);
    const middle = my_string.slice(s, e+1).split('').reverse().join('');
    const right = my_string.slice(e+1);
    answer = left + middle + right;
    return answer;
}