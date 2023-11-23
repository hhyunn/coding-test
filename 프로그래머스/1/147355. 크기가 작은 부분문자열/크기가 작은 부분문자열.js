function solution(t, p) {
    let answer = 0;
    for (let i=0; i<=t.length-p.length; i++) {
        answer += parseInt(t.slice(i, i+p.length)) <= parseInt(p);
    }
    return answer;
}
