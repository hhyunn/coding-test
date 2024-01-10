function solution(myStr) {
    const answer = [];
    myStr.split(/[abc]/g).forEach(v => {
        v !== '' ? answer.push(v) : null;
    })
    if (answer.length === 0) answer.push('EMPTY');
    return answer;
}