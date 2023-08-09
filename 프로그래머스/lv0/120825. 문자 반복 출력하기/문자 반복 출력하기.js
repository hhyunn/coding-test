function solution(my_string, n) {
    let answer = '';
    answer = my_string.split('').map(v => v.repeat(n)).join('');
    return answer;
}