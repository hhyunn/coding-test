function solution(myString) {
    let answer = '';
    myString.split('').forEach((v, i) => {
        answer += myString.charCodeAt(i) < 'l'.charCodeAt(0) ? 'l' : v;
    })
    return answer;
}