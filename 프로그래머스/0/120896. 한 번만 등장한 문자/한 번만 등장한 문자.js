function solution(s) {
    let answer = '';
    s.split('').forEach(v => {
        s.indexOf(v) === s.lastIndexOf(v) ? answer += v : answer;
    })
    return answer.split('').sort().join('');
}