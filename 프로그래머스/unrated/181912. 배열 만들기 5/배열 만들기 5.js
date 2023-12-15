function solution(intStrs, k, s, l) {
    const answer = [];
    intStrs.forEach(v => {
        v.slice(s, s+l) > k ? answer.push(parseInt(v.slice(s, s+l))) : null;
    })
    return answer;
}