function solution(s) {
    let answer = '';
    let num = 0;
    num = s.split(' ');
    // num = num.map(x => Number(x));
    answer = Math.min(...num) + ' ' + Math.max(...num);
    return answer;
}