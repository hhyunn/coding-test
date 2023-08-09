function solution(myString) {
    let answer = '';
    answer = myString.split('').map(v => v.toUpperCase()).join('')
    return answer;
}